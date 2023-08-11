const express = require('express')
const puppeteer = require('puppeteer')

const app = express()
const port = 8080
app.listen(port,() =>{
    console.log(`server is running to port : ${port}`)
})