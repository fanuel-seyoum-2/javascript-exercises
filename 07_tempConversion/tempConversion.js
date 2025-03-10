const convertToCelsius = function(tempInFah) {
	return +((5/9) * (tempInFah - 32)).toFixed(1);
};

const convertToFahrenheit = function(tempInCel) {
	return +((9/5) * (tempInCel) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
