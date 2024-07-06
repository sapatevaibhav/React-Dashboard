import React, { useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const TopProductsChart = React.memo(() => {
  const data = useMemo(
    () => ({
      labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
      datasets: [
        {
          data: [55, 31, 14],
          backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
          hoverBackgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
          borderRadius: {
            outerStart: 50,
            outerEnd: 0,
            innerStart: 50,
            innerEnd: 0
          },
          borderWidth: 0,
        },
      ],
    }),
    []
  );

  const options = {
    responsive: true,
    cutout: '85%',
    maintainAspectRatio: false, // Ensure the chart respects the container's aspect ratio
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <div className="chart-title">Top Products</div>
      <div className="chart-subtitle">May - June 2021</div>
      <Doughnut data={data} options={options} />
    </div>
  );
});

export default TopProductsChart;
