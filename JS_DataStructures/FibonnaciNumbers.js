(function(){
    let fibNumber = {};

    function fibnaciNumber(n){
        if (!!fibNumber[n]){
            return fibNumber[n];
        }    
        
        if (n <= 1 ){
            return 1;
        }
        fibNumber[n] = fibnaciNumber(n-1) + fibnaciNumber(n -2);

        return fibNumber[n];
    }

    console.log(fibnaciNumber(10));
})();




