function reverseArray(arr: number[]) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
    return arr;
}
console.log(reverseArray([1, 4, 5, 10, 51])); 

//npx ts-node reversearray.ts