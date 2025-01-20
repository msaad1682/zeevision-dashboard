import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./Report.css"; // Add your custom styles here

const Report = () => {
  const [data, setData] = useState([
    { date: "2025-01-01", client: "M.Saad", calls: 100, sales: 50 },
    { date: "2025-01-02", client: "Fahad", calls: 12, sales: 7 },
    { date: "2025-01-03", client: "Usama", calls: 8, sales: 3 },
  ]);

  const handleDownloadCSV = () => {
    const headers = ["Date", "Client Name", "Calls Made", "Sales Closed"];
    const csvContent = [
      headers.join(","), // Add headers as the first row
      ...data.map((row) => `${row.date},${row.client},${row.calls},${row.sales}`), // Map each row to a CSV line
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "sales-report.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Title
    doc.setFontSize(18);
    doc.text("Weekly Sales Call Report", 14, 20);

    // Table headers and data
    const tableColumn = ["Date", "Client Name", "Calls Made", "Sales Closed"];
    const tableRows = data.map((row) => [row.date, row.client, row.calls, row.sales]);

    // Add the table to the PDF
    doc.autoTable({
      startY: 30,
      head: [tableColumn],
      body: tableRows,
    });

    // Save the PDF
    doc.save("sales-report.pdf");
  };

  return (
    <div className="report-container">
      <h1 className="mt-4">Weekly Sales Call Report</h1>
      <div style={{ marginTop: "20px" }}>
        <button className=" download" onClick={handleDownloadCSV} style={{ marginRight: "10px" }}>
          Download Report as CSV
        </button>
        <button className="download-pdf" onClick={handleDownloadPDF}>
          Download Report as PDF
        </button>
      </div>
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
