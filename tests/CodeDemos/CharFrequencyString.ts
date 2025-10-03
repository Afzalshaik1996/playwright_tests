function charFrequency(str: string){
    let freq: { [key: string]: number } = {};

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (freq[ch] === undefined) {
            freq[ch] = 1;
        } else {
            freq[ch]++;
        }
    }
    return freq;
}

// Example
console.log(charFrequency("programming"));
// Output: { p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 }
