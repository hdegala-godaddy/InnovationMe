//export {recursiveSum , itterativeSum};


function recursiveSum(n){
    if (n == 0){
        return 0;
    }
    return n + recursiveSum(n - 1);
}

function itterativeSum(n){
    let sum = 0;
    for (let count = 0; count <=n; count++){
        sum += count;
    }
    return sum;
}


var t0 = typeof(window) == 'undefined'? window.performance.now() : new Date().getTime();
console.log(itterativeSum(10000));
var t1 = typeof(window) == 'undefined' ? window.performance.now() : new Date().getTime();
console.log("Time taken for itterative Algo : " + (t1 - t0));
console.log(recursiveSum(10000));
var t2 = typeof(window) == 'undefined'? window.performance.now() : new Date().getTime();


console.log("Time taken for recursive Algo : " + (t2 - t1));

