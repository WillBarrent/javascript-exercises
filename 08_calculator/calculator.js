const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(args) {
	return args.reduce((accumulator, current) => accumulator + current, 0);
};

const multiply = function(args) {
  return args.reduce((accumulator, current) => accumulator * current, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	if (n <= 1) return 1;
  else return n * factorial(n - 1);
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
