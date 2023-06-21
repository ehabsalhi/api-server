const express = require("express")
const { UserCollection, clothesCollection } = require("../models")
const router = express.Router()

router.get('/user', allUser)
router.post('/user', postUser)
router.get('/user/:id', oneUser)
router.put('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)
router.get('/userclothes/:id', userClothes)

async function allUser(req , res){
     const allUser = await UserCollection.read()
     res.status(200).json(allUser)
}

async function postUser (req ,res){
     const body = req.body ;
     const postUser =await UserCollection.create(body)

     res.status(201).json(postUser)
}

async function oneUser(req , res) {
     const id = req.params.id ;
     const oneUser =await UserCollection.read(id)

     res.status(200).json(oneUser)
}

async function updateUser(req,res){
     const id = req.params.id
     const body = req.body
     // const updateFood = food1.update(body,{where:{id}})
     // const findOne = await food1.findOne({where : {id}})
     
     const updateUser = await UserCollection.update( id,body)

     res.status(202).json(updateUser)

}

async function deleteUser (req,res) {
     const id = req.params.id
     const deleteUser = UserCollection.delete(id)

     res.status(204).json(deleteUser)

}
async function userClothes (req,res) {
     const id = req.params.id
     const userClothes = await UserCollection.userClothes(id ,clothesCollection.model )

     res.status(200).json(userClothes)

}

module.exports = router ;