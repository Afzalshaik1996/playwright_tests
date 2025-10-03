function areAnagrams(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) return false;

    let freq: { [key: string]: number } = {};

    // count characters in str1
    for (let i = 0; i < str1.length; i++) {
        let ch = str1[i];
        freq[ch] = (freq[ch] || 0) + 1;
    }

    // decrease counts using str2
    for (let i = 0; i < str2.length; i++) {
        let ch = str2[i];
        if (!freq[ch]) {
            return false; // char missing or extra
        }
        freq[ch]--;
    }

    return true;
}

// Example
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("triangle", "integral")); // true
console.log(areAnagrams("hello", "world")); // false
