CREATE DATABASE burgers_db;

create table burgers(
	id int NOT NULL auto_increment,
	burgers_name varchar(50),
    devoured boolean,
      primary key (id)
  
);