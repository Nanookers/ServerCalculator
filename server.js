const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('public')); //this addresses the static files.


let equation; //math object coming over
let sum;


app.get('/equation', (req, res) => {
    console.log('GET /equation');
    res.send(sum);
  })


app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })


app.post('/equation', (req, res) => {
    console.log('Post /equation')
    equation = (req.body);
    makeMathHappen(equation) //math happens in post, instead of in the get. 
    res.sendStatus(201);
    })

// The equation object is posting, but I can't seem to turn the strings into numbers. 
function makeMathHappen() {
    if (equation.signifier === '+') {
        let one = Number(equation.numberOne)
        console.log(one);
        let two = Number(equation.numbertwo)
        console.log(two);
        let three = one + two
        console.log(three);
    }return three = sum;
}

    

