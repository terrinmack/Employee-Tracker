DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
USE company_db;

CREATE TABLE department (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCAHR(30) NOT NULL,
);


CREATE TABLE role (
    id INTEGER NOT NULL AUTO_INCREMENT,
    title VARCAHR(30) NOT NULL,
    salary DECIMAL NOT NULL, 
    deparment_id INT, 
    PRIMARY KEY (id),
);

CREATE TABLE employee (
    id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCAHR(30),
    last_name VARCAHR(30),
    role_id INT,
    manager_id INT,
);
