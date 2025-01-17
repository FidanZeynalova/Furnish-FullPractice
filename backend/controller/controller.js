const express = require("express")
const FurnishModel = require("../model/model")
const app = express()
app.use(express.json())

app.use(express.json())

let FurnishController = ({
    getAllData: async (req,res)=>{
        let datas = await FurnishModel.find()
        res.send(datas)
    },
    getDataById: async (req,res) =>{
        let {id} = req.params
        let data =await FurnishModel.findById(id)
        res.send(data)
    },
    postData: async (req,res) =>{
        let newData = FurnishModel(req.body)
        await newData.save()
        res.send({
            message:"Succes Post",
            data:req.body
        })
    },
    deleteData: async (req,res) =>{
        let {id} = req.params
        await FurnishModel.findByIdAndDelete(id)
        res.send({
            message:"Succes Delete"
        })
    },
    editData: async (req,res) =>{
        let {id} = req.params
        let edit = req.body
        let edited = await FurnishModel.findByIdAndUpdate(id,edit,{new:true})
        res.send(edited)
    }
})

module.exports = FurnishController