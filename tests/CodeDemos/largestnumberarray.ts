
function LargestArray(arr: number[]){
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}
console.log(LargestArray([10, 25, 3, 47, 5])); // 47
console.log(LargestArray([-5, -2, -10, -1]));  // -1

