const express = require("express");

const router = express.Router();

const {register,verifyOtp, login, refreshToken} = require("../controllers/authController");
const { protect,authorize } = require("../middleware/authMiddleware");

router.post("/register", register)
router.post("/verifyOtp", verifyOtp)
router.post("/login", login)
router.post("/refreshToken", refreshToken)

router.get("/profile", protect,(req,res)=>{
    res.status(200).json({
        message:"Profile fetched successfully",
        "name": req.user.name,
        "email": req.user.email,
        "Role" : req.user.role
    })
})

module.exports = router