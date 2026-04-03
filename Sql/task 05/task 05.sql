create table orders (
	product_name varchar(50) unique,
    price int 
);

insert into orders(product_name,price) values ('shoes', 1500),('t-shirt',500),('watch',2000) , ('jeans', 800),('bag', 800),('Badminton Racquet', 1000);
select * from orders;

select count(*) as total_orders from orders;     -- counts orders

select sum(price) as total_price from orders;    -- total price sum of all

select avg(price) as average_price from orders;   -- avg price

select product_name, sum(price) as total_sales from orders group by product_name; -- groupby

select max(price) as max_price , min(price) as min_price from orders;


