function factorial(n: number){
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

console.log(factorial(5)); 


// npx ts-node factorial.ts  


//Explanation :
// Defines a function named factorial.
// Input: n → a number for which we want the factorial.
// Output: a number (: number) → the factorial of n.
// Initializes a variable fact to 1.

// A for loop that starts at i = 1 and goes up to i = n.
// We multiply fact by each number from 1 to n.

// Equivalent to fact = fact * i;
// Multiplies the current fact value by i in each iteration.
// Example for n = 5:
// i = 1 → fact = 1 × 1 = 1
// i = 2 → fact = 1 × 2 = 2
// i = 3 → fact = 2 × 3 = 6
// i = 4 → fact = 6 × 4 = 24
// i = 5 → fact = 24 × 5 = 120

// Returns the final factorial value after the loop ends.
// Calls the factorial function with 5.