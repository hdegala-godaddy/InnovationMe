/**
 * Log service module could actually be diverted to any file instead of console
 */


/**
 * 
 * @param {string to be logged} str 
 */
 function log(str){
    console.log(`DEBUG_LOG : ${str}`);
 }

 /**
 * 
 * @param {string to be logged} str 
 */
function error(str){
    console.error(`DEBUG_ERR : ${str}`);
 } 


export default {
    log ,
    error
}


