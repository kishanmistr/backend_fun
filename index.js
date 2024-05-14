require('dotenv').config()

const express = require('express')
const app = express()

const port = 3000

app.get('/', (req,res) => {

    res.send('hi kishan')

} )

app.listen(process.env.PORT,  () => {

    console.log(`${process.env.PORT}`);
} )

