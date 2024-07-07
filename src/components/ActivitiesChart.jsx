import React, { useMemo } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

const ActivitiesChart = React.memo(() => {
  const data = useMemo(
    () => ({
      labels: ["", "Week 1", "", "Week 2", "", "Week 3", "", "Week 4", ""],
      datasets: [
        {
          label: "Guest",
          data: [0, 500, 0, 350, 0, 200, 0, 400, 0],
          backgroundColor: "#98d89e",
          barThickness: 25,
          borderRadius: 5,
        },
        {
          label: "User",
          data: [0, 400, 0, 450, 0, 300, 0, 350, 0],
          backgroundColor: "#ee8484",
          barThickness: 25,
          borderRadius: 5,
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
    },
  };

  return (
    <div className="chart-container" style={{ height: "400px" }}>
      <div className="chart-title">Activities</div>
      <div className="chart-subtitle">May - June 2021</div>
      <Bar data={data} options={options} />
    </div>
  );
});

export default ActivitiesChart;
