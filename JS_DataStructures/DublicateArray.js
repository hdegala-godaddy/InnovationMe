
(function(){
    function findDublicates(arr){

        if (!arr || !arr.length){
            throw "Invalid argument";
        }

        let currentObj = {};
        let resultArr = [];
        for(let indx = 0;indx < arr.length; indx++){
            if (currentObj[arr[indx]]){
                resultArr.push(arr[indx]);
            }
            else{
                currentObj[arr[indx]] = 1;
            }
        }
        
        return resultArr;
    }

    console.log(findDublicates([1,1,2,3,4,5,3]))
    console.log(findDublicates([]))
})()
