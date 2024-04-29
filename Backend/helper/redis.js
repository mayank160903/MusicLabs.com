
const mongoose = require('mongoose')
const redis = require('redis')

const redisUrl = 'redis://127.0.0.1:6379';
const client = redis.createClient(redisUrl);            


// We are storing the default exec() function in the exec variable
const exec = mongoose.Query.prototype.exec 

mongoose.Query.prototype.exec = async function(){ 
    
    if(!this.useCache){
        return exec.apply(this, arguments)
    }

        let key = JSON.stringify(Object.assign({},this.getQuery(),{collection: this.mongooseCollection.name}));

    
    const cacheValue = await client.hget(this.hashkey, key)
    
    if(cacheValue){
        const doc = JSON.parse(cacheValue)  
    return  Array.isArray(doc)
                ? doc.map((d)=>new this.model(d))
                : new this.model(doc);
    }

    const result = await exec.apply(this, arguments) 

    if(result){
        if(Array.isArray(result) && result.length==0){
            
            return null
        }
        else{

            client.hset(this.hashkey, key, JSON.stringify(result)); 
            return result
        }
    }else{ 
        console.log("empty")
        return null
    } 
}

module.exports = 
    function clearCache(hashkey){
        client.del(JSON.stringify(hashkey))
    }