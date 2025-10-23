const sendResponse = require ("../../utils/responseMiddleware")

exports.isAlive = async (req, res, next)=> {
    sendResponse(res, 201, true, "Server is alive")
    console.log(req.ip, "Server is alive");
}