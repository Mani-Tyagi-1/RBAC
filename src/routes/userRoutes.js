const express = require("express");
const { verifyToken } = require("../middlewares/authMiddleware");
const  authorizeRoles = require("../middlewares/roleMiddleware");
const router = express.Router();

// only Admin can access this route
router.get("/admin", verifyToken,authorizeRoles("admin"), (req, res) => {
    res.json({ message: "Welcome Admin",role: req.user.role });
})


// Both Admin and manager can access this route
router.get("/manager", verifyToken, authorizeRoles("admin", "manager"), (req, res) => {
  res.json({ message: "Welcome Manager", role: req.user.role  });
});


// All can access this route
router.get("/user", verifyToken, authorizeRoles("admin", "manager", "user"), (req, res) => {
  res.json({ message: "Welcome User",role: req.user.role  });
});

module.exports = router;

