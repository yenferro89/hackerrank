/*There is a collection of input strings and a collection of query strings.
 For each query string, determine how many times it occurs in the list of input strings. 
 Return an array of the results.  */

function matchingStrings(strings, queries) {
    // Step 1: Create a frequency dictionary for the input strings
    var frequencyDict = {};
    for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
        var str = strings_1[_i];
        if (frequencyDict[str] !== undefined) {
            frequencyDict[str]++;
        }
        else {
            frequencyDict[str] = 1;
        }
    }
    // Step 2: Query the frequency dictionary
    var result = [];
    for (var _a = 0, queries_1 = queries; _a < queries_1.length; _a++) {
        var query = queries_1[_a];
        if (frequencyDict[query] !== undefined) {
            result.push(frequencyDict[query]);
        }
        else {
            result.push(0);
        }
    }
    return result;
}
// Example usage:
var strings = ['aba', 'baba', 'aba', 'xzxb'];
var queries = ['aba', 'xzxb', 'ab'];
console.log(matchingStrings(strings, queries)); // Output: [2, 1, 0]
