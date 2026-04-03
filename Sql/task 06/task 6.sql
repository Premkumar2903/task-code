
create table event_s (
	id int primary key auto_increment,
    event_name varchar(50),
    event_date date
);

insert into event_s( event_name,event_date) values 
('Awards', '2026-04-30'),('meetup', '2026-05-01'),('touring', '2026-05-07');   -- date format yyyy-mm-dd
select * from event_s;

select now() as current_datetime;   -- now() displays current date and time

select event_name, date_format(event_date, '%d/%m/%y') as formatted_date from event_s;  -- formating date d/m/y

select event_name, year(event_date) as event_month , month(event_date) as event_date from event_s;  -- selecting month and year

select concat(event_name, ' occurs on ', event_date) as event_info from event_s;   -- concat event_name with event_date