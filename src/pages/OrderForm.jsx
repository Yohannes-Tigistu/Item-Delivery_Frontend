import React, { useState } from 'react';
import './OrderForm.css'; // Import CSS file for styling

function OrderForm() {
  const [formData, setFormData] = useState({
    category: 'Addis Ababa',
    weight: '',
    receiverName: '',
    receiverPhone: '',
    description: '',
    uploadImage: null,
  });

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    const newValue = type === 'file' ? files[0] : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
    // Add logic to handle form submission (e.g., send data to server)
  };
<hr className="separator" />

  return (
    <div className="container">
      <div className="order-form">
        <h1 className="title">Create Your Order</h1>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="category" className="label">
                Category
              </label>
              <select
                id="category"
                name="category"
                className="input"
                onChange={handleChange}
                value={formData.category}
                required
              >
                <option value="Addis Ababa">Addis Ababa</option>
                {/* Add more category options here */}
              </select>
            </div>
            <div className="form-column">
              <label htmlFor="upload-image" className="label">
                Upload Image
              </label>
              <input
                id="upload-image"
                name="uploadImage"
                type="file"
                className="input"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="weight" className="label">
                Weight
              </label>
              <input
                id="weight"
                name="weight"
                type="number"
                className="input"
                onChange={handleChange}
                value={formData.weight}
                required
              />
            </div>
            <div className="form-column">
              <label htmlFor="receiver-phone" className="label">
                Receiver Phone
              </label>
              <input
                id="receiver-phone"
                name="receiverPhone"
                type="tel"
                className="input"
                value={formData.receiverPhone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-column">
              <label htmlFor="receiver-name" className="label">
                Receiver Name
              </label>
              <input
                id="receiver-name"
                name="receiverName"
                type="text"
                className="input"
                value={formData.receiverName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-column">
              {/* Empty div to maintain column layout */}
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="description" className="label">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="input"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-row">
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrderForm;
