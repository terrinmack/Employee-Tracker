// GIVEN a command-line application that accepts user input
const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

connection.connect(err => {
    if (err) throw err;
    console.log("You are connected to BlueLock!");
    start();
});

// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

// start menu
  const start = () => {
    inquirer.prompt({
        message: "What would you like to do?",
        type: "list",
        name: "menu",
        choices: [
            "View All Employees",
            "Add Employee",
            "Update Employee Role",
            "View All Roles",
            "Add Role",
            "View All Departments",
            "Add Department",
            "Exit",
        ]

// switch code for each list item
    }).then((answer) => {
        switch (answer.menu) {
            case "View All Employees":
                viewEmp();
                break;

            case "Add Employee":
                addEmp();
                break;

            case "Update Employee Role":
                updateEmpRole();
                break;

            case "View All Roles":
                viewAllRoles();
                break;

            case "Add Role":
                addRole();
                break;

            case "View All Departments":
                viewAllDep();
                break;

            case "Add Department":
                addDep();
                break;

            case "Exit":
                console.log("Sayonara!")
                connection.end();
                break;
        }
    });
  };

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
const viewEmp = () => {
    connection.query("SELECT * FROM employees", function (err, data) {
        if (err) throw err;
        console.log('Presenting: All Employees');
        console.table(data);
        start();
    });
}

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
const addEmp = () => {

    // connection.query("SELECT first_name, last_name, role_id, department_id FROM employees", function (err, data) {
    //     if (err) throw err;
    //     console.table(data);
    // })

    inquirer.prompt([
        {
            name: "firstName",
            type: "input",
            message: "What is the employee's first name?",
        },
        {
            name: "lastName",
            type: "input",
            message: "What is the employee's last name?",
        },
        {
            name: "employeeRole",
            type: "input",
            message: "What is the employee's role? (Enter the role_id number)",
        },
        {
            name: "employeeManager",
            type: "input",
            message: "Who is the employee's manager? (Enter the manager_id number)",
        },
    ]) .then(answer => {
        connection.query(
            "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.firstName, answer.lastName, answer.employeeRole, answer.employeeManager], function (err, data) {
                if (err) throw err;
                console.log("Successfully added a new employee!");
                console.table(data);
                start();
            }
        )
    })
}

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
const updateEmpRole = () => {
    inquirer.prompt ([
        {
            name: "employeeID",
            type: "input",
            message: "Which employee do you want to update? (Enter their employee id)",
        },
        {
            name: "roleID",
            type: "input",
            message: "Which role would you like to assign to the selected employee? (Enter the role id)",
        },
    ]).then(answer => {
        connection.query("UPDATE employees SET role_id= ? WHERE id= ?", [answer.employeeID, answer.roleID], function (err, data) {
            if (err) throw err;
            console.log("Employee updated!");
            console.table(data);
            start();
        })
    })
 
}

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
const viewAllRoles = () => {
    connection.query("SELECT * FROM roles", function (err, data) {
        if (err) throw err;
        console.log('Presenting: All Roles');
        console.table(data);
        start();
    }); 
}

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
const addRole = () => {

    // connection.query("SELECT title, salary, department_id FROM roles", function (err, data) {
    //     if (err) throw err;
    //     console.table(data);
    // })

    inquirer.prompt([
        {
            name: "roleTitle",
            type: "input",
            message: "What is the name of the role? "
        },
        {
            name: "roleSalary",
            type: "input",
            message: "What is the salary of the role?"
        },
        {
            name: "roleDep",
            type: "input",
            message: "Which department does the role belong to? (input department ID)",
        },
        
    ]) .then(answer => {
        connection.query("INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)", [answer.roleTitle, answer.roleSalary, answer.roleDep], function (err, data) {
            if (err) throw err;
            console.log('New role successfully added!');
            console.table(data);
            start();
        });
    });
}

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
const viewAllDep = () => {
    connection.query("SELECT * FROM departments", function (err, data) {
        if (err) throw err;
        console.log('Presenting: All Departments');
        console.table(data);
        start();
    }); 
}

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
const addDep = () => {

    // connection.query("SELECT name FROM departments", function (err, data) {
    //     if (err) throw err;
    //     console.table(data);
    // })

    inquirer.prompt({
        type: "input",
        name: "deptName",
        message: "What is the name of the department?"
    }).then(answer => {
        connection.query("INSERT INTO departments (name) VALUES (?)", [answer.deptName], function(err, data) {
            if (err) throw err;
            console.log("New department added!");
            console.table(data);
            start();
        });
    });
}
