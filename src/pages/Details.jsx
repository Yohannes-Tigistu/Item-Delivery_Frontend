import React from 'react';
import './Details.css';
import driver from '../components/images/driver.png'; 
import right_arrow from '../components/images/Right_Arrow.png';
import Phone from '../components/images/Phone_icon.png';

const Details = () => {
  return (
    <div className="container">
      <div className="ellipse" id="ellipse1">
        <div className="text1">1</div>
      </div>
      
      <div className="line"></div>
      
      <div className="ellipse" id="ellipse2">
        <div className="text2">2</div>
      </div>

    
      <div className="Box">
        <img src={driver} alt="Deliverer" />
        <h2 className="Name">Ayele Solomon</h2>

        <div className='info'>
        <div className="contact-info">
            <img src={Phone} alt="phone_icon" id="phone"/>
            <p className="contact">Contact:</p>
            <p className="number" title="Click to Call"><a href="tel:+251911368978">+251911368978</a></p>
            <p className="email" title="Click to Email"><a href="mailto:ayele.solomon@gmail.com">ayele.solomon@gmail.com</a></p>
        </div>
      
      <div className="vehicle-info">
        <p className="vehicle">Vehicle: Toyota Camry, License Plate: ABC123</p>
      </div>
      
      <div className="delivery">
        <p className="delivery-status">Delivery Status: Currently on delivery</p>
      </div>
      
      <div className="delivery-history">
        <p className="history">Delivery History:</p>
        <ul>
          <li>Delivery #1: April 8, 2024 - Completed</li>
          <li>Delivery #2: April 7, 2024 - Completed</li>
          <li>Delivery #3: April 6, 2024 - Pending</li>
        </ul>
      </div>
      </div>
        <p className='order'>Place Your Order</p>
        <img src={right_arrow} alt="Arrow" id="arr" /> { /*on click should redirect to order form */}
      </div>
    </div>
  );
}

export default Details;
