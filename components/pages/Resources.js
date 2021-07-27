import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Resources = () => {
  const [employees, setEmployee] = useState([]);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:8080/api/vi/employees");
    setEmployee(result.data.reverse());
  };

  const deleteEmployee = async id => {
    await axios.delete(`http://localhost:8080/api/v1/employees/${id}`);
    loadEmployees();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Projects</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email Id</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{employee.firsttName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/employees/${employee.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2"
                    to={`/employees/edit/${employee.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteEmployee(employee.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Resources;