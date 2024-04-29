const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    // name of your api
    title: "Music Labs API",
    description:
      "This is the API Documentation for the Music Labs Application. The Backend relies on Express for routing, MongoDB for Database and JWT for Authentication along with cloudinary for image and video storage",
  },
  definitions: {

    User: {
      firstName: "Harshit",
      lastName: "Chauhan",
      email: "test@email.com",
      password: "$2b$10$ZAdSkEDp0zT1r9zUJ/Y/HuNJkOKkPrePn3UPk6eCxiMGb9a/rTDW",
      role: "User",
      wishlist: [],
      _id: "65d09daa60a9d925c87a6a0c",
      courses: [],
      createdAt: "2024-04-29T19:57:53.187Z",
      updatedAt: "2024-04-29T19:57:53.187Z",
    },

    Teacher: {
      firstName: "Harshit",
      lastName: "Chauhan",
      email: "test@email.com",
      password: "$2b$10$ZAdSkEDp0zT1r9zUJ/Y/HuNJkOKkPrePn3UPk6eCxiMGb9a/rTDW",
      role: "Teacher",
      courses: [],
      _id: "65d09daa60a9d925c87a6a0c",
      createdAt: "2024-04-29T19:57:53.187Z",
      updatedAt: "2024-04-29T19:57:53.187Z",
    },
    EmailPassword: {
      email: "harshit@gmail.com",
      password: "MeraPassword",
    },

    Wishlist: [{
      _id: "65d09daa60a9d925c87a6a0c",
      course: "65d7bfcef6e43a005af95bb5",

      user: "65d09daa60a9d925c87a6a0c",
    }],

    UnauthorizedError: {  
        success: "false",
        error: {
          name: "JsonWebTokenError",
          message: "jwt malformed"
        },
        message: "Unauthorized Access"
    },

    FormValidationError: {
      success: "false",
      message: "Please fill all the details " 
    },

    Rating: {
      father: "Simon Doe",
      mother: "Marie Doe",
    },

    Comments: [
      {
        comment: "Wow this is an Amazing Course",
        userId: "65d09daa60a9d925c87a6a0c",
        courseId: "65d7bfcef6e43a005af95bb5",
      },
    ],
  },
  host: "localhost:8000",
};

const outputFile = './swagger-output.json';
// assuming your routes are located in app.js
const routes = ['./app.js'];
swaggerAutogen(outputFile, routes, doc);