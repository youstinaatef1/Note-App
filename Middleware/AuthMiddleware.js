const jwt = require("jsonwebtoken");
const authMiddleware = (req, res, next) => {
    try {
        // get Token From req.header
        const authHeaders = req.headers.authorization;
        if (!authHeaders) return res.status(401).json({msg: "Token Required"});
        // Get token value
        const token = authHeaders.split(" ")[1]
        // Token value verify
        const payload = jwt.verify(token, process.env.JWT_SECRET); 
        req.user = payload.id;
        // next
        next();
    } catch (error) {
       return res.status(401).json({msg: "Token Invalid"});
    }
}
module.exports = authMiddleware;