module.exports = function toReadable (number) {
	if (number === 0 ) {
		return "zero";
	}

	let nums = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
	let numty = ["" ,"","twenty ","thirty ","forty ","fifty ","sixty ","seventy ","eighty ","ninety "]

	if (number < 20) {
		return nums[number];
	}

	number = number.toString().split("");

	if (number.length === 2) {
		return (numty[number[0]] + nums[+number[1]])
	}
}
