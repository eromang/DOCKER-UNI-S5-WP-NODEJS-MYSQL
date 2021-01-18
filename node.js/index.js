/**
* Module dependencies.
*/

var express = require('express')
  , routes = require('./routes')
  , persons = require('./routes/persons') // see if necessary
  , http = require('http')
  , path = require('path');

var app = express();
var mysql      = require('mysql');
var bodyParser=require("body-parser");

var connection = mysql.createConnection({
              host     : 'mysql',
              user     : 'webprog',
              password : 'webprog',
              database : 'webprog'
            });
 
connection.connect();
 
global.db = connection;
 
// all environments
app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/templates');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public'))); // not necessary
 
// routing

app.get('/', persons.homepage);                         // Homepage
app.post('/view_person', persons.view_person);          // Show person
app.get('/add_person', persons.add_person);             // Add person GET template
app.post('/add_person', persons.add_person);            // Add person POST
app.post('/edit_person', persons.edit_person);          // Edit person GET template
app.post('/update_person', persons.update_person);      // Update person POST
app.post('/delete_person', persons.delete_person);      // Delete person POST
app.post('/add1_contact', persons.add1_contact);        // Add a contact to a person POST
app.post('/add2_contact', persons.add2_contact);        // Add a contact to a person POST
app.post('/view_contacts', persons.view_contacts);      // View contacts of a person
app.post('/view_contacts', persons.view_contacts);      // View contacts of a person
app.post('/delete_contact', persons.delete_contact);    // Delete contact of a person

//Middleware
app.listen(8080)
