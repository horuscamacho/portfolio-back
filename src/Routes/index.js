const { Router } = require('express')
const {newProject} = require("../controllers/proyecto-controllers");
const { createUser } = require('../controllers/usuario-controllers')

const router = Router()

router.post("/proyecto", newProject)
router.post('/register', createUser)

module.exports = router