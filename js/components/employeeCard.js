export function employeeCard(emp){
return `<div class="card">
<h3>${emp.name}</h3>
<p>${emp.email}</p>
<button data-id="${emp.id}" class="detailsBtn">Details</button>
</div>`;
}