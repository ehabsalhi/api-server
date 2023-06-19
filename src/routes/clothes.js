
const express = require('express')
const router = express.Router()
const { closhes1 } = require('../models')


router.get('/clothes' , allClothes)
router.post('/clothes' , postClothes)
router.get('/clothes/:id' , oneClothe)
router.put('/clothes/:id' , updateClothe)
router.delete('/clothes/:id' , delteteClothe)


async function allClothes(req,res){
     const allClothes = await closhes1.findAll()
     res.status(200).json(allClothes)
}


async function postClothes(req,res){
     const body = req.body
     const postClothes = await closhes1.create(body)

     res.status(201).json(postClothes)
}


async function oneClothe(req,res){
     const id = req.params.id
     const oneClothe = await closhes1.findOne({where:{id}})

     res.status(200).json(oneClothe)
}
async function updateClothe(req,res){
     const body = req.body
     const id = req.params.id
     const findOne = await closhes1.findOne({where : {id}})
     const updateClothe = await findOne.update(body)

     res.status(202).json(updateClothe)
}

async function delteteClothe(req,res){
     const id = req.params.id
     const delteteClothe = await closhes1.destroy({where:{id}})
     res.status(204).json(delteteClothe)
}

module.exports = router ;