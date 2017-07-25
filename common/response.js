module.exports = {
    errorResponse: function(message,res) {
        return res.json({ result: {}, message: message , success:0, statusCode:500});
    },
    successResponse: function(message,res,data) {
        return res.json({ result: data, message: message , success:1, statusCode:200});
    }
}