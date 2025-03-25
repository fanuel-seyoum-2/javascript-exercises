const fibonacci = function(reach) {
	let arr = [0, 1];

	if (reach < 0)
		return "OOPS";

	for (let i = 0; i < reach; i++) {
		arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
	}

	return arr[arr.length - 2];
};

// Do not edit below this line
module.exports = fibonacci;
