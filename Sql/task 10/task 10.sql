DELIMITER $$

CREATE PROCEDURE InsertEmployee(
  IN p_name    VARCHAR(100),
  IN p_dept    VARCHAR(100),
  IN p_salary  DECIMAL(10,2),
  IN p_role    VARCHAR(50)
)
BEGIN
  INSERT INTO employees (name, department, salary, role, created_at)
  VALUES (p_name, p_dept, p_salary, p_role, NOW());

  SELECT LAST_INSERT_ID() AS new_employee_id;
END$$

DELIMITER ;

DELIMITER $$



CREATE PROCEDURE UpdateSalary(
  IN p_id      INT,
  IN p_salary  DECIMAL(10,2)
)
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM employees WHERE id = p_id
  ) THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Employee not found';
  END IF;

  UPDATE employees
     SET salary = p_salary
   WHERE id = p_id;
END$$

DELIMITER ;



DELIMITER $$

CREATE TRIGGER trg_reduce_stock
AFTER INSERT ON orders
FOR EACH ROW
BEGIN
  UPDATE products
     SET stock = stock - NEW.quantity
   WHERE id = NEW.product_id;

  IF (SELECT stock FROM products
        WHERE id = NEW.product_id) < 0 THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Insufficient stock';
  END IF;
END$$

DELIMITER ;



DELIMITER $$

CREATE TRIGGER trg_protect_last_admin
BEFORE DELETE ON users
FOR EACH ROW
BEGIN
  IF OLD.role = 'admin' AND (
    SELECT COUNT(*) FROM users
     WHERE role = 'admin'
  ) <= 1 THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT =
        'Cannot delete the last admin user';
  END IF;
END$$

DELIMITER ;



DELIMITER $$

CREATE PROCEDURE GetAllEmployees()
BEGIN
  SELECT id, name, department, salary, role, created_at
    FROM employees
   ORDER BY id;
END$$

DELIMITER ;

-- Call the procedure
CALL GetAllEmployees();



-- Drop stored procedures
DROP PROCEDURE IF EXISTS InsertEmployee;
DROP PROCEDURE IF EXISTS UpdateSalary;
DROP PROCEDURE IF EXISTS GetAllEmployees;

-- Drop triggers
DROP TRIGGER IF EXISTS trg_reduce_stock;
DROP TRIGGER IF EXISTS trg_protect_last_admin;



