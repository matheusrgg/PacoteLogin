const express = require("express")

const router = express.Router()


const AdminController = require("../controller/admin.controller")


router.get("/list", AdminController.listAdmin)
router.post("/create", AdminController.createAdmin)
router.post("/login", AdminController.loginAdmin)

module.exports = router