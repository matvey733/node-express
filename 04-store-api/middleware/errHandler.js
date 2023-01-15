const ApiError = require("../ApiError");

async function errHandler(err, req, res, next) {
    if (err instanceof ApiError) {
        res.status(err.statusCode);
        return res.json({ message: err.message });
    }
    
	// if err is not an instance of ApiError, send a 500 response
    console.log(err.message);
    return res.status(500).json({ message: err.message })
}

module.exports = errHandler;
