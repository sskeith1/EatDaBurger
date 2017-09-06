DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name VARCHAR(100) NOT NULL,
	-- devoured CHAR(1) NOT NULL DEFAULT "y",
	date TIMESTAMP NOT NULL,

	PRIMARY KEY (id)
);


SELECT * FROM burgers_db.burgers;