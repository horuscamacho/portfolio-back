const { Router } = require('express')
const {newProject} = require("../controllers/proyecto-controllers");


const router = Router()

router.post("/proyecto", newProject)

module.exports = router