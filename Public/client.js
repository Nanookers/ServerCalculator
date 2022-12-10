$(document).ready(onReady);

function onReady() {
    console.log('query loaded');
    $('#equalSign').on('click', takeCalculatorInputs )
    $('#plusSign').on('click', makeItAdd )
    $('#minusSign').on('click', makeItSubtract )
    $('#multSign').on('click', makeItMultiply )
    $('#divSign').on('click', makeItDivide )
}


// Build out render DOM to post the history. Push this into a string
function renderDom() {
    $.ajax({
        url: '/domHistory',
        method: 'GET'
      }).then((response) => {
        console.log( 'server sent us:', response );
        $('#printResults').empty();
        for( let result of response){ //set the sum to a span id so only the span changes. 
            $('#printResults').append(`
                <p>${result.numberOne} ${result.signifier} ${result.numbertwo} = ${result.sum} </p> 
            `)
        }
    })   
}


let modifier = ''; 

// This is adding the all the proper variables to the object, and reseting each time I use it
// without having to refresh. 
// Finish the other buttons later. 
// building out buttons individually, then combine them into one function
function makeItAdd() {
    console.log('reading');
    
    modifier = '+';
    return modifier
}//this makes the button add

function makeItSubtract() {
    console.log('reading');
    modifier = '-';
    return modifier
}//this makes the button subtract

function makeItMultiply() {
    console.log('reading');
    modifier = '*';
    return modifier
}

function makeItDivide() {
    console.log('reading');
    modifier = '/';
    return modifier
}

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
