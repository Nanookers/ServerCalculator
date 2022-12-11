$(document).ready(onReady);

function onReady() {
    console.log('query loaded');
    $('#equalSign').on('click', takeCalculatorInputs )
    $('#clearButton').on('click', clearInputs )
    // $('#deleteHistory').on('click', deleteHistory )
    // instead of using on click for the operator buttons, I wanted to try and use 
    // html events for those buttons to see how they work. 
    $('body').on(`click`,'.equationHistory', rerunHistory )
}

let modifier = ''; 

// Dedicated render DOM function
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
                <p class="equationHistory">${result.numberOne} ${result.signifier} ${result.numbertwo} = ${result.sum}</p> 
            `)
        }
        
    })   
}

// This function creates Objects and POSTs them to the server.
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
    
    // Empty Input Validation W3Schools
    if( numOne === '' || numTwo === ''  || modifier === '' ){
        clearInputs(); //reset inputs
        alert( 'Inputs were not entered properly, try again.');
        return equation = ''; 
        // equation needs to be emptied or else equation will still post. 
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

// Clears inputs and sets them to their origingal value.
function clearInputs(){
    $('#firstNumberInput').val('');
    $('#SecondNumberInput').val('');
    $('#currentEquation').text('');

    modifier = '';
    //makes it so a modifier has to be selected in order to enter information. 
    // modifiers appear to be cleared because it wont add anything to the history array.
}

// Ugly, but works. Click to alert, fills inputs with numbers, edits the Sum Total. 
function rerunHistory() {
    let selectedHistory = $(this).text()
    console.log(typeof(selectedHistory));
    let splitHistory = selectedHistory.split(" "); //turns into Array. Used 'type of' to figure out what I was returning. Found split method on w3schools.
    console.log(splitHistory); //all arrays have five values
    $('#firstNumberInput').val(splitHistory[0]);
    $('#SecondNumberInput').val(splitHistory[2]);
    $('#currentEquation').text(splitHistory[4]);
    alert(`${splitHistory[0]} ${splitHistory[1]} ${splitHistory[2]} = ${splitHistory[4]}`);

}

// Couldn't find Solution for this. Non-Functional.
function deleteHistory() {
    $.ajax({
        url: '/domHistory',
        method: 'DELETE',
    })
    $('#printResults').empty();
}

// Runs onClick event in the html for addition button.
function addEmUp() {
    return modifier = '+';
}
// Runs onClick event in the html for subraction button.
function minusEmDown() {
    return modifier = '-';
}
// Runs onClick event in the html for mulitplication button.
function multiplyEm() {
    return modifier = '*';
}
// Runs onClick event in the html for division button.
function divideEm() {
    return modifier = '/';
}

// Tried a different way of getting buttons to Work. I found that I could embed
// the onclick event in the html, instead of creating on ready functions for eachbutton. 

// Original function for Buttons (this was changed).
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
