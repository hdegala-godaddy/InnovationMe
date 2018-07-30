class InternalCall {

    constructor() {
        this.instVar = 100;
        this.clickCallBack2 = (evt) => this.clickCallBack(evt);
        
    }

    clickCallBack(evt) {
        let thisVar = JSON.stringify(this);
        alert("In to the call back: " + thisVar);
    }

}

let internalCallInst = new InternalCall();

alert("In to the call back: " + internalCallInst.instVar);

var clickCB_OldFunction = internalCallInst.clickCallBack;
var clickCB_FatArrow = internalCallInst.clickCallBack2;

let divForCB2 = document.querySelector("#callBackArrow2");

divForCB2.addEventListener("click", internalCallInst.clickCallBack2);


    //alert("In First to the call back: " + clickCB);