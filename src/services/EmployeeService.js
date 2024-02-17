import axios from "axios"

const Employee_RestAPI_Base_URL = 'http://localhost:8080/api/employees';

export const listEmployees = () => axios.get(Employee_RestAPI_Base_URL);
export const addEmployees = (employee) => axios.post(Employee_RestAPI_Base_URL,employee);
