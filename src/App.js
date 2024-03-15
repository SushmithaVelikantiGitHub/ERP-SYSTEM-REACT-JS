// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Dashboard from './Dashboard';
import Product from './ProductsManagement';
import Order from './OrdersManagement';
import OrderCalenderView  from './CalenderView';
import './App.css'; 
import './assets/Screenshot 2024-03-11 163547.png';

function App() {
  return (
    

    <Router>
            
      <div>

        <nav className="navbar">
          <ul className="nav-list">
          
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className="nav-link">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/order" className="nav-link">Orders</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Order />} />
          <Route path="/calenderView" element={<OrderCalenderView />} />
        </Routes>
      </div>
      <div>
        <h1 align="center" className="title">simplified ERP System</h1>
      </div>
      
    </Router>

    
  
  );
}

export default App;
