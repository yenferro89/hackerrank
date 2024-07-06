// Given an array of integers, calculate the ratios of its elements that are positive,
// negative, and zero. Print the decimal value of each fraction on a new line with 6 places
// after the decimal.
// Example
// arr = [-1, -1, 0, 1, 1]
// Prints
// 0.400000
// 0.400000
// 0.200000
// Solution:
// Iterate over the array
// Create counter for positive, negative, and zeros
var arr1 = [-1, -1, 0, 1, 1];
function plusMinus(arr) {
    var len = arr.length;
    var count = arr.reduce(function (acc, num) {
        if (num > 0)
            acc.positives++;
        else if (num < 0)
            acc.negatives++;
        else
            acc.zeros++;
        return acc;
    }, { positives: 0, negatives: 0, zeros: 0 });
    console.log((count.positives / len).toFixed(6));
    console.log((count.negatives / len).toFixed(6));
    console.log((count.zeros / len).toFixed(6));
}
plusMinus(arr1);
