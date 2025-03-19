const employees = [
    {
        id: 1,
        name: "John",
        age: 18,
        address: "New York"
    },
    {
        id: 2,
        name: "Mike",
        age: 22,
        address: "Canada"
    },
    {
        id: 3,
        name: "Linda",
        age: 19,
        address: "California"
    },
    {
        id: 4,
        name: "Peter",
        age: 25,
        address: "London"
    },
    {
        id: 5,
        name: "Tony",
        age: 17,
        address: "New York"
    }
]
let employeeTable = document.getElementById("employeeTable");
employees.forEach(employee => {
    let row = document.createElement("tr")
    row.innerHTML = `
        <td>${employee.id}</td>
        <td>${employee.name}</td>
        <td>${employee.age}</td>
        <td>${employee.address}</td>
    `
    employeeTable.appendChild(row);
});