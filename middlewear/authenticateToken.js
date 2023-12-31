const jwt = require("jsonwebtoken");
require('dotenv').config()

function authenticateToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  jwt.verify(token.slice(7), process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    // Attach user info to the request object
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;