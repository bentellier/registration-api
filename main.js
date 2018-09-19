const express = require("express");
const app = express();
const cors = require ("cors");

app.use(cors());

app.use("/registration-server", (req, res) => {
  const visitorName = `${req.query["visitor-name"]}` || "NO NAME GIVEN :O";
  // console.log("Name:", visitorName);
  const visitorCompany = `${req.query["visitor-company"]}` || "NO COMPANY GIVEN :O";
  // console.log("Company:", visitorCompany);
  const visitedName = `${req.query["visited-name"]}` || "NO VISITED NAME GIVEN :O";
  // console.log("Visited name:", visitedName);
  const reasonSelection = `${req.query["reason-selection"]}` || "NO NAME GIVEN :O";
  // console.log("Reason for visiting:", reasonSelection);
  res.send(`REQUEST FOR: <br />Name: ${visitorName}<br /> Company: ${visitorCompany}<br /> Visited name: ${visitedName}<br /> Reason for visiting: ${reasonSelection}`);
});

app.listen(8888, () => {
  console.log(`server started at port 8888`);
});
