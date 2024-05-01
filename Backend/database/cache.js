const Redis = require('ioredis');

const redisClient = new Redis({
    host: process.env.REDIS_SERVER || '127.0.0.1', // Redis server address //Convert this to 127.0.0.1 if not using docker
    port: 6379,        // Redis server port
  });
  
exports.redisClient = redisClient;
  