const express = require("express");
const router = express.Router();

const {
    login,
  } = require("../controllers/AuthController");

// import { login } from "../controllers/AuthController";

router.get("/logout");
router.post("/login", login)
router.post("/register")

module.exports = router;
