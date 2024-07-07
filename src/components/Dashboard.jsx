import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ActivitiesChart from "./ActivitiesChart";
import TopProductsChart from "./TopProductsChart";
import AddProfilePopup from "./AddProfilePopup";
import "../Dashboard.css";

const Dashboard = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [profile, setProfile] = useState(null);

  const metrics = [
    {
      icon: "assets/revenue_icon.png",
      name: "Total Revenues",
      value: "$2,129,430",
      percentage: 4,
    },
    {
      icon: "assets/transactions_icon.png",
      name: "Total Transactions",
      value: "1,520",
      percentage: 2,
    },
    {
      icon: "assets/likes_icon.png",
      name: "Total Likes",
      value: "9,721",
      percentage: 8,
    },
    {
      icon: "assets/users_icon.png",
      name: "Total Users",
      value: "9,721",
      percentage: -5,
    },
  ];

  const handleProfileSubmit = (profileData) => {
    setProfile(profileData);
    setIsPopupOpen(false);
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <header>
          <h2>Dashboard</h2>
          <div className="search-profile">
            <div className="search-input-container">
              <input type="text" placeholder="Search..." />
              <img
                src="assets/search_icon.svg"
                alt="Search"
                className="search-icon"
              />
            </div>
            <img src="assets/notification_icon.svg" alt="Notifications" />
            <img src="assets/profile.png" alt="Profile" />
          </div>
        </header>
        <div className="metrics">
          {metrics.map((metric, index) => (
            <div className="metric" key={index}>
              <img
                src={metric.icon}
                alt={metric.name}
                className="metric-icon"
              />
              <div className="metric-details">
                <span className="metric-name">{metric.name}</span>
                <div className="metric-value-percentage">
                  <span className="metric-value">{metric.value}</span>
                  <span
                    className="metric-percentage"
                    style={{
                      color: metric.percentage >= 0 ? "#2ECC71" : "#E74C3C",
                      borderColor:
                        metric.percentage >= 0 ? "#2ECC71" : "#E74C3C",
                    }}
                  >
                    {metric.percentage >= 0
                      ? `+${metric.percentage}%`
                      : `${metric.percentage}%`}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="activities-chart">
          <ActivitiesChart />
        </div>
        <div className="charts-container">
          <div className="top-products">
            <TopProductsChart />
          </div>
          <div className="profile-container">
            {profile ? (
              <div className="profile-details">
                <h3 style={{ marginLeft: 40, marginTop: 40 }}>
                  {profile.name}
                </h3>
                <div className="profile-row" style={{ marginLeft: 40 }}>
                  <p style={{ width: "50%" }}>
                    <a href={`tel:${profile.phone}`}>
                      <img
                        src="/assets/whatsapp.svg"
                        style={{ height: 20, width: 20, marginRight: 10 }}
                        className="icon"
                        alt="whatsapp"
                      />
                      {profile.phone}
                    </a>
                  </p>
                  {profile.instagram && (
                    <p style={{ width: "50%", marginLeft: 20 }}>
                      <a href={`https://instagram.com/@${profile.instagram}`}>
                        <img
                          alt="insta"
                          src="/assets/insta.svg"
                          style={{ height: 20, width: 20, marginRight: 10 }}
                          className="icon"
                        />
                        {profile.instagram}
                      </a>
                    </p>
                  )}
                </div>
                <div className="profile-row" style={{ marginLeft: 40 }}>
                  <p style={{ width: "50%" }}>
                    <img
                    alt="mail"
                      src="/assets/mail.svg"
                      style={{ height: 20, width: 20, marginRight: 10 }}
                      className="icon"
                    />
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  </p>
                  {profile.youtube && (
                    <p style={{ width: "50%", marginLeft: 20 }}>
                      <img
                        src="/assets/youtube.svg"
                        alt="youtube"
                        style={{ height: 20, width: 20, marginRight: 10 }}
                        className="icon"
                      />
                      <a href={`https://youtube.com/@${profile.youtube}`}>
                        {profile.youtube}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div
                className="add-profile-button"
                onClick={() => setIsPopupOpen(true)}
              >
                <div className="circle">
                  <span className="plus-icon">+</span>
                </div>
                <p className="add-profile-text">Add Profile</p>
              </div>
            )}
            {isPopupOpen && (
              <AddProfilePopup
                onClose={() => setIsPopupOpen(false)}
                onSubmit={handleProfileSubmit}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
