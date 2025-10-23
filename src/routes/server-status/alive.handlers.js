const sendResponse = require ("../../utils/responseMiddleware")

exports.isAlive = async (req, res)=> {
    sendResponse(res, 201, true, "Server is alive")
    console.log(req.ip, "Server is alive");
}