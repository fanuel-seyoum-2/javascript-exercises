const reverseString = function(stringE) {
	
	let revString = "";

	for (let i = stringE.length - 1; i >= 0; i--)
		revString += stringE[i];

	return revString;
};

// Do not edit below this line
module.exports = reverseString;
