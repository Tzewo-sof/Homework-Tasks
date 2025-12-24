function findLargest(arr) {
    let largest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }

    return largest;
}

const numbers = [3, 10, 6, 2, 99, 45];
console.log("Largest number:", findLargest(numbers));
