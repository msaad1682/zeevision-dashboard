import React, { useState } from "react";
import { motion } from "framer-motion";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./Report.css"; // Your styles

const Report = () => {
  const [data, setData] = useState([
    { date: "2025-01-01", client: "M.Saad", calls: 100, sales: 50 },
    { date: "2025-01-02", client: "Fahad", calls: 12, sales: 7 },
    { date: "2025-01-03", client: "Usama", calls: 8, sales: 3 },
  ]);

  const handleDownloadCSV = () => {
    const headers = ["Date", "Client Name", "Calls Made", "Sales Closed"];
    const csvContent = [
      headers.join(","),
      ...data.map((row) => `${row.date},${row.client},${row.calls},${row.sales}`),
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
    doc.setFontSize(18);
    doc.text("Weekly Sales Call Report", 14, 20);

    const tableColumn = ["Date", "Client Name", "Calls Made", "Sales Closed"];
    const tableRows = data.map((row) => [row.date, row.client, row.calls, row.sales]);

    doc.autoTable({
      startY: 30,
      head: [tableColumn],
      body: tableRows,
    });

    doc.save("sales-report.pdf");
  };

  return (
    <motion.div 
      className="report-container h-auto"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.8 }}
    >
      {/* Heading Animation */}
      <motion.h1 
        className="mt-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Weekly Sales Call Report
      </motion.h1>

      {/* Buttons with animation */}
      <motion.div 
        style={{ marginTop: "20px", display: "flex", gap: "10px" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <motion.button 
          className="download"
          onClick={handleDownloadCSV}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Download Report as CSV
        </motion.button>
        
        <motion.button 
          className="download-pdf"
          onClick={handleDownloadPDF}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Download Report as PDF
        </motion.button>
      </motion.div>

      {/* Table with staggered row animations */}
      <motion.table 
        className="report-table"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
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
            <motion.tr 
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <td>{row.date}</td>
              <td>{row.client}</td>
              <td>{row.calls}</td>
              <td>{row.sales}</td>
            </motion.tr>
          ))}
        </tbody>
      </motion.table>
    </motion.div>
  );
};

export default Report;
