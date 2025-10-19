//dotenv config
require ("dotenv").config()
// Essential imports
const express = require ("express")
const morgan = require("morgan")

const app = express()
// Morgan config
app.use(morgan("dev"))

const PORT = process.env.NODE_PORT || 5000

// Server startup
app.listen (PORT, ()=> {
    try {
        console.log (`☑️ Server started at http://localhost:${PORT}`)
    } catch (error) {
        console.log ("🚫 Error occurred while starting the server", error)
    }
})

app.get("/", (req, res)=> {
    res.json("Server alive")
})