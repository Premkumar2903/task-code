

create table employee1 (
emp_name varchar(20),
salary int,
dept int 
);

insert into employees1(emp_name, salary, dept)
values('joe', 4000, 102),('nova', 5000, 102), ('groot', 6000, 105), ('kit', 5500, 105);
select * from employees1;

create table customers1(
customer_id int primary key,
name varchar (50)
);

insert into customers1 (customer_id, name) 
values(1, 'ria'), (2,'cath'), (3, 'arun'), (4, 'ajay');
select * from customers1;

create table products (
product_id int primary key,
product_name varchar(50),
price int
);

insert into products (product_id, product_name, price) values 
(1, 'chocolate', 200), (2, 'chips', 100) , (3,'icecream',500) , (4, 'sweet', 1000);
select * from products;

create table orders1 (
    order_id int primary key,
    customer_id int,
    order_price int,
    order_date date
);
insert into orders1 (order_id, customer_id,order_price, order_date) values 
(101, 1, 200, '2026-03-24'), (102,2,100, '2026-04-04'), (103,3,500, '2026-01-28'), (104,4,1000,'2026-02-28');
select * from orders1;


SELECT emp_name,salary, dept      -- selects highest salary than average in department
FROM employees1 e
WHERE salary > (SELECT AVG(salary) FROM employees1 where dept = e.dept);

select product_id , product_name, price from products1
where price > (select min(order_price) from orders1);   -- selects all greater than min


select customer_id ,name from customers1 			-- selects customers who have orders
	where customer_id in (select customer_id from orders);
    
    
select c.customer_id, c.name, 					-- selects orders count per customer
	(select count(*) 
    from orders1 o
    where o.customer_id = c.customer_id) as order_count from customers1 c;
    
select e.emp_name, e.salary, e.dept       -- select highest salary in department
	from employees1 e where salary = (
    select max(salary) from employees1 e2
    where e2.dept = e.dept);
    

    
