function reverseString(str: string){
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Example
console.log(reverseString("Hello World")); 

//npx ts-node reversestring.ts



//Explanation :
// Defines a function named reverseString.
// Input: str → a string.
// Output: a string (: string) → the reversed version of str.

// Initializes an empty string called reversed.
// This will be used to build the reversed string by adding characters one by one.

// A for loop to iterate through the string from the end to the start:
// i = str.length - 1 → starts at the last character of the string.
// i >= 0 → continues until the first character.
// i-- → moves one step backwards in each iteration.

// Takes the character at index i (str[i]) and appends it to the reversed string.
// This builds the reversed string one character at a time from the end of str.

// Returns the final reversed string.
// Calls reverseString with "Hello World".

// Output: "dlroW olleH"

