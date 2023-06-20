'use strict'

class Collection {
     constructor (model){
          this.model = model
     }

    async read(id){
     
          let record = null
          
          if(id){
                record = await this.model.findOne({where :{id}})
          } else{
                record = await this.model.findAll()
          }
          return record
     }

     async create (obj){
          try{
               let record = await this.model.create(obj)
               return record
          }
          catch(e){
               console.log('creating error');
               return e
          }
     }

     async update(id,obj){
          
          try{
               if (!id) throw new Error(`The id you send is not exists!`)

               let read = await this.read(id)
               let record = await read.update(obj)

               return record
          }
          catch(e){
               console.log('update error');
               return e
          }
     }

     async delete(id){
          if (!id) throw new Error(`The id you send is not exists!`)

          try{
               let record = await this.model.destroy({ where: { id } })
               return record
          }
          catch(e){
               console.log('delete error');
               return e
          }
     }

     async userClothes(id, model){
          let record = await this.model.findOne({
               where:{id},
               include:model
          })
          return record
     }

}


module.exports = Collection ;