
SELECT name 
FROM departments 
LEFT JOIN roles 
ON departments.id = roles.department_id;

SELECT title, salary, department_id 
FROM roles 
LEFT JOIN departments 
ON roles.department_id = departments.id;

SELECT first_name, last_name, role_id, manager_id 
FROM employees 
JOIN roles 
ON employees.role_id = roles.department_id;
