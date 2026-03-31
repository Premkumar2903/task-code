
create table products(
	id int,
    product_name varchar(50),
    price varchar(50)
);

alter table products add column stock int;

alter table products rename column price to unit_price;

insert into products(id,product_name,unit_price,stock)
values
(1,'ball',50,5),(2,'bat',800,10),(3,'gaurd',200,5),(4,'gloves',250,10),(5,'stump',500,4);

select * from products;

update products set stock =10 where id=1; 

delete from products where id =3;