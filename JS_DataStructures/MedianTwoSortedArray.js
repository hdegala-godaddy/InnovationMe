//let Utils = require("./Utilities.js")

function medianOfTwoSortedArrays(arr1, arr2) {
    if (!arr1 || !arr2) {
        throw "Invalid argument medianOfTwoSortedArrays to  arr1: " + arr1 + " arr2:" + arr2;
    }

    const medianProp = (arr1.length + arr2.length) % 2 === 0 ? 'even' : 'odd';
    const medianIndex = medianProp === "odd" ? (arr1.length + arr2.length - 1) / 2 : (arr1.length + arr2.length - 2) / 2;

    if (arr1.length === 0 || arr2.length === 0) {
        return handleOneEMptyArray(arr1, arr2, medianIndex);
    }

    return medianProp === "odd" ? median(arr1, arr2, medianIndex) : (median(arr1, arr2, medianIndex) + median(arr1, arr2, medianIndex + 1)) / 2;
    //return medianProp === "odd" ? median(arr1, arr2, medianIndex) : (median(arr1, arr2, medianIndex + 1)) ;
}

function findPosition(arr, low, high, element) {

    if (element < arr[low]) {
        return low;
    } else if (element > arr[high]) {
        return high + 1;
    }
    else {
        const middleIndex = (low + high) / 2;
        if (arr[middleIndex] === element) {
            return middleIndex;
        } else if (arr[middleIndex] < element && element < arr[middleIndex + 1]) {
            return middleIndex + 1;
        } else if (arr[middleIndex - 1] < element && element < arr[middleIndex]) {
            return middleIndex;
        } else if (arr[middleIndex] < element) {
            return this.findPosition(arr, middleIndex, high, element);
        } else {
            return this.findPosition(arr, low, middleIndex, element);
        }
    }
}

function handleOneEMptyArray(arr1, arr2, medianIndex) {
    if (!arr1.length && !arr2.length) {
        console.log("Both Arrays empty");
    } else if (arr1.length === 0 && arr2.length > medianIndex) {
        return arr2.length[medianIndex];
    } else if (arr2.length === 0 && arr1.length > medianIndex) {
        return arr1.length[medianIndex];
    }
}

function median(a, b, n) {
    if (!a.length || !b.length) {
        return handleOneEMptyArray(a, b, n);
    }
    else {
        if (Math.max(a[a.length - 1], b[0]) === b[0]) {
            return a.concat(b)[n];
        } else if (Math.max(b[b.length - 1], a[0]) === a[0]) {
            return b.concat(a)[n];
        }
        // else {
        //     if (n === 1) {
        //         return Math.min(Math.min(a[0], b[0]), ;
        //     }
        //     else if (n == a.length + b.length - 1) {
        //         return Math.max(a[a.length - 1], b[b.length - 1]);
        //     }

        if (a.length + b.length <= 4) {
            return merge(a, b)[n];
        }
        else {
            let bigArray = a.length >= b.length ? a : b;
            let smallArray = a.length < b.length ? a : b;
            let tempIndex = (bigArray.length - 1) / 2;
            let pos = findPos(smallArray, bigArray[tempIndex]);
            let numOfElmntsB4 = pos;
            let numOfElmntsA4 = smallArray.length - pos - 1;

            //if (numOfElmntsB4 + tempIndex - n > numOfElmntsA4) {
            if (numOfElmntsB4 + tempIndex - n > 0) {
                let arr1 = smallArray.slice(0, numOfElmntsB4);
                let arr2 = bigArray.slice(0, tempIndex + 1);
                return median(arr1, arr2, n);
            } else if (tempIndex + numOfElmntsB4 === n) {
                return bigArray[tempIndex];
            }
            else {
                let arr1 = smallArray.slice(numOfElmntsB4, smallArray.length);
                let arr2 = bigArray.slice(tempIndex, bigArray.length);
                let reqdIndex = n - numOfElmntsB4 - tempIndex;
                return median(arr1, arr2, reqdIndex);
            } 
        }
    }

}

function findPos(arr, element) {
    let returnPosition = findPosition(arr, 0, arr.length - 1, element);
    return returnPosition;
}

function merge(a, b) {
    if (!a || !a.length) {
        return b;
    } else if (!b || !b.length) {
        return a;
    }

    let arr= [];
    let ia = ib = 0;
    for (let indx = 0; indx < a.length + b.length; indx++) {
        if (ia == a.length) {
            arr[indx] = b[ib++];
        } else if (ib == b.length) {
            arr[indx] = a[ia++];
        } else {
            if (a[ia] < b[ib]) {
                arr[indx] = a[ia++];
            } else {
                arr[indx] = b[ib++];
            }
        }
    }

    return arr;

}

// console.log(medianOfTwoSortedArrays([], []));

// console.log(medianOfTwoSortedArrays([], null));

// console.log(medianOfTwoSortedArrays(undefined, []));

//console.log(medianOfTwoSortedArrays([1, 3], [2]));

// console.log(medianOfTwoSortedArrays([1, 2, 3], [4, 5, 6]));

// console.log(medianOfTwoSortedArrays([4, 5, 6], [1, 2, 3]));

console.log(medianOfTwoSortedArrays([1,6,7], [2, 3, 8, 9, 10]));