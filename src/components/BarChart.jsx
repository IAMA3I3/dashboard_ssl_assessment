import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Pending (10%)",
        data: [2, 3, 5, 1, 4, 7, 0, 3, 0, 6, 3, 2],
        backgroundColor: "#A0A0A0", // Gray for pending
        borderRadius: 10, // Apply rounding to all corners
        borderSkipped: false, // Ensure no edges are skipped for rounding
      },
      {
        label: "Income",
        data: [0, 4, 0, 0, 0, 8, 0, 0, 0, 0, 0, 0],
        backgroundColor: "#6C5CE7", // Purple for income
        borderRadius: 10,
        borderSkipped: false,
      },
      {
        label: "Expance",
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 2, 0],
        backgroundColor: "#FF4081", // Pink for expense
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          font: {
            family: "Inter", // Match your style
            size: 13,
          },
        },
      },
      tooltip: {
        enabled: true,
        titleFont: { family: "Inter" },
      },
    },
    scales: {
      x: {
        grid: {
          drawBorder: false, // Hide the X-axis line (baseline)
          display: false, // Hide vertical grid lines
        },
        border: {
          display: false, // Explicitly hide the X-axis border
        },
        ticks: {
          font: {
            family: "Inter",
            size: 8,
          },
        },
      },
      y: {
        display: false, // Completely hide the Y-axis
        grid: {
          display: false, // Hide horizontal grid lines
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
