export async function fetchEmployees() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return await res.json();
}
