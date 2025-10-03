function reverseWordsByChar(sentence: string){
    let result = "";
    let word = "";

    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== " ") {
            // build current word
            word = sentence[i] + word; // prepend to reverse characters
        } else {
            // add reversed word to result
            result += word + " ";
            word = ""; // reset for next word
        }
    }

    // Add the last word
    result += word;

    return result;
}

// Example
console.log(reverseWordsByChar("Hello World from ChatGPT"));
// Output: "olleH dlroW morf TPGtahC"


//npx ts-node reversewordscharacter.ts