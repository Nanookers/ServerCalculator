const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000

let arithmeticArray = []; //this will be changed to the correct info later


app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('public'));  //this addresses the static files.



app.get('/arithmeticArray', (req, res) => {
    console.log('GET /arithmeticArray')
    res.send(arithmeticArray);
  })


app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })

app.post('/arithmeticArray', (req, res) => {
    console.log('Post /arithmeticArray')
    arithmeticArray.push(req.body);
    res.sendStatus(201);
    })