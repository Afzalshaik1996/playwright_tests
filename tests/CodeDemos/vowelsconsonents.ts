function VowelConsonants(str: string): { vowels: number, consonants: number } {
    let vowels = 0;
    let consonants = 0;

    // Convert to lowercase manually (avoid built-in toLowerCase)
    for (let i = 0; i < str.length; i++) {
        let ch = str[i];

        // Check alphabet manually
        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
            let lower = ch >= 'A' && ch <= 'Z' ? String.fromCharCode(ch.charCodeAt(0) + 32) : ch;

            // Check vowel
            if (lower === 'a' || lower === 'e' || lower === 'i' || lower === 'o' || lower === 'u') {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    return { vowels, consonants };
}

// Example
console.log(VowelConsonants("Hello World")); 
