export function employeeCard(emp) {
  return `
    <div class="card">
      <h3>${emp.name}</h3>
      <p>${emp.email}</p>
      <button class="detailsBtn" data-id="${emp.id}">
        Details
      </button>
    </div>
  `;
}