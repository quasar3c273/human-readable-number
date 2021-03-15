module.exports = function toReadable (number) {
    if (number === 0 ) {
        return "zero";
    }
    let nums = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    if (number <= nums.length - 1) {
        return nums[number];
    }
}
