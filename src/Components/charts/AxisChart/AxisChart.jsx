import React, { Component } from "react";
import { motion } from "framer-motion";
import CanvasJSReact from "@canvasjs/react-charts";
import "./AxisChart.css";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {
  addSymbols(e) {
    var suffixes = ["", "K", "M", "B"];
    var order = Math.max(Math.floor(Math.log(Math.abs(e.value)) / Math.log(1000)), 0);
    if (order > suffixes.length - 1) order = suffixes.length - 1;
    var suffix = suffixes[order];
    return CanvasJSReact.CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  }

  render() {
    const options = {
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "Most Popular Social Networking Sites",
      },
      axisX: {
        title: "Social Network",
        reversed: true,
      },
      axisY: {
        title: "Monthly Active Users",
        includeZero: true,
        labelFormatter: this.addSymbols,
      },
      data: [
        {
          type: "bar",
          dataPoints: [
            { y: 2200000000, label: "Facebook" },
            { y: 1800000000, label: "YouTube" },
            { y: 800000000, label: "Instagram" },
            { y: 563000000, label: "Qzone" },
            { y: 376000000, label: "Weibo" },
            { y: 336000000, label: "Twitter" },
            { y: 330000000, label: "Reddit" },
          ],
        },
      ],
    };

    return (
      <motion.div
        className="axis-chart-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="axis-chart"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
        >
          <CanvasJSChart options={options} />
        </motion.div>
      </motion.div>
    );
  }
}

export default App;
import React from 'react'

const AxisChart = () => {
  return (
	<div>
	  
	</div>
  )
}

export default AxisChart
