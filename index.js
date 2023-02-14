const app = require('./src/app')
const {conn} = require('./src/db')
require('dotenv').config()
const {PORT} = process.env
conn.sync({force: false}).then(() => {
    app.listen(`${PORT}`, () => {
        console.log(`$listening on PORT ${PORT}`)
    })
})


