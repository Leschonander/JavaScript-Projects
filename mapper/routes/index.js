var express = require('express');
var router = express.Router();

const {Client, Query} = require('pg')

let conString = "postgres://postgres:NO@localhost:5432/postgres" // Table exists

let coffee_query = "SELECT row_to_json(fc) FROM ( SELECT 'FeatureCollection' As type, array_to_json(array_agg(f)) As features FROM (SELECT 'Feature' As type, ST_AsGeoJSON(lg.geom)::json As geometry, row_to_json((id, name)) As properties FROM coffee_shops As lg) As f) As fc";

var client = new Client(conString); // Connect to the database here...

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/data', function (req, res) {
  client.connect();
  var query = client.query(new Query(coffee_query));
  query.on("row", function (row, result) {
      result.addRow(row);
  });
  query.on("end", function (result) {
      res.send(result.rows[0].row_to_json);
      res.end();
  });
});

router.get('/map', (req, res) => {
  client.connect(); // connect to the client
  var query = client.query(coffee_query, (err, res) => {
  }); // Run our Query
  query.on("row", function (row, result) {
      result.addRow(row);
  });
  // Pass the result to the map page
  query.on("end", function (result) {
    var data = result.rows[0].row_to_json // Save the JSON as variable data
    res.render('map', {
        title: "Express API", // Give a title to our page
        jsonData: data // Pass data to the View
    });
  });
});

router.get('/info/:call', (req, res) => {
  client.connect(); // connect to the client
  client.query(`select * from coffee_shops where name LIKE'%${req.params.call}%'`).then((data) => { 
    res.render('table', { 
      title: 'Express Table',
      jsonData: data.rows // Just data at the start but this is safer!!
    })
  })
});

router.get('/input', function(req, res, next) {
  res.render('input', { title: 'Input' });
});

router.post('/input', function(req, res){
  console.log(req.body)
  res.send('Request received')
  // res.redirect('/map');
})

module.exports = router;

// Pain below when trying to figure things out...
  //select * from coffee_shops where name LIKE'%Donuts%'
  //select * from coffee_shops where name LIKE '%${req.params.call}%'
  /*
  client.query(specQ, (error, results) => { // Run our Query
    if (error) {throw error}
    
    data = 

  }); 
  */
  /*
  query.on("row", function (row, result) {
    
      result.addRow(row);
  });
  // Pass the result to the map page
  query.on("end", function (result) {
      var data = result.rows[0].row_to_json // Save the JSON as variable data
      console.log(data) 
      res.render('table', {
          title: "Express API", // Give a title to our page
          jsonData: data // Pass data to the View
      });
  });
  */