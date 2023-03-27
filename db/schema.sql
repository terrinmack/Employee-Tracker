DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
USE company_db;

CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCAHR(30),
);


CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCAHR(30),
    salary DECIMAL, 
    deparment_id INT, 
);

CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCAHR(30),
    last_name VARCAHR(30),
    role_id INT,
    manager_id INT,
);
