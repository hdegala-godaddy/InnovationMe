import CONSTANTS from "./Services/Constants";

function init(){
    console.log(`searching  for ${CONSTANTS.MAIN_ELEMENT_ID}`);
    let parentElement = document.querySelector(CONSTANTS.MAIN_ELEMENT_ID);
    parentElement.innerHTML = "Welcome Harsha";
}

export default {
    init
}