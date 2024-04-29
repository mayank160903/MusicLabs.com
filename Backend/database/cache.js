const Redis = require('ioredis');

const redisClient = new Redis({
    host: 'localhost', // Redis server address
    port: 6379,        // Redis server port
  });
  
  exports.redisClient = redisClient;
  