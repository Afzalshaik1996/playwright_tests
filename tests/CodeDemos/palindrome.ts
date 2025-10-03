function isPalindrome(str: string){
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// Example
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false