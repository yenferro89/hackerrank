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

const arr1: number[] = [-1, -1, 0, 1, 1];

function plusMinus(arr: number[]): void {
    const len: number = arr.length;
    const count = arr.reduce(
    (
      acc: { positives: number; negatives: number; zeros: number },
      num: number
    ) => {
      if (num > 0) acc.positives++;
      else if (num < 0) acc.negatives++;
      else acc.zeros++;
      return acc;
    },
    { positives: 0, negatives: 0, zeros: 0 }
  );

  console.log((count.positives).toFixed(6));
  console.log((count.negatives).toFixed(6));
  console.log((count.zeros).toFixed(6));
}

plusMinus(arr1);