/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
	var totalSumArray = {};

	var totalSum  = function(nums,start, end){
			var key = start + " " + end;
			if ( totalSumArray[key]){
				return totalSumArray[key];
			}
			var sum = 0;
			for (var i=start; i<= end; i++){
				//Make this recursive to reduce bigO
				totalSumArray[key] = nums[start] + totalSum(nums, start+ 1, end);   
				//sum += nums[i]; 
			}
	
			totalSumArray[key] = sum;
	
			return totalSumArray[key];
	
		}
	
		var greatestSumOfRemaining = {};
	
		var greatOfSumOfRemaining = function(nums, start, end){
			var key = start + " " + end;
			
			// if (greatestSumOfRemaining[key]){
			// 	return greatestSumOfRemaining[key];        
			// }
	
			if (end - start == 1){
				var retVal = nums[start] > nums[end] ? nums[start] : nums[end];
				//console.log("GreatSumArray Key : " + key + " retVal : " + retVal);
				return retVal;
			}
			else{
				
				var totalSumStart = totalSum(nums, start+1, end);
				var totalSumEnd = totalSum(nums, start, end-1);

				var greatSumRemainingOfStart = greatOfSumOfRemaining(nums,start+1,end)	

				
				var sumOfMaxStart = nums[start] + (totalSumStart - greatSumRemainingOfStart);
				//console.log("key : " + key +" greatSumRemainingOfStart: " + greatSumRemainingOfStart + " totalSumStart: " + totalSumStart + " nums[start]: " + nums[start] + " sumOfMaxStart: " + sumOfMaxStart);
				var sumOfMaxEnd = nums[end] + (totalSumEnd - greatOfSumOfRemaining(nums,start,end-1));
				

				greatestSumOfRemaining[key] = sumOfMaxStart > sumOfMaxEnd ?  sumOfMaxStart : sumOfMaxEnd;
				// console.log("SumOfMaxStart for Key : " + key + " sum :" + sumOfMaxStart);
				// console.log("SumOfMaxEnd for Key : " + key + " sum :" + sumOfMaxEnd);
				// console.log("GreatSumArray Key : " + key + " retVal : " + greatestSumOfRemaining[key]);

				return greatestSumOfRemaining[key];
	
				// if ((sumOfMaxStart > totalSumUntilNow /2 ) ||
				// 		((sumOfMaxEnd) > totalSumUntilNow /2 )){  
				// 	greatestSumOfRemaining[key] = sumOfMaxStart > sumOfMaxEnd ?  sumOfMaxStart : sumOfMaxEnd;
				// 	return greatestSumOfRemaining[key];
				// }
				// else {
				// 	greatestSumOfRemaining[key] = -1;
				// 	return -1;
				// }
			}    
		}
	
		if (nums.length <= 2){
			return true;
		}
		console.log("Main Array : " + nums);
		var totalSumUntilNow = totalSum(nums, 0, nums.length-1);
		var totalSumUntilNumWithout0 = totalSum(nums, 1, nums.length -1);
		var totalSumUntilNumWithoutN = totalSum(nums, 0, nums.length -2);
		
		
		var greatSumIFITAKE0 =  greatOfSumOfRemaining(nums,0,nums.length - 1);
		// var greatSumIFITAKE0 =  totalSumUntilNow  - greatOfSumOfRemaining(nums,1,nums.length-1);
		// var greatSumIFITAKELEN = totalSumUntilNow - greatOfSumOfRemaining(nums,0,nums.length-2);

		console.log( "greatSumIFITAKE0 : " + greatSumIFITAKE0 );
		//console.log( greatSumIFITAKE0 +" " +greatSumIFITAKELEN);
		//console.log( greatSumIFITAKE0 +" " +greatSumIFITAKELEN);
		
		// console.log("Total Sum Array : " + JSON.stringify(totalSumArray));
		// console.log("GreatestSumOfRemaining : " + JSON.stringify(greatestSumOfRemaining));

		//console.log(greatSumIFITAKE0 + " " + greatSumIFITAKELEN);
//		 if (totalSumUntilNow / 2 < greatSumIFITAKE0 || totalSumUntilNow / 2 < greatSumIFITAKELEN){
		 if (totalSumUntilNow / 2 <= greatSumIFITAKE0){
			return true;
		}
		return false;
	};
	
	console.log(PredictTheWinner([1,233,7]));
	console.log(PredictTheWinner([1,5]));
	console.log(PredictTheWinner([2,4,55,6,8]));
	
	
