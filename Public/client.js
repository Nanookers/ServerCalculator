$(document).ready(onReady);

function onReady() {
    console.log('query loaded');
    renderDom();
    $('#equalSign').on('click', takeCalculatorInputs )
    $('#plusSign').on('click', makeItAdd )
    $('#minusSign').on('click', makeItSubtract )
}


// Render Dom is Temp to get stuff posted
function renderDom() {
    $.ajax({
        url: '/arithmeticArray',
        method: 'GET'
      }).then((response) => {
        console.log( 'server sent us:', response );
        $('#testOfDom').empty();
        for( let data of response){ //remove this in the future, just for test
            $('#testOfDom').append(`
            <p>${data}</p>
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

    let arithmetic = {
        numberOne: numOne,
        numbertwo: numTwo,
        signifier: modifierSign,
    }

    $.ajax({
        url: '/arithmeticArray',
        method: 'POST',
        data: arithmetic
      }).then((response) => {
        console.log('POST / guesses sent', response)  
      })
    
    ; //just to see that it works.
    
}


// Logic below works, impliment it on server side. 
// let arrayOne = [
//     {
//         numberOne: 2,
//         numbertwo: 3,
//         signifier: '-',
//     }
// ]

// let numOne = 3;
// let numtwo = 2;

// function nameOf(numOne, numtwo) {
//     for (const arrayO of arrayOne) {
//         if( arrayO.signifier === '-')
//         return numOne - numtwo;
    
//     }

// }

// console.log(nameOf(numOne,  numtwo));