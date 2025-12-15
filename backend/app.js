const express = require('express')
const {calculateBMI} = require('./bmi')

const app = express()
app.use(express.json())
app.get('/', function(req, res){
    res.sendFile(process.cwd()+'/frontend/index.html');
    });
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    next()
  })

app.post('/bmi',(req, res) => {
    try {
        const { weight, height } = req.body
        const result = calculateBMI(weight, height)
        res.status(200).json(result)
    } catch (err) {
        res.status(400).json({error: err.message})
    }
})

module.exports = app