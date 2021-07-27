  
import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";


const AddEmployee = () => {
  let history = useHistory();
  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    emailId: ""

  });

  const { firstName, lastName, emailId} =employee;
  const onInputChange = e => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/v1/employees",employee);
    history.push("/projects");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Employee</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter first Name"
              name="name"
              value={firstName}
              onChange={e => onInputChange(e)}/> <br />
            
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter last Name"
              name="username"
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
              onChange={e => onInputChange(e)}/> <br />
            
          </div>
         
          <button className="btn btn-primary btn-block">Add Employee</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;