import React, { useState } from "react";
import "./Report.css"; // Add your custom styles here

const Report = () => {
  const [data, setData] = useState([
    { date: "2025-01-01", client: "Client A", calls: 10, sales: 5 },
    { date: "2025-01-02", client: "Client B", calls: 12, sales: 7 },
    { date: "2025-01-03", client: "Client C", calls: 8, sales: 3 },
  ]);

  const handleDownload = () => {
    // Convert table data to CSV format
    const headers = ["Date", "Client Name", "Calls Made", "Sales Closed"];
    const csvContent = [
      headers.join(","), // Add headers as the first row
      ...data.map((row) => `${row.date},${row.client},${row.calls},${row.sales}`), // Map each row to a CSV line
    ].join("\n");

    // Create a Blob from the CSV content
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

    // Create a downloadable link
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "sales-report.csv"; // File name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="report-container">
      <h1 className="mt-4">Weekly Sales Call Report</h1>
      <button onClick={handleDownload} style={{ marginTop: "20px" }}>
        Download Report as CSV
      </button>
      <table className="report-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Client Name</th>
            <th>Calls Made</th>
            <th>Sales Closed</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.client}</td>
              <td>{row.calls}</td>
              <td>{row.sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Report;
