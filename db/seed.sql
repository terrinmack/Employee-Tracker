INSERT INTO departments (name) VALUES
    ("Forwards"),
    ("MidFielders"),
    ("Defenders"),
    ("Goalkeeper");

INSERT INTO roles (title, salary, department_id) VALUES
    ("Striker", 100000, 1),
    ("Center Forward", 80000, 1),
    ("Left Wing", 150000, 2),
    ("Right Wing", 120000, 2),
    ("Central Midfielder", 160000, 3),
    ("Stopper", 120000, 3),
    ("Sweeper", 250000, 4),
    ("Goalie", 190000, 4);

INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
    ("Yoichi", "Isagi", 1, NULL),
    ("Meguru", "Bachira", 2, 1),
    ("Hyoma", "Chigiri", 3, NULL),
    ("Shoei", "Baro", 4, 3),
    ("Seishiro", "Nagi", 5, NULL),
    ("Reo", "Mikage", 6, 5),
    ("Rin", "Itoshi", 7, NULL),
    ("Rensuke", "Kunigami", 8, 7)