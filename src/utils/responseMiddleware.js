const sendResponse = (res, statusCode, success, message, data = null, errors = null) => {
    const response = {
        success,
        statusCode,
        message
    };

    if (data) {
        response.data
    }

    if (errors) {
        response.errors = errors
    }

    return res.status(statusCode).json(response)
}

module.exports = sendResponse