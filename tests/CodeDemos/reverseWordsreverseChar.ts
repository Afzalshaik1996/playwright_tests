function reverseSentenceAndWords(sentence: string): string {
    let words = [];
    let word = "";

    // Step 1: Extract words manually
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== " ") {
            word = sentence[i] + word; // prepend to reverse characters
        } else {
            if (word.length > 0) {
                words.push(word); // add reversed word
                word = "";
            }
        }
    }

    // Push last word
    if (word.length > 0) {
        words.push(word);
    }

    // Step 2: Reverse word order manually
    let reversedSentence = "";
    for (let i = words.length - 1; i >= 0; i--) {
        reversedSentence += words[i];
        if (i > 0) reversedSentence += " ";
    }

    return reversedSentence;
}

// Example
console.log(reverseSentenceAndWords("Hello World from ChatGPT"));
// Output: "TPGtahC morf dlroW olleH"
