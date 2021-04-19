// # Declaring Functions

// #### 1. Multiply - Function Declaration
// * Create a function that multiples a number by another number.

function multiply(number1, number2) {
    console.log(number1 * number2);
}
multiply(4, 8);

// #### 2. Multiply - Function Declarations as Values
// * Rework the syntax of the above function so that the function declaration is stored as a value.

const multiplyVar = function multiply (number1, number2) {
    console.log(number1 * number2);
}

multiplyVar(4, 8);

// #### 3. Multiply - Arrow Function
// * Rework the syntax of the function declaration so that is uses the arrow function shorthand.
const multiplyArrow = (number1, number2) => {
  const multiplication = number1 * number2;
  console.log(multiplication);
};
multiplyArrow(4, 8);

// #### 4. Declarations
// * Create functions (using all three declarations) to check the remainder of division given two numbers. /*  */
function remainder (number1, number2) {
  console.log(number1 % number2);
}
remainder(4, 8);


const remainderVar = function (number1, number2) {
  console.log(number1 % number2);
}
remainderVar(4, 8);

const remaiderArrow = (number1, number2) => {
  console.log(number1 % number2);

};
remainderVar(4,8);