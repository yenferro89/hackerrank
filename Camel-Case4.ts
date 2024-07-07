/*Camel Case is a naming style common in many programming languages.
In Java, method and variable names typically start with a lowercase letter,
with all subsequent words starting with a capital letter (example: startThread).
Names of classes follow the same pattern, except that they start with a capital
letter (example: BlueCar).

Your task is to write a program that creates or splits Camel Case variable,
method, and class names.

Input Format

Each line of the input file will begin with an operation (S or C) followed by a semi-colon 
followed by M, C, or V followed by a semi-colon followed by the words you'll need to operate on.
The operation will either be S (split) or C (combine)
M indicates method, C indicates class, and V indicates variable
In the case of a split operation, the words will be a camel case method, class or variable name 
that you need to split into a space-delimited list of words starting with a lowercase letter.
In the case of a combine operation, the words will be a space-delimited list of words starting
with lowercase letters that you need to combine into the appropriate camel case String. Methods 
should end with an empty set of parentheses to differentiate them from variable names.

Sample Input
S;M;plasticCup()
C;V;mobile phone
C;C;coffee machine
S;C;LargeSoftwareBook
C;M;white sheet of paper
S;V;pictureFrame

*/


function processCamelCase(input: string): string {
    
    const parts = input.split(';');
    const operation = parts[0];
    const type = parts[1];
    const words = parts[2];

    if (operation === 'S') {
        // Split operation
        if (type === 'M') {
            // Remove the trailing "()" for methods
            const cleanedWords = words.replace(/\(\)$/, "");
            return splitCamelCase(cleanedWords).join(' ');
        } else {
            return splitCamelCase(words).join(' ');
        }
    } else if (operation === 'C') {
        // Combine operation
        const wordList = words.split(' ');
        return combineCamelCase(wordList, type);
    }

    return '';
}

function splitCamelCase(word: string): string[] {
    return word.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().split(' ');
}

function combineCamelCase(words: string[], type: string): string {
    let combined = '';

    if (type === 'C') {
        // Class: capitalize first letter of the first word
        combined = words.map((word, index) => {
            if (index === 0) {
                return capitalize(word);
            } else {
                return capitalize(word);
            }
        }).join('');
    } else {
        // Method or variable: camel case
        combined = words.map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            } else {
                return capitalize(word);
            }
        }).join('');

        if (type === 'M') {
            combined += '()';
        }
    }

    return combined;
}

function capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}
