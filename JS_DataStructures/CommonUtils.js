module.exports.CustomException = class CustomException extends Error{
    
        constructor(errMsg, errCode){
            super(errMsg);
            this.code = errCode;
        }
    
        printException(){
            console.log(" Err : " + JSON.stringify(this));
        }
};