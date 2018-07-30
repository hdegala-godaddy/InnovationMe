let Utils = require("./Utilities.js")

function medianOfTwoSortedArrays(arr1, arr2) {
    if (!arr1 || !arr2) {
        throw "Invalid argument medianOfTwoSortedArrays to  arr1: " + arr1 + " arr2:" + arr2;
    }

    const medianIndex = (arr1.length + arr2.length - 2) / 2;

    if (arr1.length === 0 || arr2.length === 0) {
        console.log(handleOneEMptyArray(arr1, arr2, medianIndex));
    }

    console.log(median(arr1, arr2, medianIndex));
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
        } else if (Math.max(b[a.length - 1], a[0]) === a[0]) {
            return b.concat(a)[n];
        }
        else {
            let bigArray = a.length > b.lenght ? a : b;
            let smallArray = a.length < b.lenght ? a : b;

            let tempIndex = (bigArray.length - 1) / 2;

            let pos = findPos(smallArray, bigArray[temp]);

            let numOfElmntsB4 = pos;
            let numOfElmntsA4 = smallArray.length - pos - 1;

            if (numOfElmntsB4 > numOfElmntsA4 ){

            }
            else if ( numOfElmntsB4 > numOfElmntsA4) {

            } else if (tempIndex + numOfElmntsB4 === n){
                return bigArray[tempIndex];
            }



        }
    }

}

function findPos(arr, element) {
    let returnPosition = Utils.findPos(arr,0,arr.length,element);
    console.log(returnPosition);
    return returnPosition;
}

// function findPos(arr, element) {

//     let low = 0;
//     let high = arr.length - 1;
//     for (let index = 0; index < arr.length; index++) {
//         let middle = (low + high) / 2;
//         if (element < arr[0]) {
//             return 0;
//         }
//         else if (element > arr[arr.length - 1]) {
//             arr.length;
//         } else {
//             if (element < arr[middle]) {
//                 if (element > arr[middle + 1]) { }
//             }
//         }



//     }

// }

//medianOfTwoSortedArrays([], []);

//medianOfTwoSortedArrays([], null);

//medianOfTwoSortedArrays(undefined, []);

medianOfTwoSortedArrays([1], [2]);

medianOfTwoSortedArrays([1, 2, 3], [4, 5, 6]);

medianOfTwoSortedArrays([4, 5, 6], [1, 2, 3]);

