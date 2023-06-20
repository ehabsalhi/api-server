const express = require("express")
const { foodCollection } = require("../models")
const router = express.Router()

router.get('/allfood', allFood)
router.post('/allfood', postFood)
router.get('/allfood/:id', oneFood)
router.put('/allfood/:id', updateFood)
router.delete('/allfood/:id', deleteFood)

async function allFood(req , res){
     const allFood = await foodCollection.read()
     res.status(200).json(allFood)
}

async function postFood (req ,res){
     const body = req.body ;
     const postFood =await foodCollection.create(body)

     res.status(201).json(postFood)
}

async function oneFood(req , res) {
     const id = req.params.id ;
     const oneFood =await foodCollection.read(id)

     res.status(200).json(oneFood)
}

async function updateFood(req,res){
     const id = req.params.id
     const body = req.body
     // const updateFood = food1.update(body,{where:{id}})
     // const findOne = await food1.findOne({where : {id}})

     const updateFood = await foodCollection.update(id,body)

     res.status(202).json(updateFood)

}

async function deleteFood (req,res) {
     const id = req.params.id
     const deleteFood = foodCollection.delete(id)

     res.status(204).json(deleteFood)

}

module.exports = router ;