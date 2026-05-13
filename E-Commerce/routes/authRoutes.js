const express =require('express');
const router = express.Router();
const { register,verifyOtp,login,refreshToken} = require("../controllers/authControllers");

router.post("/register", register);
router.post("/verify-otp", verifyOtp);
router.post("/login", login);
router.post("/refresh-token", refreshToken);

router.get("/protected", (req, res) => {
  res.json({ message: "This is a protected route" });
}               
);


module.exports = router;