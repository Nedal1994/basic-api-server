'use strict'

const express=require('express')
const router=express.Router()
const {Clothes} = require('../models/indexModel')

router.get('/clothes',getClothes)
router.get('/clothes:/id',getOneClothes)
router.post('/clothes',createClothes)
router.put('/clothes:/id',updateClothes)
router.delete('/clothes:/id',deleteClothes)

async function getClothes(req,res)
{
    const obj = req.body
    let allClothes=await Clothes.findAll()
    res.status(200).json(allClothes)
}

async function getOneClothes(req,res)
{
    const id = parseInt(req.params.id)
    let cloth=await Clothes.findOne({
        where:{id:id}
    })
    res.status(201).json(cloth)
}

async function createClothes(req,res)
{
    const obj = req.body
    let cloth=await Clothes.create(obj)
    res.status(201).json(cloth)
}

async function updateClothes(req,res)
{
    const id = parseInt(req.params.id)
    const obj = req.body
    let foundCloth=await Clothes.findOne({
        where:{id:id}
    })
    const updatedCloth = await foundCloth.update(obj)
    res.status(201).json(updatedCloth)
}

async function deleteClothes(req,res)
{
    const id = parseInt(req.params.id)
    let deletedCloth=await Clothes.destroy({
        where:{id}
    })
    res.status(204).json(deletedCloth)
}

module.exports=router