
create table orders(
	id int primary key,
    product_name varchar(50),
    quantity int,
    price int
);

insert into orders (id, product_name, quantity,price) values
(1,'toys', 10, 300),(2, 'chocolate', 5 ,100),(3,'apple_juice',4,100),(4,'biscuit',5,50),(5,'ice cream',1,200);

select * from orders;

select * from orders where quantity>2;

select * from orders where price between 100 and 500;

select * from orders where product_name like 'a%';      --  selects products starts from a

select * from orders order by quantity desc    -- selects qnantity in desc order