const add = function(a, b) {
	return a + b;	
};

const subtract = function(a, b) {
	return a - b;	
};

const sum = function(...nums) {
	return nums.flat().reduce((total, nums) => total += nums, 0);
};

const multiply = function(...nums) {
	return nums.flat().reduce((total, nums) => total *= nums, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	for (let i = n - 1; i > 0; --i)
		n *= i;
	return (n || 1);
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
