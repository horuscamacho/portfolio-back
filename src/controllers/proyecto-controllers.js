const {Proyecto} = require('./../db')
const cloudinary = require('./cloudinary')
const newProject = async (req, res) => {
    const {name, description, image} = req.body
    console.log("NAME", name)
    console.log("DESCRIPTION", description)
    console.log("IMAGE", image)
    try{
        const result = await cloudinary.uploader.upload(image, {
            folder: "proyectos"
        })
        const proyecto = await Proyecto.create({
            name,
            description,
            image: result.secure_url
        })
        res.status(200).send(proyecto)
    }catch (e) {
        res.status(400).send(e.message)
    }
}


module.exports = {
    newProject
}