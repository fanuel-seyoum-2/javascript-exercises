const findTheOldest = function(arr) {

	for (let arrItm of arr) {
		arrItm.age = (arrItm.yearOfDeath || (new Date().getFullYear())) - arrItm.yearOfBirth;
	}

	let itm = arr[0];;

	for (let i = 1; i < arr.length; i++)
		if (arr[i].age > itm.age)
			itm = arr[i];

	return itm;
		
};

// Do not edit below this line
module.exports = findTheOldest;
