CREATE DATABASE network_db;

USE network_db;

CREATE TABLE friends (
    id INTEGER AUTO_INCREMENT NOT NULL,
    name VARCHAR (100) NOT NULL,
    photoUrl TEXT,
    scores VARCHAR(21) NOT NULL,
    PRIMARY KEY (id)
);


INSERT INTO friends (name,photoUrl,scores)
VALUE
   ('flavio','foto here', '[1,2,3,4,5,6,7,8,9,0]'),
   ('fabricio','foto here', '[1,2,3,4,5,6,7,8,9,0]');