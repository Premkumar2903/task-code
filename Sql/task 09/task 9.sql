
create table sales(
id int primary key,
product varchar(50),
amount int
);


insert into sales(id,product,amount) values
(1,'toys', 300),(2,'table', 1200), (3,'wallpaper', 500),(4,'shoe rack', 1800),(5,'book', 500); 
select * from sales;

select id,product,amount, row_number() over (order by amount desc) as row_num
from sales;

select id, product,amount, rank() over (order by amount desc) as rank_ties
from sales;

select id,product,amount,dense_rank() over (order by amount desc) as dense_rank_no_gap
from sales;

select id, product, amount, sum(amount) 								-- calculates total
over (order by amount desc rows between unbounded preceding and current row) as running_total
from sales;


with avg_sales as (					-- return sales above average
	select avg(amount) as avg_amount
    from sales
)
select  
	s.id,s.product,s.amount,a.avg_amount 
from sales as s cross join avg_sales as a where s.amount > a.avg_amount;
