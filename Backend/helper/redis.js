const mongoose = require('mongoose')
const redis = require('redis')
const util = require('util')



const exec = mongoose.Query.prototype.exec 

async function redisConnect(){
// const redisUrl = 'localhost:6379';
// const client = redis.createClient(redisUrl);
// // client.hg
// client.hGet = util.promisify(client.hGet);

// try{
//     await client.connect()
//     console.log('Redis connected')

// mongoose.Query.prototype.exec = async function(){ // Modifing the exec property of mongoose

//     if(!this.useCache){
//         return exec.apply(this, arguments)
//     }

//     let key = JSON.stringify(Object.assign({},this.getQuery(),{collection: this.mongooseCollection.name}));

    
//     const cacheValue = await client.hGet(this.hashkey, key)
    
//     if(cacheValue){
//         const doc = JSON.parse(cacheValue)  

        
//         return  Array.isArray(doc)
//                 ? doc.map((d)=>new this.model(d))
//                 : new this.model(doc);
//     }

//     const result = await exec.apply(this, arguments)  
//     if(result){ 
//         if(Array.isArray(result) && result.length==0){
            
//             return null
//         }
//         else{
//             client.hSet(this.hashkey, key, JSON.stringify(result)); 
//             return result
//         }
//     }else{ 
//         console.log("data not present")
//         return null
//     } 
// }

// mongoose.Query.prototype.cache = function(hkey){
//     this.useCache = true;
//     this.hashkey = JSON.stringify(hkey || '')
//     return this;
// }

// } catch(e){
//     console.log(e)
// }
}

module.exports = redisConnect

// module.exports =  function clearCache(hashkey){
//     client.del(JSON.stringify(hashkey))
// }