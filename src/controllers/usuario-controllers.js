const {Usuario} = require('../db')
const bcrypt = require('bcryptjs')

const createUser = async (req, res) => {
    const {username, password} = req.body
    Usuario.findOne({where: {username}}).then(async (doc) => {
        if(doc) res.status(200).send(`El usuario ${username} ya existe, intenta con uno diferente.`)
        if(!doc){
            const hashPass = await bcrypt.hash(password, 10)
            const nuevoUsuario = await Usuario.create({
                username,
                password: hashPass
            })
            res.status(200).send(`El usuario ${username} ha sido creado correctamente.`)
        }
    })
}


module.exports = {
    createUser
}