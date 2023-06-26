const add = function(a,b) {

    return a+b;
};

const subtract = function(a, b) {
  return a - b;
};


const sum = function(array) {
    return array.reduce((total, current) => total + current, 0);
};

const multiply = (a,b) => {
    let product = 1;
    for (let i = 0; i < args.length; i++) {
      product *= args[i];
    }
    return product;
};

const power = function() {
	return Math.pow(a, b);
};

const factorial = function() {
    if (n === 0) return 1;
    let product = 1;
    for (let i = n; i > 0; i--) {
    product *= i;
    }
    return product;
};

// Do not edit below this line
export {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};