function isArmstrong(num: number): boolean {
    let original = num;
    let count = 0;
    let temp = num;

    // Step 1: Count digits
    while (temp > 0) {
        count++;
        temp = Math.floor(temp / 10);
    }

    // Step 2: Calculate sum of digits^count
    let sum = 0;
    temp = num;

    while (temp > 0) {
        let digit = temp % 10;

        // Calculate digit^count manually
        let power = 1;
        for (let i = 0; i < count; i++) {
            power *= digit;
        }

        sum += power;
        temp = Math.floor(temp / 10);
    }

    // Step 3: Compare
    return sum === original;
}

// Example
console.log(isArmstrong(153)); // true
console.log(isArmstrong(9474)); // true
console.log(isArmstrong(123));  // false
