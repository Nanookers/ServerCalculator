$(document).ready(onReady);

function onReady() {
    console.log('query loaded');
    $('#equalSign').on('click', takeCalculatorInputs )
    $('#clearButton').on('click', clearInputs )
    // instead of using on click for the operator buttons, I wanted to try and use 
    // html events for those buttons to see how they work. 
}


// Build out render DOM to post the history. Push this into a string
function renderDom() {
    $.ajax({
        url: '/domHistory',
        method: 'GET'
      }).then((response) => {
        console.log( 'server sent us:', response );
        let sumTotal = response;
        console.log(sumTotal[sumTotal.length-1].sum)
        $('#currentEquation').empty();
        $('#currentEquation').append(`
            ${sumTotal[sumTotal.length-1].sum}
        `);
        $('#printResults').empty();
        for( let result of response){ //set the sum to a span id so only the span changes. 
            $('#printResults').append(`
                <p>${result.numberOne} ${result.signifier} ${result.numbertwo} = ${result.sum} </p> 
            `)
        }
        
    })   
}


let modifier = ''; 
// function makeItAdd() {
//     console.log('reading');
    
//     modifier = '+';
//     return modifier
// }//this makes the button add

// function makeItSubtract() {
//     console.log('reading');
//     modifier = '-';
//     return modifier
// }//this makes the button subtract

// function makeItMultiply() {
//     console.log('reading');
//     modifier = '*';
//     return modifier
// }//this makes the button mult

// function makeItDivide() {
//     console.log('reading');
//     modifier = '/';
//     return modifier
// }//this makes the button divide

function takeCalculatorInputs() {
    let numOne = $('#firstNumberInput').val();
    let numTwo = $('#SecondNumberInput').val();
    let modifierSign = modifier

    let equation = {
        numberOne: numOne,
        numbertwo: numTwo,
        signifier: modifierSign,
        sum: ''
    }

    $.ajax({
        url: '/equation',
        method: 'POST',
        data: equation
      }).then((response) => {
        console.log('POST / guesses sent', response)  
      });
    
    renderDom();   
}

function clearInputs(){
    $('#firstNumberInput').val('');
    $('#SecondNumberInput').val('');
    modifier = '';
    //makes it so a modifier has to be selected in order to enter information. 
    // modifiers appear to be cleared because it wont add anything to the history array.
}

function addEmUp() {
    return modifier = '+';
}
function minusEmDown() {
    return modifier = '-';
}
function multiplyEm() {
    return modifier = '*';
}
function divideEm() {
    return modifier = '/';
}
// Tried a different way of getting buttons to Work. I found that I could embed
// the onclick event in the html, instead of creating on ready functions for eachbutton. 