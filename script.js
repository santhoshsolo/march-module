let employees = [];

function addEmployee() {
    const name = document.getElementById('name').value;
    const profession = document.getElementById('profession').value;
    const age = document.getElementById('age').value;

    if (name && profession && age) {
        const employee = {
            id: employees.length + 1,
            name: name,
            profession: profession,
            age: parseInt(age)
        };
        employees.push(employee);
        displayEmployees();
        displayMessage('success', 'Employee added successfully.');
    } else {
        displayMessage('error', 'Please fill in all fields.');
    }
}

function deleteEmployee(id) {
    employees = employees.filter(employee => employee.id !== id);
    displayEmployees();
}

function displayEmployees() {
    const employeeListDiv = document.getElementById('employeeList');
    employeeListDiv.innerHTML = '';
    employees.forEach(employee => {
        const employeeDiv = document.createElement('div');
        employeeDiv.classList.add('employee');
        employeeDiv.innerHTML = `
            <span>Name: ${employee.name}</span>
            <span>Profession: ${employee.profession}</span>
            <span>Age: ${employee.age}</span>
            <button onclick="deleteEmployee(${employee.id})">Delete</button>
        `;
        employeeListDiv.appendChild(employeeDiv);
    });
}

function displayMessage(type, message) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.classList.add(type + '-message');
    document.getElementById('messages').appendChild(messageDiv);
    setTimeout(() => {
        messageDiv.remove();
    }, 3000);
}