'use strict'


const supertest = require('supertest')
const {app} = require('../src/server')
const { db } = require('../src/models')
const muke = supertest(app)
require('dotenv').config()



describe('test server' , () =>{

     beforeAll(async () => {
          await db.sync()
     })

     afterAll(async () =>{
          await db.drop()
     })
     // ==============================================================
     it('post food' ,async () =>{
          const res = await muke.post('/allfood').send({
               name : 'burger' ,
               time : '45 m'
          })
          console.log(JSON.parse(res.text).name);
          expect(JSON.parse(res.text).name).toBe('burger')
     })


     it('get all foods' ,async () =>{
          const res = await muke.get('/allfood')
          console.log(JSON.parse(res.text));
          const list =     [
               {
                 id: 1,
                 name: 'burger',
                 time: '45 m',
               }
             ]
          expect(JSON.parse(res.text).name).toBe(list.name)
     })

     it('get one food' ,async () =>{
          const res = await muke.get('/allfood/1')

          expect(JSON.parse(res.text).name).toBe('burger')
     })

     it('update food' ,async () =>{
          const res = await muke.put('/allfood/1').send({
               name : 'burger',
               time : '1 hour'
          })

          expect(JSON.parse(res.text).name).toBe('burger')
     })

     it('delteteClothe' ,async () =>{
          const res = await muke.delete('/allfood/1')
          

          expect(res.status).toBe(204)
     })



     // ==============================================================
     it('get all clothes' ,async () =>{
          const res = await muke.get('/allClothes')
          console.log(JSON.parse(res.text));
          const list =     [
               {
                 id: 1,
                 name : 'pants' ,
                 externalId : 1
               }
             ]
          expect(JSON.parse(res.text).name).toBe(list.name)
     })
     it('post clothes' ,async () =>{
          const res = await muke.post('/clothes').send({
               name : 'pants' ,
               externalId : 1
          })
          console.log(JSON.parse(res.text).name);
          expect(JSON.parse(res.text).name).toBe('pants')
     })
     it('get one clothe' ,async () =>{
          const res = await muke.get('/clothes/1')
          console.log(JSON.parse(res.text).name);

          expect(JSON.parse(res.text).name).toBe('pants')
     })
    
     it('updateClothe' ,async () =>{
          const res = await muke.put('/clothes/1').send({
               name : 'shirt',
               externalId : 1
          })
          console.log(JSON.parse(res.text).name);

          expect(JSON.parse(res.text).name).toBe('shirt')
     })

     it('delteteClothe' ,async () =>{
          const res = await muke.delete('/clothes/1')
          

          expect(res.status).toBe(204)
     })

     //=========================================================
          it('post user' ,async () =>{
               const res = await muke.post('/user').send({
                    name : 'ehab' ,
               })
               expect(JSON.parse(res.text).name).toBe('ehab')
          })
          it('get all user' ,async () =>{
               const res = await muke.get('/user')
               const list =     [
                    {
                      id: 1,
                      name : 'ehab'
                    }
                  ]
               expect(JSON.parse(res.text).name).toBe(list.name)
          })

          it('get one user' ,async () =>{
               const res = await muke.get('/user/1')     
               expect(JSON.parse(res.text).name).toBe('ehab')
          })
         
          it('update User' ,async () =>{
               const res = await muke.put('/user/1').send({
                    name : 'eyad',
               })
               // console.log(JSON.parse(res.text).name , '');
     
               expect(JSON.parse(res.text).name).toBe('eyad')
          })
          
          it('User clothes' ,async () =>{
               const res = await muke.get('/userclothes/1')
               console.log(res.body , '55555555555555555555');
               expect(JSON.parse(res.text).name).toBe('eyad')
          })

          it('deltete User' ,async () =>{
               const res = await muke.delete('/user/1')

               expect(res.status).toBe(204)
          })


     
          //=========================================================
     it('404' ,async () =>{
          const res = await muke.get('/clot')
          expect(res.status).toBe(404)
     })
     it('404' ,async () =>{
          const res = await muke.post('/clot')
          expect(res.status).toBe(404)
     })

})


