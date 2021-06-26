const express = require("express");
let router = express.Router();

var { Actor } = require("../../models/Actors");

//getting
router.get("/",async(req,res) => {
    //pagination
    let page = req.query.page ? req.query.page : 1;
    let perPage = req.query.perPage ? req.query.perPage : 10;
    let skipRecords = (perPage*(page-1));
    let actors = await Actor.find().skip(skipRecords).limit(perPage);
    return res.send(actors);
});

//deleting by id
router.delete("/:id",async(req,res) => {
    let actor = await Actor.findByIdAndDelete(req.params.id);
    return res.send(actor);
});

//inserting
router.post("/",async(req,res) => {
    let actor = new Actor();
    actor.name = req.body.name;
    actor.type = req.body.type;
    actor.cast = req.body.cast;

    await actor.save();
    return res.send(actor);
});

router.put("/:id",async(req,res) => {
    let actor = await Actor.findById(req.params.id);
    actor.score = req.body.name;
    actor.total = req.body.total;
    await actor.save();
    return res.send(actor); 
});



module.exports = router;