// const opOperators = document.querySelector('.op-keyboard')
const display = document.getElementById('display')

function Calculator() {
    this.inputOne = ''
    this.inputTwo = ''
    this.operator = 0
    this.result = 0
    this.addition = function(inputOne, inputTwo){
        return this.result = parseInt(inputOne) + parseInt(inputTwo)
    };
    this.subtraction = function(inputOne, inputTwo){
        return this.result = parseInt(inputOne) - parseInt(inputTwo)
    };
    this.multiplication = function(inputOne, inputTwo){
        return this.result = parseInt(inputOne) * parseInt(inputTwo)
    };
    this.division = function(inputOne, inputTwo){
        return this.result = parseInt(inputOne) / parseInt(inputTwo)
    };
}

const calculation = new Calculator()

document.querySelector('.number-pad').addEventListener('click', (value) => {
    
    const click = value.target.value

    if (calculation.operator === 0){
        // tornar 2 as 2 linhas a baixo função usando conceito de currying.js
        calculation.inputOne += click
        display.innerText = calculation.inputOne
    } else if (click == '-1'){
        switch(calculation.operator){
            case '1':
                display.innerText = calculation.addition(
                    calculation.inputOne, 
                    calculation.inputTwo
                    )
                break;
            case '2':
                display.innerText = calculation.subtraction(
                    calculation.inputOne, 
                    calculation.inputTwo
                    )
                break;
            case '3':
                display.innerText = calculation.multiplication(
                    calculation.inputOne, 
                    calculation.inputTwo
                    )
                break;
            case '4':
                display.innerText = calculation.division(
                    calculation.inputOne, 
                    calculation.inputTwo
                    )
                break;
        }
    } else {
        // tornar 2 as 2 linhas a baixo função usando conceito de currying.js
        calculation.inputTwo += click
        display.innerText = calculation.inputTwo
    }
});

document.querySelector('.op-keyboard').addEventListener('click', (value) => {
    const click = value.target.value
    if (click === '5'){
        reload(calculation)
    } if(calculation.inputOne !== ''){
        // tornar 1 linha a baixo função
        calculation.operator = click
    }
});


const reload = (object) => {
    object.inputOne = '';
    object.inputTwo = '';
    object.operator = 0;
    display.innerText=''
}