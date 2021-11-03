'use strict'

const express=require('express')
const router=express.Router()
const {Food} = require('../models/indexModel')

router.get('/food',getFood)
router.get('/food:/id',getOneFood)
router.post('/food',createFood)
router.put('/food:/id',updateFood)
router.delete('/food:/id',deleteFood)

async function getFood(req,res)
{
    const obj = req.body
    let allFood=await Food.findAll()
    res.status(200).json(allFood)
}

async function getOneFood(req,res)
{
    const id = parseInt(req.params.id)
    let food=await Food.findOne({
        where:{id:id}
    })
    res.status(201).json(food)
}

async function createFood(req,res)
{
    const obj = req.body
    let food=await Food.create(obj)
    res.status(201).json(food)
}

async function updateFood(req,res)
{
    const id = parseInt(req.params.id)
    const obj = req.body
    let foundFood=await Food.findOne({
        where:{id:id}
    })
    const updatedFood = await foundFood.update(obj)
    res.status(201).json(updatedFood)
}

async function deleteFood(req,res)
{
    const id = parseInt(req.params.id)
    let deletedFood=await Food.destroy({
        where:{id}
    })
    res.status(204).json(deletedFood)
}

module.exports=router