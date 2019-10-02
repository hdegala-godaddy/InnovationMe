if (!Array.prototype.quickSort) {

    let defaultComparator = (a,b) => a - b;
    Array.prototype.quickSort = function quickSort(comparator = defaultComparator){

        if (!Array.isArray(this)) {
            throw new TypeError("quickSort called on non Array type");
        }

        if (comparator != defaultComparator && typeof comparator != 'function') {
            throw new TypeError("compartor not a function");
        }

        var array = this;

        function partition(low, high){
           
            let pivotLoc = low;
            let pivotVal = array[high];
            for (let i = low; i< high; i++) {
                if (array[i] < pivotVal) {
                    [array[i], array[pivotLoc++]] = [array[pivotLoc], array[i]];
                }
            }
            [array[high], array[pivotLoc]] = [array[pivotLoc], array[high]];

            return pivotLoc;
        }

        function qSort(low = 0, high = (array.length - 1)){
            if (low >= high) return;
            let pivotLoc = partition(low, high);
            console.log("PivotLoc : " + pivotLoc);
            qSort(low, pivotLoc - 1);
            qSort(pivotLoc + 1, high);
        }

        qSort();
    }


}

let arr = [5, 6,1,4,2];

arr.quickSort();

console.log(arr);



