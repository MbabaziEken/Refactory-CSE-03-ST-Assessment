const express = require("express");
const router = express.Router();

// importing models
const studentsModel = require("../models/students");

// creating get routes
router.get("/students", (req, res) => {
    res.render("students");
});

router.post("/students", async(req,res,next) => {
    try {
    const student = new studentsModel(req.body)
        console.log(student)
        await studentsModel.register(students,req.body)
        res.redirect("/students")
    }catch(error){
         res.json({ success: false, message: "failed to register ", error:error});
        console.log(error)
    }
}
    
);




module.exports = router;