create database products;

create table orders (
	product_name varchar(50) unique,
    price int 
);

insert into orders(product_name,price) values ('shoes', 1500),('t-shirt',500),('watch',2000) , ('jeans', 800),('bag', 800),('Badminton Racquet', 1000);
select * from orders;


select count(*) as orders

