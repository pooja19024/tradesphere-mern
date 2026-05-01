import React from "react";

// Import required modules from Chart.js
import {
  Chart as ChartJS,
  CategoryScale,   // For X-axis (categories like stock names)
  LinearScale,     // For Y-axis (numeric values)
  BarElement,      // Required for bar chart
  Title,           // Chart title
  Tooltip,         // Hover info
  Legend,           // Labels for datasets
} from "chart.js";

// Import Bar chart component for React
import { Bar } from "react-chartjs-2";


// Register all required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


// Chart configuration options
export const options = {
  responsive: true,     // Makes chart responsive for all screen sizes
  plugins: {
    legend: {
      position: "top",      // Position of legend
    },
    title: {
      display: true,       // Enable title
      text: "Holdings",    // Title text
    },
  },
};

// Reusable Bar Chart Component
export function VerticalGraph({ data }) {


  // data prop comes from parent (e.g., Holdings.js)
  // contains labels (stock names) and datasets (prices)
  return <Bar options={options} data={data} />;
}