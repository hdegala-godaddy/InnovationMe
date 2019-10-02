
(function(){

    function isPrime(n) {
        let sqrt = Math.round(Math.sqrt(n));
        for (let i = 2; i<= Math.sqrt(n); i++) {
            if (n % i === 0) {
                console.log("isPrime for:  " + n + " i : " + i);
                return false;
            }
        }

        return true;
    }
    function findPrime(n) {
        let allPrimes = [];
        for (let i = 0; i<= n; i++) {
            if (isPrime(i)) {
                allPrimes.push(i);
            }
        }
        return allPrimes;
    }

    console.log(findPrime(13));
})();


