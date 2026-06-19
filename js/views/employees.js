import { state } from "../state.js";
import { employeeCard } from "../components/employeeCard.js";

export default function () {
  return `
    <h1>Employees</h1>

    <input type="text" id="searchInput" placeholder="Search employee by name...">

    <div id="employeeList">
      ${state.employees.map(employeeCard).join("")}
    </div>
  `;
}