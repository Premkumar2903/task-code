
create table employee1 (
name varchar(50),
salary int,
dept varchar(50)
)



delimiter $$

create procedure employee(
	in e_name varchar(50),
    in e_salary int,
    in e_dept varchar(50)
)

begin 
	insert into employee1(name, salary, dept)
	values (e_name,e_salary,e_dept);
    
    select concat('Employee ', e_name, ' added successfully.') as message;
end$$
delimiter ;

call employee('nobita', 50000, 'Engineering');
call employee('doraemon', 70000, 'HR');
call employee('shizuka', 60000, 'Finance');



delimiter $$

create procedure get_employee_count(
	in e_dept varchar(50),
    out e_count int,
    out e_total int
)

begin
	select count(*) into e_count from employee1 where dept = e_dept;
    
    select count(*) into e_total from employee1;
end$$

delimiter ;

call get_employee_count('HR', @dept_count, @total);
select  
	'HR' as department , 
	@dept_count as dept_count , 
	@total as total_employee_count;




