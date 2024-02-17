import React, { useEffect, useState } from "react";
import { listEmployees } from "../services/EmployeeService";
// import listEmployees from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const ListEmployeeComponet = () => {
  const [employee, setEmployee] = useState([]);
  const navigator = useNavigate();
  useEffect(() => {
    return async () => {
      try {
        const response = await listEmployees();
        setEmployee(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  }, []);
  const listEmployee = employee.map((employee) => (
    <tr key={employee.id}>
      <td>{employee.id}</td>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.email}</td>
    </tr>
  ));

  const addNewEmployee = () => {
    navigator("/add-employees");
  };
  return (
    <>
      <div className="container mt-4">
        <h2 className="text-center ">List of Employee</h2>
        <button className="btn btn-outline-primary" onClick={addNewEmployee}>
          Add Employee
        </button>
        <div className="table-responsive mt-4">
          <table className="table table-bordered ">
            <thead>
              <tr>
                <th>Employee Id</th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email Id</th>
              </tr>
            </thead>
            <tbody>{listEmployee}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListEmployeeComponet;
