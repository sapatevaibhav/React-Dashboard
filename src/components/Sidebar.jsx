import React from 'react';
import { ReactSVG } from 'react-svg';

const Sidebar = React.memo(() => (
  <div className="sidebar">
    <div>
      <h1>Board.</h1>
      <nav>
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <ReactSVG src="/assets/dashboard_icon.svg" className="icon" />
            <span className="sidebar-text"><b>Dashboard</b></span>
          </li>
          <li className="sidebar-item">
            <ReactSVG src="/assets/transaction_icon.svg" className="icon" />
            <span className="sidebar-text">Transactions</span>
          </li>
          <li className="sidebar-item">
            <ReactSVG src="/assets/schedule_icon.svg" className="icon" />
            <span className="sidebar-text">Schedules</span>
          </li>
          <li className="sidebar-item">
            <ReactSVG src="/assets/user_icon.svg" className="icon" />
            <span className="sidebar-text">Users</span>
          </li>
          <li className="sidebar-item">
            <ReactSVG src="/assets/setting_icon.svg" className="icon" />
            <span className="sidebar-text">Settings</span>
          </li>
        </ul>
      </nav>
    </div>
    <div className="bottom-options">
      <ul>
        <li>Help</li>
        <li>Contact Us</li>
      </ul>
    </div>
  </div>
));

export default Sidebar;
