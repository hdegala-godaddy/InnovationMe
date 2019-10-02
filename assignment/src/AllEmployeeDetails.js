import React,{useState, useEffect} from "react";
import EmpFetchService from "./EmpFetchService";

function AllEmployeeDetails(){
    let [totalEmpCount, setTotalEmpCount ] = useState(0);
    let [empTreeJson, setEmpTreeJson] = useState(null);

    
    // setTimeout(() => {
    //     setTotalEmpCount(totalEmpCount+1);
    // }, 100);

    console.log("Calling Fetch service");
    let empID = 1;
    //let empTreeJson = null;
    //This could actually passed in as an component callback.

    let callBackCallForUpdate = (list) => {
        setTotalEmpCount(list.size);
    }
    

    useEffect(() => {
         EmpFetchService.initEmpId(empID)
         EmpFetchService.initCallBack(callBackCallForUpdate);
         EmpFetchService.fetchAndFillEmpDetails(empID).then((employeeListMap) => {
           setTotalEmpCount(employeeListMap.size);
           
         });
    }, [empID]);
    
    let showTotalJson= () => {
        setEmpTreeJson(JSON.stringify(EmpFetchService.getJson()));
    }


    return <div>
       {totalEmpCount}
       <button onClick={()=> showTotalJson()} >
           show showTotalJson</button>
           <br/>
           <textarea style={{ margin:'40px', border: "2px solid blue", font:"15px"}} value={empTreeJson}></textarea>
    </div>;
}

export default AllEmployeeDetails;