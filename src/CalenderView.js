import React, { useState } from 'react';
import './OrdersManagement.css';
import Calendar from 'react-calendar'; 
import 'react-calendar/dist/Calendar.css';
import './OrdersManagement.js';
function OrderCalenderView() {
  let initialOrders = [
    { id: 1, orderId: 'ORD001', customerName: 'John Doe', orderDate: '2024-03-15', status: 'Pending', expectedDeliveryDate: new Date() },
    { id: 2, orderId: 'ORD002', customerName: 'Jane Smith', orderDate: '2024-03-16', status: 'Processing', expectedDeliveryDate: new Date() },
    { id: 3, orderId: 'ORD003', customerName: 'Alice Johnson', orderDate: '2024-03-17', status: 'Delivered', expectedDeliveryDate: new Date() },
    { id: 4, orderId: 'ORD004', customerName: 'John Doe', orderDate: '2024-03-15', status: 'Pending', expectedDeliveryDate: new Date() }
  ];
  const [orders, setOrders] = useState(initialOrders);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedOrders, setSelectedOrders] = useState([]);
  const [selectedDeliveryStatus, setSelectedDeliveryStatus] = useState('');

  const generateRandomDate = () => {

    const startDate = new Date();
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 10);
    return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  
    if (!date) {
      setSelectedOrders(orders); // Set selectedOrders to all orders when no date is selected
      setSelectedDeliveryStatus('');
      return;
    }
  
    setSelectedOrders([]);
    setSelectedDeliveryStatus('In Progress');
  
    setSelectedOrders(orders.filter(order => {
      const expectedDeliveryDate = new Date(order.expectedDeliveryDate);
      return (
        expectedDeliveryDate.getDate() === date.getDate() &&
        expectedDeliveryDate.getMonth() === date.getMonth() &&
        expectedDeliveryDate.getFullYear() === date.getFullYear()
      );
    }));
  };
  

  const handleViewOrderDetails = (order) => {
    setSelectedOrder({
      ...order,
      shippingDate: generateRandomDate(),
      expectedDeliveryDate: generateRandomDate()
    });
  };

  const handleUpdateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map(order => {
      if (order.orderId === orderId) {
        return { ...order, status: newStatus };
      }
      return order;
    });
    setOrders(updatedOrders);
  };

  const handleDeleteOrder = (orderId) => {
    const updatedOrders = orders.filter(order => order.orderId !== orderId);
    setOrders(updatedOrders);
  };

    return (
      
        
        <div className="dashboard-container">
          <h2>Orders Calendar View</h2>
          <div className="calendar-container">
            <Calendar
              onChange={handleDateChange}
              value={selectedDate}
            />
          </div>
          <div className="selected-orders">
            <h3>Orders for {selectedDate.toDateString()}</h3>
            <ul>
              {selectedOrders.map(order => (
                <li key={order.id}>{order.customerName}</li>
              ))}
            </ul>
            {selectedDeliveryStatus && (
              <p><strong>Delivery Status:</strong> {selectedDeliveryStatus}</p>
            )}
          </div>
        </div>

    );


}
export default OrderCalenderView;