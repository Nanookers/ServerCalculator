const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static('public')); //this addresses the static files.


let equation; //math object coming over
let domHistory = []; //history for the Dom


app.get('/domHistory', (req, res) => {
    console.log('GET /domHistory');
 //reading it as a string
    res.send(domHistory); //will not send numbers... //String sends back undefined object
  })


app.listen(PORT, () => {
    console.log ('Server is running on port', PORT)
  })


  
//  I Put makeMathHappen in here. Post was unable to handle the process
app.post('/equation', (req, res) => {
    console.log('Post /equation')
    equation = (req.body);
    makeMathHappen(equation) //math happens in post, instead of in the get. 
    res.sendStatus(201);
    })


// all equations passed through if else statement. 
function makeMathHappen() {
    if (equation.signifier === '+') {
        let one = Number(equation.numberOne)
        console.log(one);
        let two = Number(equation.numbertwo)
        console.log(two);
        let three = one + two;
        console.log(three);
        equation.sum = three;
        return domHistory.push(equation); 
    }
    if( equation.signifier === '-' ) {
        let one = Number(equation.numberOne)
        console.log(one);
        let two = Number(equation.numbertwo)
        console.log(two);
        let three = one - two;
        console.log(three);
        equation.sum = three;
        return domHistory.push(equation);
    }
    if( equation.signifier === '*' ) {
        let one = Number(equation.numberOne)
        console.log(one);
        let two = Number(equation.numbertwo)
        console.log(two);
        let three = one * two;
        console.log(three);
        equation.sum = three;
        return domHistory.push(equation);
    }
    if( equation.signifier === '/' ) {
        let one = Number(equation.numberOne)
        console.log(one);
        let two = Number(equation.numbertwo)
        console.log(two);
        let three = one / two;
        console.log(three);
        equation.sum = three;
        return domHistory.push(equation);
    }
}




    

