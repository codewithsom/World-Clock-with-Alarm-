const express = require('express')
const path = require('path')
const app = express()
const port = 4040

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "templates/index.html"))
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})