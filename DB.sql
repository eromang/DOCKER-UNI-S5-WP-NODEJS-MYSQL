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

INSERT INTO persons (first_name, last_name, nationality, address, zipcode, city, country, mobile_number, email) VALUES ('FirstName1', 'LastName1', 'Nationality1', 'Address1', 'Zipcode1', 'City1', 'Country1' , 'Phone1', 'toto@toto.com');
INSERT INTO persons (first_name, last_name, nationality, address, zipcode, city, country, mobile_number, email) VALUES ('FirstName2', 'LastName2', 'Nationality2', 'Address2', 'Zipcode2', 'City2', 'Country2' , 'Phone2', 'titi@titi.com');
INSERT INTO persons (first_name, last_name, nationality, address, zipcode, city, country, mobile_number, email) VALUES ('FirstName3', 'LastName3', 'Nationality3', 'Address3', 'Zipcode3', 'City3', 'Country3' , 'Phone3', 'tata@tata.com');
INSERT INTO persons (first_name, last_name, nationality, address, zipcode, city, country, mobile_number, email) VALUES ('FirstName4', 'LastName4', 'Nationality4', 'Address4', 'Zipcode4', 'City4', 'Country4' , 'Phone4', 'tete@tete.com');
INSERT INTO persons (first_name, last_name, nationality, address, zipcode, city, country, mobile_number, email) VALUES ('FirstName5', 'LastName5', 'Nationality5', 'Address5', 'Zipcode5', 'City5', 'Country5' , 'Phone5', 'tutu@tutu.com');


