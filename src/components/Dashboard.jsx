import React, { Suspense } from 'react';
import Sidebar from './Sidebar';
import ActivitiesChart from './ActivitiesChart'; // Assuming direct import for simplicity
import TopProductsChart from './TopProductsChart'; // Assuming direct import for simplicity

const Dashboard = () => {
  const metrics = [
    { icon: 'assets/revenue_icon.png', name: 'Total Revenues', value: '$2,129,430', percentage: 4 },
    { icon: 'assets/transactions_icon.png', name: 'Total Transactions', value: '1,520', percentage: 2 },
    { icon: 'assets/likes_icon.png', name: 'Total Likes', value: '9,721', percentage: 8 },
    { icon: 'assets/users_icon.png', name: 'Total Users', value: '9,721', percentage: -5 },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <header>
          <h2>Dashboard</h2>
          <div className="search-profile">
            <div className="search-input-container">
              <input type="text" placeholder="Search..." />
              <img src="assets/search_icon.svg" alt="Search" className="search-icon" />
            </div>
            <img src="assets/notification_icon.svg" alt="Notifications" />
            <img src="assets/profile.png" alt="Profile" />
          </div>
        </header>
        <div className="charts-container">
          <div className="chart-fullwidth">
            <ActivitiesChart />
          </div>
          <div className="chart-halfwidth">
            <div className="top-products-chart">
              <TopProductsChart />
            </div>
          </div>
        </div>
        <div className="metrics">
          {metrics.map((metric, index) => (
            <div className="metric" key={index}>
              <img src={metric.icon} alt={metric.name} className="metric-icon" />
              <div className="metric-details">
                <span className="metric-name">{metric.name}</span>
                <div className="metric-value-percentage">
                  <span className="metric-value">{metric.value}</span>
                  <span
                    className="metric-percentage"
                    style={{
                      color: metric.percentage >= 0 ? '#2ECC71' : '#E74C3C',
                      borderColor: metric.percentage >= 0 ? '#2ECC71' : '#E74C3C',
                    }}
                  >
                    {metric.percentage >= 0 ? `+${metric.percentage}%` : `${metric.percentage}%`}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
