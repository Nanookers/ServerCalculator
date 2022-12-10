const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('public')); //this addresses the static files.


let equation; //math object coming over
// let sumTotal; //total of solved equation


app.get('/equation', (req, res) => {
    console.log('GET /equation');
    // makeMathHappen();
    res.send(equation);
  })


app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })


app.post('/equation', (req, res) => {
    console.log('Post /equation')
    equation = (req.body);
    res.sendStatus(201);
    })

// The equation object is posting, but I can't seem to turn the strings into numbers. 
// function makeMathHappen() {
//     let one = Number(equation.numberOne)
//     console.log(one);
//     let two = Number(equation.numbertwo)
//     console.log(two);
//         if( equation.signifier === '+'){
//             equation.sum = one + two; 
//             sumTotal = equation.sum
//         }
//         return sumTotal
// }
//end of math function
    

