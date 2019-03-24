
module.exports = function getZerosCount(number, base) {

	let factorisedBase = getDuplicateValues(factorize(base));
	let minCountOfZero = 0;
	let arrZero = [];
	for (let i = 0; i < factorisedBase.length; i++) {
		let p = factorisedBase[i];
		let pi = p.number;
		let qi = p.counter;
		let zero = Math.floor(getNumberOfEntries(number, pi) / qi);
		arrZero.push(zero);
		}

	arrZero.sort(function (a, b) {
		return a - b
	});
	minCountOfZero = arrZero[0];
	return minCountOfZero;

	function factorize(num) {
		let factorsNumber = [];
		let quantityOfFactors = [];
		let a = [];
		let b = 0;
		for (let i = 2; i * i <= num; i++) {
			while (num % i == 0) {
				factorsNumber.push(i);
				num /= i;
			}
		}
		if (num != 1) {
			factorsNumber.push(num);
		}

		return factorsNumber;
	}

	function getDuplicateValues(arr) {
		let arrPowers = [];
		let powers = {};
		let pair = {};
		arr.sort(function (a, b) {
			return a - b
		});
		let c = arr[0];
		let counter = 0;
		for (let j = 0; j < arr.length; j++) {
			if (c == arr[j]) {
				counter++;
			} else {
				pair = {
					"number": c,
					"counter": counter
				};				
				arrPowers.push(pair);
				c = arr[j];
				counter = 1;
			}
		}
		pair = {
			"number": c,
			"counter": counter
		};
		arrPowers.push(pair);		
		return arrPowers;
	}

	function getNumberOfEntries(num, multPow) {
		let power = 1;
		let factorInPower = multPow;
		let numberOfEntries = 0;
		while (num >= factorInPower) {

			numberOfEntries += Math.floor(num / factorInPower);
			power++;
			factorInPower = Math.pow(multPow, power);
		}
		
		return numberOfEntries;

	}

}
