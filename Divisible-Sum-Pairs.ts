/*Given an array of integers and a positive k integer  determine the number
 of (i, j) pairs where i < j and ar[i] + ar[j] is divisible by k.

Example
ar = [1,2,3,4,5,6]

Three pairs meet the criteria: [1,4], [2,3], and [4,6]

Function Description

Complete the divisibleSumPairs function in the editor below.

divisibleSumPairs has the following parameter(s):

    int n: the length of array ar
    int ar[n]: an array of integers
    int k: the integer divisor

Returns
- int: the number of pairs*/

function divisibleSumPairs(n: number, k: number, ar: number[]): number {
  let count = 0;
  let freq = new Array(k).fill(0);

  for (let i = 0; i < n; i++) {
    let remainder = ar[i] % k;

    let complement = (k - remainder) % k;

    count += freq[complement];

    freq[remainder]++;
  }

  return count;
}

// Example usage:
const ar = [1, 2, 3, 4, 5, 6];
const n = ar.length;
const k = 3;
console.log(divisibleSumPairs(n, k, ar1)); // Output: 5