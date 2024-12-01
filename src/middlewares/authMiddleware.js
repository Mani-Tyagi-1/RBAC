const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    let token;
    let authHeader = req.headers.authorization || req.headers.Authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
        token = authHeader.split(" ")[1];
    
        if (!token) {
            return res.status(401).json({ message: "No Token, Authorization Denied" });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded;
            console.log("The decoded user is : ", req.user);
            next();
        }
        catch (error) {
            res.status(401).json({ message: "Invalid Token" });
        }
    }
    else {
        return res.status(401).json({ message: "No Token, Authorization Denied" });
    }
 }

module.exports = { verifyToken };