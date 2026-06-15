export async function router() {
    const app = document.getElementById("app");
    const hash = location.hash || "#/";

    if (hash === "#/" || hash === "") {
        const view = (await import("./views/dashboard.js")).default;
        app.innerHTML = view();
    } else if (hash === "#/employees") {
        const view = (await import("./views/employees.js")).default;
        app.innerHTML = view();
    } else if (hash.startsWith("#/employees/")) {
        const id = hash.split("/")[2];
        const view = (await import("./views/employeeDetails.js")).default;
        app.innerHTML = view(id);
    } else {
        app.innerHTML = "<h2>Page Not Found</h2>";
    }
}