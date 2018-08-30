(function(){
    function quickSort(arr,low,high){
        if (high - low <= 1){
            return;
        }
        if (high - low === 1){
            arr[low] > arr[high] ? swap(arr,low,high) : "";
            return;
        }
        let pivotLoc = partition(arr, low, high);
        quickSort(arr,low,pivotLoc -1);
        quickSort(arr,pivotLoc +1 , high);
        return arr;
    }

    function swap(arr , loc1, loc2){
        const temp = arr[loc1];
        arr[loc1] = arr[loc2];
        arr[loc2] = temp;
    }

    function partition(arr, low, high){
        let pivotLoc = Math.floor((low + high) / 2);
        const pivotVal = arr[pivotLoc];
        swap(arr,pivotLoc, high);
        let lowIndx = low -1;
        let highIndx = high ;
        while (lowIndx < highIndx){
            while (arr[++lowIndx] < pivotVal)
                ;

            while (arr[--highIndx] > pivotVal)
            ;

            if (lowIndx < highIndx){
                swap(lowIndx,highIndx)
            }
        }
        if (lowIndx < high){
            swap(arr, high, lowIndx);
        }
        return lowIndx;
    }


    console.log(quickSort([2,3,4],0,2));
    let arr2 = [12,32,24,21,424,42,2,3,4];
    console.log(quickSort(arr2,0, arr2.length - 1));


})()



