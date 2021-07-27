import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Employee = () => {
  const [employee, setEmployee ] = useState({
    firstName: "",
    lastName: "",
    emailId: ""
   
  });
  const { id } = useParams();
  useEffect(() => {
    loadEmployee ();
  }, []);
  const loadEmployee  = async () => {
    const res = await axios.get(`http://localhost:8080/api/v1/employees/${id}`);
    setEmployee(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/resources">
        back to Resources
      </Link>
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">First Name: {employee.firstName}</li>
        <li className="list-group-item">Last Name: {employee.LastName}</li>
        <li className="list-group-item">Email Id: {employee.emailId}</li>
        
      </ul>
    </div>
  );
};

export default Employee ;