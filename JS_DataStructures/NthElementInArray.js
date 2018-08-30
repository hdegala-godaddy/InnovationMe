
// [4,5,6,3,14,78,89]

function arrayFindNth(numbers, n) {
    if (numbers.length < n) {
        console.log("Not valid");
    }

    let sortedArray = [];
    let greatestOfSrotedArray = 0;
    let nthLeast = 0;

    for (let index = 0; index < numbers.length; index++) {
        if (sortedArray.length < n || numbers[index] < sortedArray[n - 1]) {
            if (numbers[index] > greatestOfSrotedArray) {
                greatestOfSrotedArray = numbers[index];
            }
            insertedIntoSortedArray(sortedArray, numbers[index], n);
        }
    }

    return greatestOfSrotedArray;

}


function insertedIntoSortedArray(sortedArray, value, n) {
    if (sortedArray.length < n) {
        sortedArray.push(value);
    }
    else {
        sortedArray.splice(n - 1, 1);
        sortedArray.push(value);
    }
}


console.log(arrayFindNth([3, 5, 1, 6], 3));