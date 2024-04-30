require("dotenv").config();

const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../../app"); 
const { ObjectId } = require("mongodb");
const connectDb = require("../../database/db");


beforeAll(async () => {
 
});

beforeEach(async () => {

})

// 

describe("Course API Tests",  () => {
test("Fetch Course Description Correctly", async () => {
 

  const response = await request(app).get("/api/course/description/65d278b7342ef66267b5bb9b");
  
  expect(response.status).toBe(200);
  expect(response.body).toHaveProperty("success", true);
  expect(response.body).toHaveProperty("message", "Course fetched successfully");
  expect(response.body).toHaveProperty("course");
  expect(response.body.course).toHaveProperty("title");

},50000);

test("Fetch Non Existant Course", async () => {
 
  const garbage = await request(app).get("/api/course/description/65d278bf66267342e7b5bb9b")
  expect(garbage.status).toBe(404)

},50000);

})