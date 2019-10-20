// Init Server
const express = require("express");
const server = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 8080;

//Set Globals
const path = require("path");
global.dbConfig = path.resolve(__dirname + "/data/db-config");

//Import The Routes
const primaryRouter = require("./api/server");
const errorRouter = require("./api/errors/errors");

//Style the Logs Yo
const chalk = require("chalk");
const lg = console.log;
const blu = chalk.blue;
const grn = chalk.green;

//Confiure Server
server.use(cors());
server.use(express.json());

//Gotta Set those Routes Yo
server.use("/api", primaryRouter);

//But What if a route does not Exist
server.use("*", errorRouter);

//Turn this bad chicken with some style yo
server.listen(port, () => {
  lg(`
    ${grn("*************************************")} 
        Server listening on port: ${blu(port)} 
    ${grn("*************************************")}`);
  lg(`         ♫♪.ılılıll${blu("|̲̅̅●̲̅̅|̲̅̅=̲̅̅|̲̅̅●̲̅̅|")}llılılı.♫♪\n`);
});
