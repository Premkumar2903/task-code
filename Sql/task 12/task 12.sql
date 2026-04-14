CREATE TABLE employees (
    emp_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    department_id INT,
    salary DECIMAL(10,2) NOT NULL,
    last_modified TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE departments (
    dept_id INT PRIMARY KEY AUTO_INCREMENT,
    dept_name VARCHAR(50),
    budget DECIMAL(10,2)
);

-- Archive table for deleted records
CREATE TABLE employees_archive (
    emp_id INT,
    name VARCHAR(50),
    department_id INT,
    salary DECIMAL(10,2),
    deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



DELIMITER //

CREATE TRIGGER prevent_salary_reduction
BEFORE UPDATE ON employees
FOR EACH ROW
BEGIN
    IF NEW.salary < OLD.salary THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Salary reduction is not allowed!';
    END IF;
END;
//

DELIMITER ;


DELIMITER //

CREATE TRIGGER archive_deleted_employee
AFTER DELETE ON employees
FOR EACH ROW
BEGIN
    INSERT INTO employees_archive(emp_id, name, department_id, salary)
    VALUES (OLD.emp_id, OLD.name, OLD.department_id, OLD.salary);
END;
//

DELIMITER ;



DELIMITER //

CREATE TRIGGER prevent_null_values
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
    IF NEW.name IS NULL OR NEW.salary IS NULL THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Critical fields cannot be NULL!';
    END IF;
END;
//

DELIMITER ;


DELIMITER //

CREATE TRIGGER check_salary_budget
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
    DECLARE dept_budget DECIMAL(10,2);

    SELECT budget INTO dept_budget
    FROM departments
    WHERE dept_id = NEW.department_id;

    IF NEW.salary > dept_budget THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Salary exceeds department budget!';
    END IF;
END;
//

DELIMITER ;



INSERT INTO departments(dept_name, budget)
VALUES ('IT', 50000), ('HR', 30000);

INSERT INTO employees(name, department_id, salary)
VALUES ('John', 1, 20000);

UPDATE employees SET salary = 15000	-- prevents salary reduction by trigger
WHERE emp_id = 1;

INSERT INTO employees(name, department_id, salary) -- prevents null value by trigger
VALUES (NULL, 1, 10000);

INSERT INTO employees(name, department_id, salary)	 -- trigger restricts budget for employee
VALUES ('Mike', 2, 40000);

DELETE FROM employees WHERE emp_id = 1;		-- deleted data copies to another table 
SELECT * FROM employees_archive;

