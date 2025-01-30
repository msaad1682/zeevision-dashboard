import React, { Component } from "react";
import { motion } from "framer-motion";
import CanvasJSReact from "@canvasjs/react-charts";
import "./DoughNutChart.css";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {
  render() {
    const options = {
      exportEnabled: true,
      animationEnabled: true,
      theme: "dark2",
      title: {
        text: "Developer Work Week",
      },
      subtitles: [
        {
          text: "Median hours/week",
        },
      ],
      data: [
        {
          type: "doughnut",
          startAngle: 90,
          indexLabel: "{name} ({y})",
          yValueFormatString: "#,##0.0#%",
          dataPoints: [
            { name: "Writing Code", y: 30.7 },
            { name: "Debugging", y: 36.4 },
            { name: "Problem Solving", y: 3.7 },
            { name: "Firefighting", y: 20.1 },
            { name: "Overhead", y: 9.1 },
          ],
        },
      ],
    };

    return (
      <div className="chart-container">
        <motion.div
          className="doughnut-chart"
          initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <CanvasJSChart options={options} />
        </motion.div>
      </div>
    );
  }
}

export default App;
