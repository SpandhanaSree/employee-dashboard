import {state} from '../state.js';
export default function(id){
const emp=state.employees.find(e=>e.id==id);
if(!emp) return '<h2>Employee not found</h2>';
return `<div class="card">
<h2>${emp.name}</h2>
<p>Email: ${emp.email}</p>
<p>Phone: ${emp.phone}</p>
<p>Company: ${emp.company.name}</p>
</div>`;
}