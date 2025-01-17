const add = function(numOne, numTwo) {
  
  return numOne + numTwo;

};

const subtract = function(numOne, numTwo) {
  
  return numOne - numTwo;

};

const sum = function(arr) {
	
  return arr.reduce((total, element) => total + element, 0);
  

};

const multiply = function(arr) {

  return arr.reduce((total, element) => total * element);

};

const power = function(base, expo) {
	
  return base ** expo;

};

const factorial = function(n) {
  
  let total = 1;

  for(let i = 1; i <= n; i++){
    
    total *= i;

  }

  return total;
   
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
