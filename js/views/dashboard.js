import {state} from '../state.js';
export default function(){
return `<h1>Dashboard</h1>
<div class="card">Total Employees: ${state.employees.length}</div>`;
}