import React from "react";

// Import required components from Chart.js
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Import Doughnut chart wrapper for React
import { Doughnut } from "react-chartjs-2";


// Register required chart elements globally
// ArcElement → required for pie/doughnut charts
// Tooltip → shows hover information
// Legend → shows labels for data
ChartJS.register(ArcElement, Tooltip, Legend);

// Reusable Doughnut Chart component
export function DoughnutChart({ data }) {
  return <Doughnut data={data} />;
}