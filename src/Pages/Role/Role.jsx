import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


const Role = () => {
  return (
    <div>
      <div className="container form-container">
      <h2 className="text-center mb-4">Add User Role</h2>

      {/* Full Name and Sudo Name */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          name ="Full Name"
          placeholder="Full Name"
          aria-label="Full Name"
        />
        <input
          type="text"
          className="form-control"
          placeholder="Sudo Name"
          aria-label="Sudo Name"
        />
      </div>
      <div className="form-check mb-4">
        <input
          className="form-check-input"
          type="checkbox"
          id="isActive"
        />
        <label className="form-check-label" htmlFor="isActive">
          Is Active
        </label>
      </div>
      <div className="text-center">
        <button className="btn btn-primary btn-submit">Submit</button>
      </div>
    </div>
    </div>
  )
}

export default Role