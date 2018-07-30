/**
 * @param {number[]} nums
 * @return {boolean}
 */
let PredictTheWinner = function (nums) {
	let totalSumArray = {};

	let totalSum = function (nums, start, end) {
		let key = start + " " + end;
		if (totalSumArray[key]) {
			return totalSumArray[key];
		}
		let sum = 0;
		for (let i = start; i <= end; i++) {
			totalSumArray[key] = nums[start] + totalSum(nums, start + 1, end);
		}
		totalSumArray[key] = sum;
		return totalSumArray[key];
	}

	let greatestSumOfRemaining = {};

	let greatOfSumOfRemaining = function (nums, start, end) {
		let key = start + " " + end;

		if (end - start == 1) {
			let retVal = nums[start] > nums[end] ? nums[start] : nums[end];
			return retVal;
		}
		else {
			let totalSumStart = totalSum(nums, start + 1, end);
			let totalSumEnd = totalSum(nums, start, end - 1);
			let greatSumRemainingOfStart = greatOfSumOfRemaining(nums, start + 1, end)
			let sumOfMaxStart = nums[start] + (totalSumStart - greatSumRemainingOfStart);
			let sumOfMaxEnd = nums[end] + (totalSumEnd - greatOfSumOfRemaining(nums, start, end - 1));
			greatestSumOfRemaining[key] = sumOfMaxStart > sumOfMaxEnd ? sumOfMaxStart : sumOfMaxEnd;
			return greatestSumOfRemaining[key];
		}
	}

	if (nums.length <= 2) {
		return true;
	}
	console.log("Main Array : " + nums);
	let totalSumUntilNow = totalSum(nums, 0, nums.length - 1);
	let totalSumUntilNumWithout0 = totalSum(nums, 1, nums.length - 1);
	let totalSumUntilNumWithoutN = totalSum(nums, 0, nums.length - 2);

	let greatSumIFITAKE0 = greatOfSumOfRemaining(nums, 0, nums.length - 1);

	console.log("greatSumIFITAKE0 : " + greatSumIFITAKE0);

	if (totalSumUntilNow / 2 <= greatSumIFITAKE0) {
		return true;
	}
	return false;
};

console.log(PredictTheWinner([1, 233, 7]));
console.log(PredictTheWinner([1, 5]));
console.log(PredictTheWinner([2, 4, 55, 6, 8]));


