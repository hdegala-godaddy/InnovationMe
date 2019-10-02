import React,{useState, useEffect} from "react";
import EmpFetchService from "./EmpFetchService";

function AllEmployeeDetails(){
    let [totalEmpCount, setTotalEmpCount ] = useState(0);

    
    // setTimeout(() => {
    //     setTotalEmpCount(totalEmpCount+1);
    // }, 100);

    console.log("Calling Fetch service");
    let empID = 1;
    useEffect(() => {
        let empFetchService = new EmpFetchService(empID);
        empFetchService.fetchAndFillEmpDetails(empID).then((employeeListMap) => {
           setTotalEmpCount(employeeListMap.size);
         });
    }, [empID]);
    

    return <div>
       {totalEmpCount}
    </div>;
}

export default AllEmployeeDetails;