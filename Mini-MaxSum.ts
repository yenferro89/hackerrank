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

const arr: number[] = [5, 3, 6, 7, 1];

function miniMax(arr: number[]): void {
  arr.sort((a, b) => a - b);

  const min: number = arr.slice(0, 4).reduce((acc, num) => acc + num, 0);
  const max: number = arr.slice(1).reduce((acc, num) => acc + num, 0);

  console.log(min + " " + max);
}

miniMax(arr);
