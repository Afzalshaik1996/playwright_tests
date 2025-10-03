function findDuplicateChars(str: string){
    let freq: { [key: string]: number } = {};
    let duplicates: string[] = [];

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        if (freq[ch] === undefined) {
            freq[ch] = 1;
        } else {
            freq[ch]++;

            // push only first time it becomes duplicate
            if (freq[ch] === 2) {
                duplicates.push(ch);
            }
        }
    }

    return duplicates;
}

// Example
console.log(findDuplicateChars("programming")); // [ 'r', 'g', 'm' ]
