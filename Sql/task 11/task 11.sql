
create table employee1 (
name varchar(50),
salary int,
dept varchar(50)
)
select*from employee1;


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



create table emp_audit_log(
	log_id int auto_increment primary key,
    table_name varchar(50),
    action_type varchar(10),
    record_id int,
    old_value text,
    new_value text,
    changed_at datetime default current_timestamp,
    changed_by varchar(50)
)

delimiter //

create procedure LogChange (
	in e_table varchar(50),
    in e_action varchar(10),
    in e_id int,
    in e_old text,
    in e_new text
)
begin 
	insert into emp_audit_log(table_name, action_type, record_id, old_value,new_value,changed_by)
	values (e_table,e_action,e_id,e_old , e_new, USER());

end //
delimiter ;

call LogChange('employee1','UPDATE', 7, '50000', 'salary=60000');
select * from emp_audit_log order by changed_at desc;
