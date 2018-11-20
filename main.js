const express = require("express");
const app = express();
const cors = require ("cors");
const Sequelize = require('sequelize');
const models = require('./models'); 
// add the line above to controllers as well

var mysql = require('mysql');
var dbconn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'feed99',
  database : 'registrationDb_development'
});

dbconn.connect(function(err, Visitors){
  if(err){
    console.log('Database connection error');
  }else{
    console.log('Database connection successful');
    console.log(Visitors);
  }
});

dbconn.query('SELECT * FROM Visitors',function(err, records){
  if(err) throw err;

  console.log('Data received from Db:n');
  console.log(records);
});

dbconn.end(function(err) {
  // Function to close database connection
});

app.use(cors());

console.log(models);

app.use("/registration-server", async (req, res) => {
  const name = `${req.query["name"]}` || "NO NAME GIVEN :O";
  console.log("Name:", name);
  const company = `${req.query["company"]}` || "NO COMPANY GIVEN :O";
  console.log("Company:", company);
  const visited = `${req.query["visited"]}` || "NO VISITED NAME GIVEN :O";
  console.log("Visited name:", visited);
  const reason = `${req.query["reason"]}` || "NO NAME GIVEN :O";
  console.log("Reason for visiting:", reason);

  //  MOVE TO CONTROLLERS
  await models.Visitor.create({
    visitorName: name,
    visitorCompany:company,
    visitedName: visited,
    reasonSelection: reason,
  });

  res.send(`REGISTERED: <br />Name: ${name}<br /> Company: ${company}<br /> Visited name: ${visited}<br /> Reason for visiting: ${reason}`);
});

app.listen(8888, () => {
  console.log(`server started at port 8888`);
});


// 