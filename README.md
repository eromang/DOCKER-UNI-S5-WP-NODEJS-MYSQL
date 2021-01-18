# Exercise 4: A COVID-19 contact list with Node.js and MySQL

In this exercise, you are asked to develop a Node.js-based web application that lets the user **create** / **edit** / **delete** / **show** **COVID-19 contact information**. A "COVID-19 contact" object has (at least) a unique id, a person name, the id of a positive person in contact with the current person, a contact date and time, and a short description. All contact objects should be stored within a MySQL DB. You can base your solution on the provided Docker NGINX-Node.js-MySQL application, but remove all example code provided by myself.

The application should consist of a REST-based backend which does the DB operations and a frontend which allows users to enter the information in a "nice way". Provide some dummy data in the DB to make testing easier.

Please upload a zip-archive with your complete Docker definition (including possible changes that you did to config files) to Moodle, including also a README file with the URL that must be used to access the frontend start page and a dump of your DB (the docker definition should already contain the DB files, but sometimes these are corrupted such that I also need a dump file with the data). I will then build your application, run it, and test it with the provided URL.

# Exercise 4

## Instruction

- Run `docker-compose up -d` to build the docker containers
- Create the required tables in the webprog database with the provided DB.SQL file
  - Samples are also provided in **DB.sql** file
- Access http://localhost in Firefox or Chrome to access the application

## Supported browsers

Firefox, Chrome

## Tables structures in DB.sql for webprog database

CREATE TABLE IF NOT EXISTS `persons` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `nationality` text NOT NULL,
  `address` text NOT NULL,
  `zipcode`text NOT NULL,
  `city` text NOT NULL,
  `country` text NOT NULL,
  `mobile_number` text NOT NULL,
  `email` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

CREATE TABLE IF NOT EXISTS `contacts` (
  `contact` int(5) NOT NULL,
  `contacted` int(5) NOT NULL,
  `contact_date` date NOT NULL,
  `description` text NOT NULL,
  UNIQUE KEY(contact,contacted)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

Username and password of the database webprog are **webprog**.

MySQL server hostname is **mysql**.

Samples are also provided in **DB.sql** file

##  Structure 

- `node_modules` folder: This folder will contain all node.js packages.
- `templates` folder: This folder will contain all express ejs template files.
    - Reference: https://ejs.co
- `public` folder: This folder will contain all external css and js files.
- `routes` folder: This folder will contain all controller file.
- `index.js` file: This file will use to create nodejs application server and routes url.
- `package.json`file: to reinstall nodejs requirements
- 

## Node JS Modules

- **body-parser** nodejs module body parsing middleware.
- **ejs** nodejs module templating language that lets generate HTML markup with plain JavaScript.

## Application

accessible via http://localhost











