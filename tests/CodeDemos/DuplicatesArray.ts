function findDuplicates(arr: number[]): number[] {
    let duplicates: number[] = [];
    let visited: number[] = [];

    for (let i = 0; i < arr.length; i++) {
        let count = 0;

        // check if already visited
        let alreadyVisited = false;
        for (let v = 0; v < visited.length; v++) {
            if (visited[v] === arr[i]) {
                alreadyVisited = true;
                break;
            }
        }
        if (alreadyVisited) {
            continue;
        }

        // count occurrences of arr[i]
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }

        // if count > 1 → duplicate
        if (count > 1) {
            duplicates.push(arr[i]);
        }

        // mark as visited
        visited.push(arr[i]);
    }

    return duplicates;
}

// Example
console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1, 6, 3]));
// Output: [1, 2, 3]
