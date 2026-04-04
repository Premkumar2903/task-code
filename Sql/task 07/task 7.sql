
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    order_date DATE,
    amount DECIMAL(10,2),
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

INSERT INTO customers (customer_id, customer_name, email) VALUES
(1, 'Alice', 'alice@example.com'),
(2, 'Bob', 'bob@example.com'),
(3, 'Charlie', 'charlie@example.com'),
(4, 'Diana', 'diana@example.com'),
(5, 'Evan', 'evan@example.com');

INSERT INTO orders (order_id, order_date, amount, customer_id) VALUES
(101, '2024-01-01', 150.00, 1),
(102, '2024-01-05', 230.00, 2),
(103, '2024-01-07', 75.50, 1),
(104, '2024-01-10', 420.00, 3),
(105, '2024-01-12', 99.99, 4);


SELECT c.customer_name, o.order_id, o.amount   -- inner join 
FROM customers c
INNER JOIN orders o
    ON c.customer_id = o.customer_id;
    
    
SELECT c.customer_name, o.order_id, o.amount	-- left joim
FROM customers c
LEFT JOIN orders o
    ON c.customer_id = o.customer_id;
    
select * from customers; select * from orders;