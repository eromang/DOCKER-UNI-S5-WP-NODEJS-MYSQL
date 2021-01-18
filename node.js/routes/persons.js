//------ Homepage functionality
           
exports.homepage = function(req, res){   

   var sql="SELECT id AS personID, first_name AS personFirstName, last_name AS personLastName, mobile_number AS personMobile FROM `persons` ORDER BY last_name ASC";

   db.query(sql, function(error, results, fields){

      if (error) throw error;

      res.render('homepage.ejs',{data: results});

   });      
};

//------ Show person functionality

exports.view_person = function(req, res){

   var post  = req.body;
   var personID= post.personID;

   var sql="SELECT id AS personID, first_name AS personFirstName, last_name AS personLastName, mobile_number AS personMobile, nationality AS personNationality, address AS personAddress, zipcode as personZipCode, city AS personCity, country AS personCountry, email AS personEmail FROM `persons` WHERE `id`='" + personID + "'";

   db.query(sql, function(error, results, fields){

      if (error) throw error;

      res.render('view_person.ejs',{data: results});
   });

};

//------ Add person functionality

exports.add_person = function(req, res){

   var message = '';

   if(req.method == "POST"){
      var post = req.body;
      var personLastName= post.personLastName;
      var personFirstName= post.personFirstName;
      var personNationality= post.personNationality;
      var personAddress= post.personAddress;
      var personZipCode= post.personZipCode;
      var personCity= post.personCity;
      var personCountry= post.personCountry;
      var personMobile= post.personMobile;
      var personEmail= post.personEmail;

      var sql = "INSERT INTO `persons` (`first_name`, `last_name`, `nationality`, `address`, `zipcode`, `city`, `country`, `mobile_number`, `email`) VALUES ('" + personFirstName + "', '" + personLastName + "', '" + personNationality + "', '" + personAddress + "', '" + personZipCode + "', '" + personCity + "', '" + personCountry + "', '" + personMobile + "', '" + personEmail + "')";

      db.query(sql, function(error, results, fields){
         message = "You successfully created the person";
         res.render('add_person.ejs',{message: message});
      });

   } else {
      res.render('add_person.ejs',{message: message});
   }
};

//------ Update person display functionality

exports.edit_person = function(req, res) {

   var post  = req.body;
   var personID= post.personID;

   var sql="SELECT id AS personID, first_name AS personFirstName, last_name AS personLastName, mobile_number AS personMobile, nationality AS personNationality, address AS personAddress, zipcode as personZipCode, city AS personCity, country AS personCountry, email AS personEmail FROM `persons` WHERE `id`='" + personID + "'";

   db.query(sql, function(error, results, fields){

      if (error) throw error;

      res.render('edit_person.ejs',{data: results});
   });

};

//------ Update person action functionality

exports.update_person = function(req, res) {

   var message = '';

   var post = req.body;
   var personID= post.personID;
   var personLastName = post.personLastName;
   var personFirstName = post.personFirstName;
   var personNationality = post.personNationality;
   var personAddress = post.personAddress;
   var personZipCode = post.personZipCode;
   var personCity = post.personCity;
   var personCountry = post.personCountry;
   var personMobile = post.personMobile;
   var personEmail = post.personEmail;

   var sql = "UPDATE `persons` SET `first_name`='" + personFirstName + "', `last_name`='" + personLastName + "', `nationality`='" + personNationality + "', `address`='" + personAddress + "', `zipcode`='" + personZipCode + "', `city`='" + personCity + "', `country`='" + personCountry + "', `mobile_number`='" + personMobile + "', `email`='" + personEmail + "' WHERE `id`='" + personID + "'";

   db.query(sql, function(error, results, fields){
      message = "You successfully edited the person";
      res.render('operations_success.ejs',{message: message});
   });
};

//------ Delete person action 

exports.delete_person = function(req, res) {

   var message = '';

   var post = req.body;
   var personID= post.personID;

   var sql = "DELETE FROM `persons` WHERE `id`='" + personID + "'";

   db.query(sql, function(error, results, fields){
      message = "You successfully deleted the person";
      res.render('operations_success.ejs',{message: message});
   });
};

//------ Add1 contact action 

exports.add1_contact = function(req, res) {

   var post  = req.body;
   var personID= post.personID;

   var sql="SELECT id AS personID, first_name AS personFirstName, last_name AS personLastName FROM `persons` WHERE `id`='" + personID + "'";

   db.query(sql, function(error, results, fields){

      if (error) throw error;

      res.render('add_contact.ejs',{data: results});
   });

};

//------ Add2 contact action 

exports.add2_contact = function(req, res) {

   var message = '';

   var post  = req.body;
   var personID= post.personID;
   var contactID= post.contactID;
   var contactDate= post.contactDate;
   var contactDescription= post.contactDescription;

   var sql = "INSERT INTO `contacts` (`contact`, `contacted`, `contact_date`, `description`) VALUES ('" + personID + "', '" + contactID + "', '" + contactDate + "', '" + contactDescription + "')";

   db.query(sql, function(error, results, fields){

      if (error) throw error;

      message = "You successfully Added a contact to the person";
      res.render('operations_success.ejs',{message: message});
   });

};

//------ view contact action

exports.view_contacts = function(req, res){   

   var post  = req.body;
   var personID= post.personID;

   var sql = "SELECT contacts.contact AS contactID, persons.id AS personID, persons.first_name AS personFirstName, persons.last_name AS personLastName, contacts.contact_date AS contactDate, contacts.description AS contactDescription FROM persons, contacts WHERE contacts.contact='" + personID + "' AND contacts.contacted=persons.id";

   db.query(sql, function(error, results, fields){

      if (error) throw error;

      res.render('view_contacts.ejs',{data: results});

   });      
};

//------ delete contact action

exports.delete_contact = function(req, res){   

   var message = '';

   var post = req.body;
   var contactedID = post.personID;
   var contactID = post.contactID;

   var sql = "DELETE FROM `contacts` WHERE `contacted`='" + contactedID + "' AND `contact`='" + contactID + "'";

   db.query(sql, function(error, results, fields){
      message = "You successfully deleted the contact";
      res.render('operations_success.ejs',{message: message});
   });     
};