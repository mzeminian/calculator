var firstNumber = 0;
var secondNumber = 0;
var operator = "";


//BASIC MATHS OPERATORS
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

//OPERATE FUNCTION
function operate(firstNumber, secondNumber, operator){

    if(operator == "+"){
        let result = add(firstNumber, secondNumber);
        console.log("The result is: " + result);
    }

    if(operator == "-"){
        let result = subtract(firstNumber, secondNumber);
        console.log("The result is: " + result);
    }

    if(operator == "*"){
        let result = multiply(firstNumber, secondNumber);
        console.log("The result is: " + result);
    }

    if(operator == "/"){
        let result = divide(firstNumber, secondNumber);
        console.log("The result is: " + result);
    }
}

