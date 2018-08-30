(function () {

   
    function maxWaterVolume(arr) {

        if (!arr || !arr.length || arr.lenght < 2 ){
            return 0;
        }
        // let maxValueLeftToRight = -1;
        // let maxLToRIndx = -1;
        // let maxRToLIndx = -1;
        // let maxValueRightToLeft = -1;

        let product = 0;
        let firstElem = {"val" : 0, "indx":-1};
        let secondElem = {"val" : arr[0], "indx":0};
        for (let indx = 1; indx < arr.length; indx++) {
            const newElem = {"val": arr[indx], "indx" : indx};
            let firstProd = findProduct(firstElem, newElem);
            let secProd = findProduct(secondElem, newElem);

            if (firstProd > product && firstProd > secProd){
                product = firstProd;
                secondElem = newElem;
            }
            else if (secProd > product && secProd > firstProd){
                product = secProd;
                firstElem = newElem;
            }
            else if (firstProd === product){
                secondElem = newElem;
            }



            



            // const elmValLeftToRight = arr[indx] - indx;
            // const elmValRightToLeft = arr[arr.length - indx - 1] - indx;
            // if (maxValueLeftToRight < elmValLeftToRight && indx != maxRToLIndx) {
            //     maxValueLeftToRight = elmValLeftToRight;
            //     maxLToRIndx = indx;
            // }
            // if (maxValueRightToLeft <= elmValRightToLeft && (arr.length - 1 - indx) != maxLToRIndx) {
            //     maxValueRightToLeft = elmValRightToLeft;
            //     maxRToLIndx = arr.length - indx - 1;
            // }
        }

        //return Math.min(arr[maxLToRIndx], arr[maxRToLIndx]) * Math.abs(maxLToRIndx - maxRToLIndx);
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



