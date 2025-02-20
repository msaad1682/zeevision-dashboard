import React, { Component } from "react";
import { motion } from "framer-motion";
import CanvasJSReact from "@canvasjs/react-charts";
import "./LineChart.css";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {
  render() {
    const options = {
      animationEnabled: true,
      title: {
        text: "Monthly Sales - 2017",
      },
      axisX: {
        valueFormatString: "MMM",
      },
      axisY: {
        title: "Sales (in USD)",
        prefix: "$",
      },
      data: [
        {
          yValueFormatString: "$#,###",
          xValueFormatString: "MMMM",
          type: "spline",
          dataPoints: [
            { x: new Date(2017, 0), y: 25060 },
            { x: new Date(2017, 1), y: 27980 },
            { x: new Date(2017, 2), y: 42800 },
            { x: new Date(2017, 3), y: 32400 },
            { x: new Date(2017, 4), y: 35260 },
            { x: new Date(2017, 5), y: 33900 },
            { x: new Date(2017, 6), y: 40000 },
            { x: new Date(2017, 7), y: 52500 },
            { x: new Date(2017, 8), y: 32300 },
            { x: new Date(2017, 9), y: 42000 },
            { x: new Date(2017, 10), y: 37160 },
            { x: new Date(2017, 11), y: 38400 },
          ],
        },
      ],
    };

    return (
      <div className="chart-container">
        <motion.div
          className="line-chart"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.00 }}
        >
          <CanvasJSChart options={options} />
        </motion.div>
      </div>
    );
  }
}

export default App;
