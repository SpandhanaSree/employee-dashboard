import {state} from '../state.js';
import {employeeCard} from '../components/employeeCard.js';
export default function(){
return `<h1>Employees</h1>` + state.employees.map(employeeCard).join('');
}