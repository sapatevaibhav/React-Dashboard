import React, { useMemo } from "react";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ActivitiesChart = React.memo(() => {
  const data = useMemo(
    () => ({
      labels: ["", "Week 1", "", "Week 2", "", "Week 3", "", "Week 4"],
      datasets: [
        {
          label: "Guest",
          data: [0, 500, 0, 350, 0, 200, 0, 400],
          backgroundColor: "#98d89e",
          // categoryPercentage: 0.9,
          borderRadius: 5,
          barThickness: 40,
          // categorySpacing: 0,
          // barPercentage: 0.9,
        },
        {
          label: "User",
          data: [0, 400, 0, 450, 0, 300, 0, 350],
          backgroundColor: "#ee8484",
          // categoryPercentage: 0.9,
          // barPercentage: 0.9,
          borderRadius: 5,
          barThickness: 40,
        },
      ],
    }),
    []
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "end",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    scales: {
      y: {
        ticks: {
          stepSize: 100,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
      xAxes: [
        {
          maxBarThickness: 100,
          
        },
      ],
    },
  };

  return <Bar data={data} options={options} />;
});

export default ActivitiesChart;
