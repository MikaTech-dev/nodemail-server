const sendRespones = (res, statusCode, success, message, data = null, errors = null) => {
    const response = {
        success,
        statusCode,
        message
    };
}

if (data) {
    response.data
}

if (errors) {
    response.errors = errors
}

