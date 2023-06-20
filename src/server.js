'use strict'
const express = require('express')
const app = express()
const cors = require('cors')
const routerFood = require('./routes/food')
const routerClothes = require('./routes/clothes')
const page404 = require('./error-handlers/404')
const page500 = require('./error-handlers/500')
const routerUser = require('./routes/user')


app.use(express.json())
app.use(cors())
app.use(routerClothes)
app.use(routerFood)
app.use(routerUser)



app.get('/', (req , res) =>{
     res.status(200).json({
          message:'Home PAge'
     })
})


function start(port){

     app.listen(port , () =>{
          console.log(`server running on port ${port}`);
     })
}

app.use('*' , page404)
app.use(page500)

module.exports = {
     app,
     start
}