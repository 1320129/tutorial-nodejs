const express = require("express");
const router = express.Router();
const MovieCtrl = require("../controllers/Movie_Ctrl");
// 기본경로 : /api

router.get("/movies", MovieCtrl.getMovie);

router.get("/movies/:title", MovieCtrl.detailGetMovie);

router.post("/movies", MovieCtrl.postMovie);

router.put("/movies", MovieCtrl.putMovie);

router.delete("/movies", MovieCtrl.deleteMovie);

module.exports = router;
