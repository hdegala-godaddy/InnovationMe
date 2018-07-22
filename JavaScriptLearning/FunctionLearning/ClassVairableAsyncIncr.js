class AutoIncr{

    constructor(){
        this.value = 0;
    }

    incr(){
        this.value++;
    }
}

(function performIncr(){
    const autoIncr = new AutoIncr();
    const promisses = [];
    for (let i=0; i<2000; i++){
        let beforeVal = autoIncr.value;
        var promiss = new Promise((resolve, reject) => {
            setTimeout(((resolveFn) => {
                return () => {
                    autoIncr.incr();
                    //console.log(" Bofore Value : " + beforeVal + " AfterVal : " + autoIncr.value);        
                    resolveFn(autoIncr.value);
                }
               })(resolve)
               ,100);
        });

        setTimeout(() => {
            promiss.then(() => {
                console.log(" Bofore Value : " + beforeVal + " AfterVal : " + autoIncr.value);
            });
        }, 200);
        
    
        promisses.push(promiss);
    } 
    
    Promise.all(promisses).then(() => console.log(autoIncr.value));
    
})();
