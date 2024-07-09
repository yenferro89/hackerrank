/*There is a collection of input strings and a collection of query strings.
 For each query string, determine how many times it occurs in the list of input strings. 
 Return an array of the results.  */

function matchingStrings(strings: string[], queries: string[]): number[] {
    const frequencyDict: { [key: string]: number } = {};
    
    for (const str of strings) {
        if (frequencyDict[str] !== undefined) {
            frequencyDict[str]++;
        } else {
            frequencyDict[str] = 1;
        }
    }

    const result: number[] = [];
    
    for (const query of queries) {
        if (frequencyDict[query] !== undefined) {
            result.push(frequencyDict[query]);
        } else {
            result.push(0);
        }
    }
    
    return result;
}

// Example usage:
const strings = ['aba', 'baba', 'aba', 'xzxb'];
const queries = ['aba', 'xzxb', 'ab'];
console.log(matchingStrings(strings, queries));  // Output: [2, 1, 0]
