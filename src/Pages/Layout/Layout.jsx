import React, { useState } from "react";
import "./Layout.css";

const InputComponent = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    lastName: "",
    phone1: "",
    phone2: "",
    email: "",
    cnic: "",
    password: "",
    date: "",
    startDate: "",
    endDate: "",
    address: "",
    isActive: false,
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="container form-container">
      <h2 className="text-center mb-4">Add User Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Full Name and Last Name */}
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        {/* Phone 1 and Phone 2 */}
        <div className="input-group mb-3">
          <input
            type="tel"
            className="form-control"
            placeholder="Phone 1"
            name="phone1"
            value={formData.phone1}
            onChange={handleChange}
          />
          <input
            type="tel"
            className="form-control"
            placeholder="Phone 2"
            name="phone2"
            value={formData.phone2}
            onChange={handleChange}
          />
        </div>

        {/* Email and CNIC */}
        <div className="input-group mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            className="form-control"
            placeholder="CNIC"
            name="cnic"
            value={formData.cnic}
            onChange={handleChange}
          />
        </div>

        {/* Password and Date */}
        <div className="input-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="date"
            className="form-control"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        {/* Additional Date Fields */}
        <div className="input-group mb-3">
          <input
            type="date"
            className="form-control"
            placeholder="Start Date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
          <input
            type="date"
            className="form-control"
            placeholder="End Date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
          />
        </div>

        {/* Address */}
        <div className="input-group mb-3">
          <span className="input-group-text">Address</span>
          <textarea
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address here..."
          ></textarea>
        </div>

        {/* Is Active Checkbox */}
        <div className="form-check mb-4">
          <input
            className="form-check-input"
            type="checkbox"
            id="isActive"
            name="isActive"
            checked={formData.isActive}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="isActive">
            Is Active
          </label>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button className="btn btn-primary btn-submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputComponent;
 