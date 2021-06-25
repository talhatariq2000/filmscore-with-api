const express = require("express");
let router = express.Router();
let {User} = require("../../models/users");

router.post("/signup",async (req,res) => {
    let user = await User.findOne({email:req.body.email});
    if (user)
        return res.status(400).send("Email already exists");
    user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.password = req.body.password;

    await user.save();
    return res.send(user);
});

router.post("/login",async(req,res) => {
    let user = await User.findOne({username:req.body.username});
    if (!user) 
        return res.status(400).send("User doesnt exist");
    else if(user.password!=req.body.password)
        return res.status(400).send("Wrong Password");
    res.send(user);
});


module.exports = router;