const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const route = require("./routes/routes")
const app = express()


app.use(cors())
dotenv.config()
app.use(express.json())
require("./config/config")
app.use("/furnish", route)

app.listen(process.env.port, () => {
    console.log("6060 listen");
})

