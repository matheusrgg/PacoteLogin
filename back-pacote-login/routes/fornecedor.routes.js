const express = require("express")

const router = express.Router()

const FornecedorController = require('../controller/fornecedor.controller')

router.get("/list/:id", FornecedorController.idFornecedor)
router.get("/list", FornecedorController.listFornecedor)
router.post("/create", FornecedorController.createFornecedor)
router.delete("/delete/:id", FornecedorController.deleteFornecedor)
router.put("/update/:id", FornecedorController.editFornecedor)
router.get("/listAnuncios/:id", FornecedorController.listAnunciosFornecedor)

module.exports = router