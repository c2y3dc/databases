DROP database chat;

CREATE DATABASE chat;

USE chat;


create table messages
(text varchar(160),
 username varchar(15),
 roomname varchar(15),
 RID int(11) NOT NULL auto_increment,
 primary KEY (RID));


/* Create other tables and define schemas for them here!
* start server. mysql -u root < server/schema.sql
* log in, use 'database', describe 'table'
*
**/




/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

