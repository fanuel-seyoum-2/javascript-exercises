const removeFromArray = function(arr, ...rems) {

	for (let i = arr.length - 1; i >= 0; i--) {
		for (let rem of rems) {
			if (arr[i] === rem){
				delete arr[i];
			}
		}
	}
	return arr.filter((i) => i);
};

// Do not edit below this line
module.exports = removeFromArray;
