
console.log("evber");
function fibonnaci(n) {

    if (n <= 2) {
        return 1;
    }
    let prev = curr = 1;
    
    for (var i=3;i<=n;i++){
        console.log(curr);
        let fib = curr + prev;
        prev = curr;
        curr = fib;
    }

    return curr;

}

console.log(`Here it is ${fibonnaci(5)}`);
