const getTheTitles = function(arr) {
	let titles = [];

	for (arrItm of arr) {
		if (arrItm.title) 
			titles.push(arrItm.title);
	}	

	return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
