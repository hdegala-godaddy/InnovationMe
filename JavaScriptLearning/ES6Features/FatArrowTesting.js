class CallBack {

    constructor() {
        this.newFunc = function() {
            console.log("Harsha")
            console.log(this);
        };
    }
    oldFunc() {
        console.log(this);
    }


}

console.log("Harsha:");


const obj = new CallBack();
//printCnsl();
//const arr = [23,43];

console.log(obj);
const btn = document.querySelector("#test");
//btn.addEventListener('click', obj.oldFunc);

btn.addEventListener('click', obj.newFunc);