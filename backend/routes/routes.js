const express = require("express")
const FurnishController = require("../controller/controller")
const route = express.Router()



route.get("/", FurnishController.getAllData)
route.get("/:id", FurnishController.getDataById)
route.delete("/:id", FurnishController.deleteData)
route.post("/", FurnishController.postData)
route.put("/:id", FurnishController.editData)

module.exports = route