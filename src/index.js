const express = require('express')
const app = express()
const PORT = process.env.PORT || 5555


app.get('/', (req, res)=> {
    res.json('Hello Claris 😬')
})


app.get('*', (req, res)=> {
    res.json('NOTHING 🐱‍🚀')
})
app.listen(PORT, console.log(`⌛ Live on port ${PORT}`))