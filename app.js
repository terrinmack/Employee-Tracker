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
        console.table(data);
        start();
    });
}

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
const addEmp = () => {
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
            type: "list",
            message: "What is the employee's role?",
            choices: [
                "Striker",
                "Center Forward",
                "Left Wing",
                "Right Wing",
                "Central Midfielder",
                "Stopper",
                "Sweeper",
                "Goalie",
            ]
        },
        {
            name: "employeeManager",
            type: "list",
            message: "Who is the employee's manager?",
            choices: [
                "Yoichi Isagi",
                "Meguru Bachira",
                "Hyoma Chigiri",
                "Shoei Baro",
                "Seishiro Nagi",
                "Reo Mikage",
                "Rin Itoshi",
                "Rensuke Kunigami",
            ]
        },
    ]) .then(answer => {
        connection.query(
            "INSERT INTO employee (first_name, last_name, role_id, manager_id"
        )
    })
}

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
const updateEmpRole = () => {
    
}

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
const viewAllRoles = () => {
    
}

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
const addRole = () => {
    
}

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
const viewAllDep = () => {
    
}

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
const addDep = () => {
    
}
