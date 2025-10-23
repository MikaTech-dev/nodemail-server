const express = require ("express")
const isAlive = require ("./alive.controller")
const router = express.Router()

router.get("/", isAlive)