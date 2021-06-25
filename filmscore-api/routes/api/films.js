const express = require("express");
let router = express.Router();

var { Film } = require("../../models/films");

//getting
router.get("/",async(req,res) => {
    //pagination
    let page = req.query.page ? req.query.page : 1;
    let perPage = req.query.perPage ? req.query.perPage : 10;
    let skipRecords = (perPage*(page-1));
    let films = await Film.find().skip(skipRecords).limit(perPage);
    return res.send(films);
});

//deleting by id
router.delete("/:id",async(req,res) => {
    let film = await Film.findByIdAndDelete(req.params.id);
    return res.send(film);
});

//inserting
router.post("/",async(req,res) => {
    let film = new Film();
    film.name = req.body.name;
    film.type = req.body.type;
    film.cast = req.body.cast;

    await film.save();
    return res.send(film);
});

router.put("/:id",async(req,res) => {
    let film = await Film.findById(req.params.id);
    film.score = req.body.name;
    film.total = req.body.total;
    await product.save();
    return res.send(product); 
});



module.exports = router;