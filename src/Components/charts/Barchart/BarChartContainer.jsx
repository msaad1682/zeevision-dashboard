import React, { Component } from "react";
import { motion } from "framer-motion";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {
  render() {
    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "light2",
      title: {
        text: "Total Sessions 238,039",
      },
      axisY: {
        prefix: "$",
        tickLength: 0,
        suffix: "K",
        includeZero: true,
      },
      legend: {
        cursor: "pointer",
        itemclick: function (e) {
          if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
          } else {
            e.dataSeries.visible = true;
          }
          e.chart.render();
        },
      },
      toolTip: {
        shared: true,
      },
      data: [
        {
          type: "column",
          name: "Germany",
          showInLegend: true,
          color: "#118AB2",
          yValueFormatString: "$##,###K",
          dataPoints: [
            { label: "Q1", y: 50 },
            { label: "Q2", y: 100 },
            { label: "Q3", y: 120 },
            { label: "Q4", y: 140 },
          ],
        },
        {
          type: "column",
          name: "India",
          color: "#06D6A0",
          showInLegend: true,
          yValueFormatString: "$##,###K",
          dataPoints: [
            { label: "Q1", y: 75 },
            { label: "Q2", y: 115 },
            { label: "Q3", y: 150 },
            { label: "Q4", y: 160 },
          ],
        },
        {
          type: "column",
          name: "China",
          color: "#FFD166",
          showInLegend: true,
          yValueFormatString: "$##,###K",
          dataPoints: [
            { label: "Q1", y: 110 },
            { label: "Q2", y: 120 },
            { label: "Q3", y: 160 },
            { label: "Q4", y: 170 },
          ],
        },
        {
          type: "column",
          name: "USA",
          color: "#EF476F",
          showInLegend: true,
          yValueFormatString: "$##,###K",
          dataPoints: [
            { label: "Q1", y: 140 },
            { label: "Q2", y: 150 },
            { label: "Q3", y: 170 },
            { label: "Q4", y: 180 },
          ],
        },
      ],
    };

    return (
      <div className="chart-container">
        <motion.div
          className="charts flex-div"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            display: "flex",
            flexDirection: "row", // To display charts in a row (horizontally)
            justifyContent: "space-between", // Add spacing between charts
            gap: "20px", // Space between each chart
            flexWrap: "wrap", // Wrap charts to the next line if the screen is small
            marginTop: "20px",
          }}
        >
          {[1, 2, 3, 4].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              whileHover={{ scale: 1.05 }}
              style={{
                flex: "1 1 22%", // Allows each chart to take equal space
                minWidth: "250px", // Minimum width to ensure proper spacing on small screens
              }}
            >
              <CanvasJSChart options={options} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }
}

export default App;
