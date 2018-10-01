const express = require("express");
const app = express();
const cors = require ("cors");


app.use(cors());

app.use("/registration-server", (req, res) => {
  const visitorName = `${req.query["name"]}` || "NO NAME GIVEN :O";
  console.log("Name:", visitorName);
  const visitorCompany = `${req.query["company"]}` || "NO COMPANY GIVEN :O";
  console.log("Company:", visitorCompany);
  const visitedName = `${req.query["visited"]}` || "NO VISITED NAME GIVEN :O";
  console.log("Visited name:", visitedName);
  const reasonSelection = `${req.query["reason"]}` || "NO NAME GIVEN :O";
  console.log("Reason for visiting:", reasonSelection);
  res.send(`REGISTERED: <br />Name: ${visitorName}<br /> Company: ${visitorCompany}<br /> Visited name: ${visitedName}<br /> Reason for visiting: ${reasonSelection}`);
});

app.listen(8888, () => {
  console.log(`server started at port 8888`);
});
