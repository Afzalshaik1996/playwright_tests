function reverseSentenceByWord(sentence: string){
    let words= [];
    let word = "";

    // Step 1: Extract words manually
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] !== " ") {
            word += sentence[i]; // build current word
        } else {
            if (word.length > 0) {
                words.push(word); // push completed word
                word = "";
            }
        }
    }

    // Push the last word if there is one
    if (word.length > 0) {
        words.push(word);
    }

    // Step 2: Reverse words manually
    let reversedSentence = "";
    for (let i = words.length - 1; i >= 0; i--) {
        reversedSentence += words[i];
        if (i > 0) reversedSentence += " "; // add space between words
    }

    return reversedSentence;
}

// Example
console.log(reverseSentenceByWord("Hello World from ChatGPT"));
// Output: "ChatGPT from World Hello"
