const sumAll = function(en, st) {
	if (typeof en !== "number" || typeof st !== "number")
		return "ERROR";

	if (en < 0 || st < 0)
		return "ERROR";
	
	if (!(Number.isInteger(en) && Number.isInteger(st))) 
		return "ERROR";
	
	if  (en > st) {
		let tmp = en;
		en = st;
		st = tmp;
	}

	let sum = 0;
	for (let i = st; i >= en; i--)
		sum += i;
	return sum;
	

};
console.log(sumAll(123, 1));

// Do not edit below this line
module.exports = sumAll;
