
const express = require('express')
const router = express.Router()
const { clothesCollection } = require('../models')


router.get('/clothes' , allClothes)
router.post('/clothes' , postClothes)
router.get('/clothes/:id' , oneClothe)
router.put('/clothes/:id' , updateClothe)
router.delete('/clothes/:id' , delteteClothe)


async function allClothes(req,res){
     const allClothes = await clothesCollection.read()
     res.status(200).json(allClothes)
}


async function postClothes(req,res){
     const body = req.body
     const postClothes = await clothesCollection.create(body)

     res.status(201).json(postClothes)
}


async function oneClothe(req,res){
     const id = req.params.id
     const oneClothe = await clothesCollection.read(id)

     res.status(200).json(oneClothe)
}
async function updateClothe(req,res){
     const body = req.body
     const id = req.params.id
     // const findOne = await closhes1.findOne({where : {id}})
     const updateClothe = await clothesCollection.update(id,body)

     res.status(202).json(updateClothe)
}

async function delteteClothe(req,res){
     const id = req.params.id
     const delteteClothe = await clothesCollection.delete(id)
     res.status(204).json(delteteClothe)
}

module.exports = router ;