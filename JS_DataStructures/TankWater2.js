
(function () {
    
       
        function maxWaterVolume(arr) {
    
            if (!arr || !arr.length || arr.length < 2 ){
                return 0;
            }
            // let maxValueLeftToRight = -1;
            // let maxLToRIndx = -1;
            // let maxRToLIndx = -1;
            // let maxValueRightToLeft = -1;
    
            let product = 0;
            let optimalLowIndx = 0;
            let optimalHighIndx = 0;
            for (let lowIndx = 0, highIndx=arr.length -1; lowIndx < highIndx; ) {

                 product = Math.max(product, Math.min( arr[lowIndx], arr[highIndx]) * (highIndx - lowIndx));

                 if (arr[lowIndx] <= arr[highIndx]){
                     highIndx--;
                 } else {
                     lowIndx++;
                 }
                


                // let currentProd = Math.min(arr[lowIndx],arr[highIndx]) * (highIndx - lowIndx);
                // if (currentProd > product){
                //     product = currentProd;
                //     optimalLowIndx = lowIndx;
                //     optimalHighIndx = highIndx;
                //     if (arr[lowIndx] < arr[highIndx]){
                //         lowIndx++;
                //     }
                //     else{
                //         highIndx--;
                //     }
                // } 
                // else{
                //     if ( != highIndx){
                //         highIndx--;
                //     }
                //     else{
                //         lowIndx++;
                //     }
                // }
            }
    
            return product;
    
        }
    
        function findProduct(obj1,obj2) {
            return Math.min(obj1.val,obj2.val) * (obj2.indx - obj1.indx); 
        }
    
        // console.log(findProduct({"val" : 10, "indx":-4}, {"val" : 1, "indx":5}));
        // console.log(findProduct({"val" : 10, "indx":4}, {"val" : 1, "indx":5}));
        // console.log(findProduct({"val" : 10, "indx":1}, {"val" : 12, "indx":5}));
    
        console.log(maxWaterVolume([1,8,6,2,5,4,8,3,7]));
        console.log(maxWaterVolume([0,2]));
        console.log(maxWaterVolume([2,3,10,5,7,8,9]));
    
    })();