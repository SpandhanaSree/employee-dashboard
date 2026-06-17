import { state } from "../state.js";

export default function(id) {
    const emp = state.employees.find(e => e.id == id);

    console.log(emp);

    if (!emp) {
        return "<h2>Employee not found</h2>";
    }

    return `
        <div class="card">
            <h2>${emp.name}</h2>
            <p><strong>Email:</strong> ${emp.email}</p>
            <p><strong>Phone:</strong> ${emp.phone}</p>
            <p><strong>Company:</strong> ${emp.company.name}</p>
            <p><strong>Department:</strong> ${emp.department}</p>
            <p><strong>Website:</strong> ${emp.website}</p>
        </div>
    `;
}
