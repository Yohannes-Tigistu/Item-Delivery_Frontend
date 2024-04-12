import React, { useState } from 'react';

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

  return (
    <div className="flex justify-center items-center min-h-screen" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="bg-white rounded-md shadow-md p-4 md:p-12" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', marginRight: '20px' }}>
        <h1 className="text-center text-lg font-bold mb-8">Create Your Order</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="category" className="font-bold">Category</label>
              <select
                id="category"
                name="category"
                className="block w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                value={formData.category}
                required
              >
                <option value="Addis Ababa">Addis Ababa</option>
                {/* Add more category options here */}
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="upload-image" className="font-bold">Upload Image</label>
              <input
                id="upload-image"
                name="uploadImage"
                type="file"
                className="block w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="weight" className="font-bold">Weight</label>
              <input
                id="weight"
                name="weight"
                type="number"
                className="block w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                value={formData.weight}
                required
              />
            </div>
            <div className="flex-1">
              <label htmlFor="receiver-phone" className="font-bold">Receiver Phone</label>
              <input
                id="receiver-phone"
                name="receiverPhone"
                type="tel"
                className="block w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                value={formData.receiverPhone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label htmlFor="receiver-name" className="font-bold">Receiver Name</label>
              <input
                id="receiver-name"
                name="receiverName"
                type="text"
                className="block w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                value={formData.receiverName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex-1"></div>
          </div>
          <div>
            <label htmlFor="description" className="font-bold">Description</label>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="block w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div>
            <button type="submit" className="block w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default OrderForm;
