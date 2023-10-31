const express = require("express")

const router = express.Router()


const AnuncioController = require("../controller/anuncio.controller")


router.get("/list", AnuncioController.listAnuncio)
router.post("/create", AnuncioController.createAnuncio)
router.get("/list/:id", AnuncioController.idAnuncio)
router.get("/welcome", AnuncioController.welcome)


module.exports = router