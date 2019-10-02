

class Utilities{

    // findInsertion position in a sorted array.π
    //Recursive 
    //Note implement NonRecursive
    findPosition(arr, low, high, element) {

            if (element < arr[low]) {
                return low;
            } else if (element > arr[low] && element < arr[low + 1]) {
                return low + 1;
            } else if (element > arr[high]){
                return high + 1;
            } 
            else if (element > arr[high - 1] && element < arr[high]) {
                return high;
            } else {
                const middleIndex = (low + high) / 2;
                if (arr[middleIndex] > element) {
                    return this.findPosition(arr, middleIndex, high, element);
                } else if (arr[middleIndex] < element) {
                    return this.findPosition(arr, low, middleIndex, element);
                }
            }
    }

    
};

module.exports.Utils = new Utilities();
let Utils = module.exports.Utils;
console.log(Utils.findPosition([1], 0,0, 0));
// console.lo().findPosition([1], 0,0, 2));
// console.log(new Utilities().findPosition([1, 3, 5, 7, 9], 0,4, 2));
// console.log(new Utilities().findPosition([1, 3, 5, 7, 9], 0,4, 10));