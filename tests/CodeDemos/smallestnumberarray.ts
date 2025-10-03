
function SmallestArray(arr: number[]): number {
    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}
// Example
console.log(SmallestArray([10, 25, 3, 47, 5])); 
console.log(SmallestArray([-5, -2, -10, -1])); 

