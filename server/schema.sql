CREATE DATABASE chat;

USE chat;


create table messages
(text varchar(160),
 user_id int(11),
 room_id int(11),
 RID int(11) NOT NULL auto_increment,
 primary KEY (RID));

create table users
(username varchar(15),
 RID int(11) NOT NULL auto_increment,
 primary KEY (RID));

create table rooms
(roomname varchar(15),
 RID int(11) NOT NULL auto_increment,
 primary KEY (RID));


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

