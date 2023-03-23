INSERT INTO department(name)
VALUES
    ("Sales"),
    ("Engineer"),
    ("Finance"),
    ("Legal");

INSERT INTO role(title, salary, department_id)
VALUES
    ("Sales Lead", 100000, 1),
    ("Salesperson", 80000, 1),
    ("Lead Engineer", 150000, 2),
    ("Software Engineer", 120000, 2),
    ("Account Manager", 160000, 3)
    ("Accountant", 120000, 3),
    ("Legal Team Lead", 250000, 4),
    ("Lawyer", 190000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES
    ("Yoichi", "Isagi", 1, NULL),
    ("Meguru", "Bachira", 2, 1),
    ("Hyoma", "Chigiri", 3, NULL),
    ("Shoei", "Baro", 4, 3),
    ("Seishiro, Nagi", 5, NULL)
    ("Reo", "Mikage", 6, 5),
    ("Rin", "Itoshi", 7, NULL),
    ("Rensuke", "Kunigami", 8, 6);