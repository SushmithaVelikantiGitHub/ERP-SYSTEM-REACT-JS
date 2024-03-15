import React from 'react';
import './Dashboard.css'; 
import { Link } from 'react-router-dom'; 

function Dashboard() {
  // these numbers are fetched from an API
  const totalProducts =5;
  const totalOrders = 4;


  return (
    <div className="container">
      <h2 className="title">Dashboard </h2>
      <marquee class="scrolling-text">
      ENTNT simplified ERP-System for Product managemet and Order Management
    </marquee>
      <div className="metricsContainer">
        <div className="metric">
          <Link to="/product">
            <h3 className="summary"> Products Summary</h3>
            
          </Link>
          <p>Total : {totalProducts}</p>
        </div>
        <div className="metric">
          <Link to="/order">
            <h3>Orders Summary</h3>
          </Link>
          <p>Total : {totalOrders}</p>

        </div>

        <div className="metric">
          <Link to="/calenderView">
            <h3 >Calendar View</h3>
           
          </Link>
        </div>
        
      </div>
    </div>
  );
}

export default Dashboard;
