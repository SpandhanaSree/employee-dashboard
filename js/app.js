import { renderNavbar } from "./components/navbar.js";
import { fetchEmployees } from "./api.js";
import { state } from "./state.js";
import { router } from "./router.js";
import { employeeCard } from "./components/employeeCard.js";

document.getElementById("navbar").innerHTML = renderNavbar();

// Fetch employees and store them in state
state.employees = await fetchEmployees();

// Render the initial page
await router();




document.addEventListener("input", (e) => {

    if (e.target.id === "searchInput") {
    const search = e.target.value.toLowerCase();

    const filtered = state.employees.filter(emp =>
      emp.name.toLowerCase().includes(search)
    );

    document.getElementById("employeeList").innerHTML =
      filtered.map(employeeCard).join("");
    }
});

document.addEventListener("click", (e) => {

    if (e.target.matches("[data-link]")) {
        e.preventDefault();
        location.hash = e.target.getAttribute("href");
    }

    if (e.target.classList.contains("detailsBtn")) {
        location.hash = `#/employees/${e.target.dataset.id}`;
    }
});

window.addEventListener("hashchange", router);