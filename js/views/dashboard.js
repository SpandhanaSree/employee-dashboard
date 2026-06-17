import { state } from "../state.js";

export default function () {

  const totalEmployees = state.employees.length;

  // Example: assume all employees are active
  const activeEmployees = state.employees.length;

  // Example: use number of companies as departments
  const departments = new Set(
    state.employees.map(emp => emp.company.name)
  ).size;

  // Example: assume first 3 employees are new joinees
  const newJoinees = 3;

  return `
    <h1>Employee Dashboard</h1>

    <div class="card">👥 Total Employees: ${totalEmployees}</div>
    <div class="card">🏢 Departments: ${departments}</div>
    <div class="card">✅ Active Employees: ${activeEmployees}</div>
    <div class="card">🆕 New Joinees: ${newJoinees}</div>
  `;
}