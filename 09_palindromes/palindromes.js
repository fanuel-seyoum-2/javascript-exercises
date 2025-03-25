const palindromes = function (string) {
	let alNum = "abcdefghijklmnopqrstuvwxyz0123456789";

	string = string
		.toLowerCase()
		.split('')
		.filter((i) => alNum.indexOf(i) >= 0);
	
	for (let i = 1; i < string.length / 2; i++) {
		if (string[i - 1] !== string[string.length - i])
			return false;
	}
	return true;
		
};

// Do not edit below this line
module.exports = palindromes;
