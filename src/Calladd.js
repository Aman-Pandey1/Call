import React, { useState } from 'react';
import './Call.css';

function Calladd() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    cardNo: '',
    address: '',
    unitSerialNo: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = " Name is required";
    if (!formData.contact) formErrors.contact = " Contact is required";
    if (!formData.cardNo) formErrors.cardNo = "Card No. is required";
    if (!formData.address) formErrors.address = "Address is required";
    if (!formData.unitSerialNo) formErrors.unitSerialNo = "Unit Serial No. is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission
      console.log('Form Data Submitted:', formData);
    }
  };

  return (
    <div className="App">
      <header className="">
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </label>
          </div>
          <div>
            <label>
              Contact:
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
              />
              {errors.contact && <span className="error">{errors.contact}</span>}
            </label>
          </div>
          <div>
            <label>
              Card No.:
              <input
                type="text"
                name="cardNo"
                value={formData.cardNo}
                onChange={handleChange}
              />
              {errors.cardNo && <span className="error">{errors.cardNo}</span>}
            </label>
          </div>
          <div>
            <label>
              Address:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
              {errors.address && <span className="error">{errors.address}</span>}
            </label>
          </div>
          <div>
            <label>
              Unit Serial No.:
              <input
                type="text"
                name="unitSerialNo"
                value={formData.unitSerialNo}
                onChange={handleChange}
              />
              {errors.unitSerialNo && <span className="error">{errors.unitSerialNo}</span>}
            </label>
          </div>
          <button className='submit-btn'  type="submit">Show</button>
          <button className='submit-btn' type="submit">Cancel</button>
        </form>
      </header>
    </div>
  );
}

export default Calladd;


