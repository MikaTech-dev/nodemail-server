const express = require ("express")
const isAlive = require ("./alive.handlers")
const router = express.Router()

router.get("/", isAlive)