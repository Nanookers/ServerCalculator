$(document).ready(onReady);

function onReady() {
    console.log('query loaded');
    $('#equalSign').on('click', takeCalculatorInputs )
    $('#plusSign').on('click', makeItAdd )
    $('#minusSign').on('click', makeItSubtract )
}


// Build out render DOM to post the history. Push this into a string
function renderDom() {
    $.ajax({
        url: '/domHistory',
        method: 'GET'
      }).then((response) => {
        console.log( 'server sent us:', response );
        $('#printResults').empty();
        for( let result of response){
            $('#printResults').append(`
                <p>${result.sum}</p>
            `)
        }
    })   
}


let modifier; 

// This is adding the all the proper variables to the object, and reseting each time I use it
// without having to refresh. 
// Finish the other buttons later. 
function makeItAdd() {
    console.log('reading');
    modifier = '';
    modifier = '+';
    return modifier
}//this makes the button add

function makeItSubtract() {
    console.log('reading');
    modifier = '';
    modifier = '-';
    return modifier
}//this makes the button subtract

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
