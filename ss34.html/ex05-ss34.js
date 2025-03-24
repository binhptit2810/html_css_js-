let initialEmployees = [
    {
        id: 1,
        name: "Nguyễn Văn A",
        position: "Developer"
    },
    {
        id: 2,
        name: "Trần Thị B",
        position: "Designer"
    },
    {
        id: 3,
        name: "Phạm Văn C",
        position: "Project Manager"
    }
];
if (!localStorage.getItem('employees')) {
    localStorage.setItem('employees', JSON.stringify(initialEmployees));
}
let employees = JSON.parse(localStorage.getItem('employees')) || [];
let nameInput = document.getElementById('nameInput');
let positionInput = document.getElementById('positionInput');
let addBtn = document.getElementById('addBtn');
let employeeList = document.getElementById('employeeList');
displayEmployees();
addBtn.addEventListener('click', function () {
    let name = nameInput.value.trim();
    let position = positionInput.value.trim();
    if (name && position) {
        let newEmployee = {
            id: employees.length ? employees[employees.length - 1].id + 1 : 1,
            name: name,
            position: position
        };
        employees.push(newEmployee);
        localStorage.setItem('employees', JSON.stringify(employees));
        displayEmployees();
        nameInput.value = '';
        positionInput.value = '';
    }
});
function displayEmployees() {
    employeeList.innerHTML = '';
    employees.forEach((employee, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${employee.name}</td>
            <td>${employee.position}</td>
        `;
        employeeList.appendChild(row);
    });
}