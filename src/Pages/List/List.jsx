import React from "react";

function List() {
  // Dummy array for table data
  const formFields = [
    {
      fullName: "Muhammad",
      lastName: "Saad",
      phone1: "03211682070",
      phone2: "03120882711",
      email: "m.saad@gmail.com",
      cnic: "12345-6789012-3",
      password: "dummy23",
      date: "2025-01-01",
      startDate: "2025-01-01",
      endDate: "2025-12-31",
      address: "123 Main Street, Springfield",
    },
  ];

  // Handler for Edit button
  const handleEdit = (index) => {
    console.log("Edit clicked for row:", index);
    // Add logic for edit here, e.g., open a form to edit the row
  };

  // Handler for Delete button
  const handleDelete = (index) => {
    console.log("Delete clicked for row:", index);
    // Add logic for delete here, e.g., remove from state or make an API call
  };

  return (
    <div className="container table-responsive">
      <h1>User Data Table</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Last Name</th>
            <th>Phone 1</th>
            <th>Phone 2</th>
            <th>Email</th>
            <th>CNIC</th>
            <th>Password</th>
            <th>Date</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {formFields.map((field, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{field.fullName}</td>
              <td>{field.lastName}</td>
              <td>{field.phone1}</td>
              <td>{field.phone2}</td>
              <td>{field.email}</td>
              <td>{field.cnic}</td>
              <td>{field.password}</td>
              <td>{field.date}</td>
              <td>{field.startDate}</td>
              <td>{field.endDate}</td>
              <td>{field.address}</td>
              <td>
                {/* Edit and Delete Buttons */}
                <button onClick={() => handleEdit(index)} className="btn btn-warning btn-sm me-2">
                  Edit
                </button>
                <button onClick={() => handleDelete(index)} className="btn btn-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
