//dotenv config
require ("dotenv").config()
// Essential imports
const express = require ("express")
const morgan = require("morgan")
const cors = require ("cors")
const { isAlive } = require("./src/routes/server-status/alive.controller")

const app = express()
// Morgan config
app.use(morgan("dev"))

// Cors

if (process.env.NODE_ENV == "production"){
    app.use(cors({
        origin: "http"
    }))
}

// Server config and startup
const PORT = process.env.NODE_PORT || 5000

app.listen (PORT, ()=> {
    try {
        console.log (`☑️ Server started at http://localhost:${PORT}`)
    } catch (error) {
        console.log ("🚫 Error occurred while starting the server", error)
    }
})

// app.get("/", (req, res)=> {
//     res.json("Server alive")
// })

app.use ("/api", isAlive)