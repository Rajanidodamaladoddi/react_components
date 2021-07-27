import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditEmployee = () => {
  let history = useHistory();
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: ""
    
  });

  const { firstName, lastName, emailId} = employee;
  const onInputChange = e => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadEmployee();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/v1/employees/${id}`, employee);
    history.push("/projects");
  };

  const loadEmployee = async () => {
    const result = await axios.get(`http://localhost:8080/api/v1/employees/${id}`);
    setEmployee(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Employee</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="firstName"
              value={firstName}
              onChange={e => onInputChange(e)} /> <br />
           
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="lastName"
              value={lastName}
              onChange={e => onInputChange(e)} /> <br />
           
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={emailId}
              onChange={e => onInputChange(e)} /> <br />
          </div>
        <button className="btn btn-warning btn-block">Update Employee</button>
        </form>
      </div>
    </div>
  );
};
export default EditEmployee;