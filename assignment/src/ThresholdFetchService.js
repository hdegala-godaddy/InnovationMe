//Make sure that it is a SingleTon object by returing IFFE
let ThresholdFetchService = (function (){
    
    let threshold = 100;
    let pendingQ = []; // This should rather be a linkedlist, for o(1) retreival
    let currentRequestCount = 0;

    function fetch(empID){
        
        return new Promise((resolve, reject) => {
            if (currentRequestCount  < threshold){
                currentRequestCount++;
                //Here you need to make backend call
                setTimeout(() => handleFetchCalls(empID, resolve, reject), 100)
            } else {
                pendingQ.push({
                    empID,
                    resolve,
                    reject
                })
            }
        })
        
    }

    function handleFetchCalls(empID,resolve,reject){

        let report = [];

        for(let i =0 ; i < 2; i++) {
            report.push(empID*2 + i);
        }
        currentRequestCount--;
        callPendingQueue();
        resolve({
            id : empID,
            name : "XYZ " + empID,
            reports : empID > 200 ? [] :  report
        });
    }

    function callPendingQueue(){

        if (pendingQ.length > 1) {
            //This is an o(n) operation instead if we 
            //have used linked-list it could be 
            //o(1) operation.
            let latestReqObject = pendingQ.shift();
            //This is important as this should be done
            //in event-loop context, that would make sure that
            //this does not go for stack overflow
            currentRequestCount++;
            setTimeout(() => {
                handleFetchCalls(latestReqObject.empID, latestReqObject.resolve, latestReqObject.reject);
            },100)
        }

    }

    return {
        fetch
    }
})();


export default ThresholdFetchService;