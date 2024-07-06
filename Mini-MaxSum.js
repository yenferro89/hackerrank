// Given five positive integers, find the minimum and maximum values
// that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line
//of two space-separated long integers.
//Example
//arr = [1, 3, 5, 7, 9]
//Prints
// 16 24
// Solution
// Sort the array.
// To get the minimum sum, sum the first four elements (smallest values).
// To get the maximum sum, sum the last four elements (largest values).
// Print the results.
var arr = [5, 3, 6, 7, 1];
function miniMax(arr) {
    arr.sort(function (a, b) { return a - b; });
    var min = arr.slice(0, 4).reduce(function (acc, num) { return acc + num; }, 0);
    var max = arr.slice(1).reduce(function (acc, num) { return acc + num; }, 0);
    console.log(min + " " + max);
}
miniMax(arr);
