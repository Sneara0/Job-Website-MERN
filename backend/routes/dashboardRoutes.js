const express = require ("express");
const router =express.Router();
const authMiddleware =require ("../Middleware/authMiddleware.js");


router.get("/dashboard", authMiddleware,(req,res)=>{

    res.json({
        message:"welcome to the dashboard",
        user:req.user
    });



});

module.exports = router;
