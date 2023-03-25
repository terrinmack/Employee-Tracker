// GIVEN a command-line application that accepts user input
// WHEN I start the application
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

const mysql = require('mysql2');
const inquirer = require('inquirer');
const consoleTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'company_db',
});

connection.connect(err => {
    if (err) throw err;
    console.log('You are connected!');
    start();
});

  const start = () => {
    inquirer.prompt({
        message: 'What would you like to do?',
        type: 'list',
        name: 'menu',
        choices: [
            'View All Employees',
            'Add Employee',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Department',
            'Exit',
        ]

    }).then((answer) => {
        switch (answer.menu) {
            case 'View All Employees':
                viewEmp();
                break;

            case 'Add Employee':
                addEmp();
                break;

            case 'Update Employee Role':
                updateEmpRole();
                break;

            case 'View All Roles':
                viewAllRoles();
                break;

            case 'Add Role':
                addRole();
                break;

            case 'View All Departments':
                viewAllDep();
                break;

            case 'Add Department':
                addDep();
                break;

            case 'Exit':
                console.log('Sayonara!')
                connection.end();
                break;
        }
    });
  };

