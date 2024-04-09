const swaggerAutogen = require('swagger-autogen')();

const doc = {
 info: {
// name of your api
  title: 'My API',
  description: 'Description'
 },
 components: {
    schemas: {
        user: {
            $firstName: 'Harsh',
            $lastName: 'Chauhan'
            $email: 'musiclearner@gmail.com',
            $wishlist: ''
        },
      }
    },  

 host: 'localhost:8000'
};

const outputFile = './swagger-output.json';
// assuming your routes are located in app.js
const routes = ['./app.js'];
swaggerAutogen(outputFile, routes, doc);