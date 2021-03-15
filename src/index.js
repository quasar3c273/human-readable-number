module.exports = function toReadable(number) {
	if (number === 0) {
		return "zero";
	}

	let nums = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
	let numty = ["", "", "twenty ", "thirty ", "forty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety "]

	if (number < 20) {
		return nums[number];
	}

	number = number.toString().split("");

	if (number.length === 2) {
		return (numty[number[0]] + nums[+number[1]]).trim()
	} else if (number.length === 3) {
		if (number[1] === "0" && number[2] === "0") {
			return nums[+number[0]] + " hundred"
		} else if (number[1] === "1") {
			return nums[+number[0]] + " hundred " + nums[+(number[1] + number[2])];
		} else {
			return (nums[+number[0]] + " hundred " + numty[number[1]] + nums[+number[2]]).trim();
		}
	}
}
