const mongoose = require("mongoose")

let FurnishSchema = new mongoose.Schema({
    desc:String,
    name:String,
    work:String,
    img:String
})
let FurnishModel = mongoose.model("furnish",FurnishSchema)

module.exports = FurnishModel