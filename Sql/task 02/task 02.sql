create database companyDB;

create table employees(
 id int primary key,
 emp_name varchar(50) not null,
 salary int default 30000
);

alter table employees add email varchar(50) unique;


insert into employees(id,emp_name,email) 
values
(1,'prem','prem@gmail.com'),
(2,'abdul','abdul@gmail.com'),
(3,'ajay','ajay@gmail.com'),
(4,'arun','arun@gmail.com'),
(5,'loki' ,'loki@gmail.com'),

(6,'vinu','arun@gmail.com');

select * from employees;

drop table employees;

create table employees(
	id int primary key,
    emp_name varchar(50) not null,
    salary int default 30000 check (salary > 0),
    email varchar (100) unique
);

insert into employees(id,emp_name,email,salary) 
values
(1,'prem', 'prem@gmail.com', 35);

select * from employees