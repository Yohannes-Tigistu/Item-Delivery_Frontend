import React from 'react';
import './Details.css';
import { Link } from 'react-router-dom';
import driver from '../components/images/driver.gif'; 
import right_arrow from '../components/images/Right_Arrow.png';
import Phone from '../components/images/Phone_icon.png';
import OrderForm from './OrderForm'; 

const Details = () => {
  return (
    <div className="container">
      <div className="ellipse-container">
        <div className="ellipse ellipse1" id="ellipse1">
          <div className="text1">1</div>
        </div>
        <div className="line"></div>
        <div className="ellipse ellipse2" id="ellipse2">
          <div className="text2">2</div>
        </div>
      </div>
      <div className="Box">
        <img src={driver} alt="Deliverer" />
        <div className="info">
          <h2 className="Name">Ayele Solomon</h2>
          <div className="contact-info">
            <div style={{ width: "70px" }} className="contact">Contact:</div>
            <img src={Phone} alt="phone_icon" id="phone" />
            <div className="number" title="Click to Call">
              <a href="tel:+251911368978">+251911368978</a>
            </div>
          </div>
          <div className="contact-info">
            <div style={{ width: "70px" }} className="email">Email:</div>
            <div className="email" title="Click to Email">
              <a href="mailto:ayele.solomon@gmail.com">ayele.solomon@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="vehicle-info">
          <div className="vehicle">Vehicle: Toyota Camry, License Plate: ABC123</div>
        </div>
        <div className="delivery">
          <div className="delivery-status">Delivery Status: Currently on delivery</div>
        </div>
        <div className="delivery-history">
          <div className="history">Delivery History:</div>
          <ul>
            <li>Delivery #1: April 8, 2024 - Completed</li>
            <li>Delivery #2: April 7, 2024 - Completed</li>
            <li>Delivery #3: April 6, 2024 - Pending</li>
          </ul>
        </div>
        <div className="order-container">
        <Link to="../pages/OrderForm" className='order'>Place Your Order</Link>      
        <img src={right_arrow} alt="Arrow" id="arr"/>
        </div>
      </div>
    </div>
  );
}

export default Details;