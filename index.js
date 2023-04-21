const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
var dataBaseFile = require("./dataBaseFile")
let routes = require("./ticketRouteFile")

dataBaseFile()

const expressApp = express()
expressApp.use(express.json())
expressApp.use("/rest", routes)

const PORT = process.env.PORT || 7000
expressApp.listen(PORT, console.log(`You are listening on port: ${PORT}`))