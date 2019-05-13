/**
 * File/Module which acts  as controller for the whole of the App.
 * 
 * This module is responsible for initializing whole of the app,
 * Especially does the following
 * registering the eventHandlers to DOM elements.
 * delegates actions to other element controllers
 * number of elements that can fit depending on screen-size
 */

import CONSTANTS from "../Services/Constants";
import SearchController from "./search-controller";
import Stream_Api_Service from "../Services/Stream-API-Service";
import SummaryController from "./summary-controller";
import ValidationUtils from "../Utils/ValidationUtils";
import HtmlUtils from "../Utils/HtmlUtils";

const MAIN_ELEMENT_ID =  "#ParentDiv";
const ERR_MSG_BTN = "#close-error-msg-button";
const ERR_MSG_TEXT_AREA = "#error-msg-id";
const ERR_MSG_TOASTER = "#error-toaster";

/**
 * The main init function, which calls init of all subcomponent controllers.
 */

function init(){
    console.log(`searching  for ${CONSTANTS.MAIN_ELEMENT_ID}`);    
    let parentElement = document.querySelector(MAIN_ELEMENT_ID);
    let errorMsgButton = document.querySelector(ERR_MSG_BTN);
    SearchController.init();
    SearchController.registerSearchCallBack(searchTriggerHandler);
    SummaryController.init();
    Stream_Api_Service.init();
    errorMsgButton.addEventListener('click', () => {
        HtmlUtils.hideElement(ERR_MSG_TOASTER);
    })
}

/**
 * Handler passed on to searchController, will be called whenever searchButton is pressed.
 * @param {*} queryString 
 */
function searchTriggerHandler(queryString){ 
    Stream_Api_Service.fetchStreamDetails(queryString).then((response) => {
        SummaryController.update(queryString, response);
        console.log();
    }, function errorFunction(error){
            console.log("Error : " + error);
            setErrorMessage(error.msg);
        });
}

/**
 * setErrorMessage used by this module as well as call back
 * whenever error message needs to be updates.
 * @param {error message to be displayed} errMsg 
 */
function setErrorMessage(errMsg) {
    let errMsgToaster = document.querySelector(ERR_MSG_TEXT_AREA);
    errMsgToaster.value = errMsg;
    HtmlUtils.showElement(ERR_MSG_TOASTER);
}

/**
 * PENDING , resize is not implemented in this version 
 */
function resize(){
    const SEARCH_INPUTBOX_ID = "#SearchInputBox";
    let searchInputBox = document.querySelector(SEARCH_INPUTBOX_ID);
    if (ValidationUtils.validateQueryString(searchInputBox.value)) {
        //searchTriggerHandler(searchInputBox.value);
    }
}
export default {
    init,
    resize
}