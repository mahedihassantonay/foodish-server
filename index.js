const express = require('express')
const cors = require('cors')

const chefsData = require('./data.json')

const app = express();
app.use(cors());

app.get('/', (req,res)=>{
    res.send('Hello world')
})

app.get('/chefsData', (req,res)=>{
    res.send(chefsData)
})

app.listen(5000, ()=>{
    console.log('Server is running on port 5000')
})