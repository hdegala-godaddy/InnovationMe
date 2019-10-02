import ThresholdFetchService from './ThresholdFetchService';


function Node(empDetails){
    if (!empDetails)
        return null;

    let obj = {};
    obj[empDetails.name] = {
        'id' : empDetails.id,
        'reports' : []
    };
    return obj;
}

class EmployeeFetchService{

    constructor(empId, callBack){
        //this.empTree = new Map();
        this.empIDToTreeNodeMap = new Map();
        this.initialEmpId = empId;
        this.callBack = callBack;
    }

    initEmpId(empID) {
        this.initialEmpId = empID;
    }

    initCallBack(callBack) {
        this.callBack = callBack;
    }

    insertIntoTree(parentEmpId,parentName, empId,node){
        
        this.empIDToTreeNodeMap.set(empId, node);
        if (parentEmpId) {
            let parentNode = this.empIDToTreeNodeMap.get(parentEmpId);
            parentNode[parentName].reports.push(node);
        }
    }

    async fetchAndFillEmpDetails(empId = this.initialEmpId, parentEmpId = null, parentName=''){

        try {
            let empDetails = await ThresholdFetchService.fetch(empId);
            let treeNode = new Node(empDetails);
            this.insertIntoTree(parentEmpId, parentName, empId, treeNode);
            this.callBack(this.empIDToTreeNodeMap);
            
            empDetails.reports.forEach((id) => {
                if (!this.empIDToTreeNodeMap.has(id)) {
                    this.fetchAndFillEmpDetails(id,empId, empDetails.name);
                }
            });

            

        } catch(excp) {
           // alert(excp);
           console.log(excp);
        }

        return this.empIDToTreeNodeMap;
    }

    getJson(){
        return this.empIDToTreeNodeMap.get(this.initialEmpId);
    }
}

let EmpFetchService = new EmployeeFetchService();

export default EmpFetchService;




