var totalSumArray = []
var totalSum  = function(nums,start, end){
    var key = start + " " + end;

    if ( totalSumArray[key]){
        return totalSumArray[key];
    }

    if (start == end){
        return nums[start];
    }
        totalSumArray[key] = nums[start] + totalSum(nums, start+ 1, end);   
   
    return totalSumArray[key];

}


console.log(totalSum([2,34,1,89], 0 , 3));