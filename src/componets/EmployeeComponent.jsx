import React, { useState } from "react";
import { addEmployees } from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const navigator = useNavigate();

  function vlaidateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (firstName.trim()) {
      errorsCopy.firstName = "";
    } else {
      errorsCopy.firstName = "First name is required";
      valid = false;
    }

    if (lastName.trim()) {
      errorsCopy.lastName = "";
    } else {
      errorsCopy.lastName = "Last name is required";
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "Email Id is required";
      valid = false;
    }

    setErrors(errorsCopy);
  }

  return (
    <>
      <div className="container mt-3 mb-5">
        <div className="row">
          <div className="card col-xl-6 offset-xl-3  col-md-6 offset-md-3 col-6 offset-3 py-5 mt-5 ">
            <h2 className="text-center ">Add Employee</h2>
            <div className="card-body">
              <form action="">
                <div className="form-group mb-2">
                  <label className="form-label pl-3"> First Name</label>
                  <input
                    type="text"
                    placeholder="Enter Employee First Name"
                    name="firstName"
                    value={firstName}
                    className={`form-control ${
                      errors.firstName ? "is-invalid" : ""
                    }`}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                  {errors.firstName && (
                    <div className="invalid-feedback ">{errors.firstName}</div>
                  )}
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Last Name</label>
                  <input
                    type="text"
                    placeholder="Enter Employee Last Name"
                    name="lastName"
                    value={lastName}
                    className={`form-control ${
                      errors.lastName ? "is-invalid" : ""
                    }`}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                  {errors.lastName && (
                    <div className="invalid-feedback ">{errors.lastName}</div>
                  )}
                </div>
                <div className="form-group mb-2">
                  <label className="form-label">Email Id</label>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    value={email}
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  {errors.email && (
                    <div className="invalid-feedback ">{errors.email}</div>
                  )}
                </div>
                <button
                  type="button"
                  className="btn btn-outline-primary mt-5 offset-2 offset-md-3 offset-lg-4"
                  onClick={(e) => {
                    e.preventDefault();
                    // vlaidateForm();
                    console.log("hello");
                    (async () => {
                      const employee = { firstName, lastName, email };
                      const response = await addEmployees(employee);
                      console.log(response.data);
                      navigator("/employees");
                    })();
                  }}
                >
                  Add Employee
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeComponent;
