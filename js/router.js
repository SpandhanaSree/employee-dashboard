export async function router() {
    const app = document.getElementById("app");
    const path = location.hash.slice(1) || "/";

    
    if (path === "/") {
        const view = (await import("./views/dashboard.js")).default;
        app.innerHTML = view();

    } else if (path === "/employees") {
        const view = (await import("./views/employees.js")).default;
        app.innerHTML = view();

    } else if (path.startsWith("/employees/")) {
        const id = path.split("/")[2];
        const view = (await import("./views/employeeDetails.js")).default;
        app.innerHTML = view(id);

    } else {
        app.innerHTML = "<h2>Page Not Found</h2>";
    }
}