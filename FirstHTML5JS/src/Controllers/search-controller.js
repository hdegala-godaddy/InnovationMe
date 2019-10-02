/**
 * Module for handling search related behavior
 * For example :
 * Parsing the search string, 
 * Validation of search String etc.
 */
import Validator from '../Utils/ValidationUtils';
import HTML_Utils from "../Utils/HtmlUtils";
import Common_Utils from "../Utils/CommonUtils";


 const SEARCH_INPUTBOX_ID = "#SearchInputBox";
 const SEARCH_BUTTON_ID = "#SearchButton";
 const SEARCH_ERR_MSG_INPUT = "#SearchValidBox";

 let searchActionListeners = [];

 /**
  * input change handler on search box, this validates the input 
  * when key pressed on the 
  * 
  * @param {*} event 
  */
 let searchInputHandler =  function searchInputHandler(event) {
        if (event.type == 'keyup') {
          let inputBox = event.target;
          let {valid, errMsg} = Validator.validateQueryString(inputBox.value);
            if (valid){
                HTML_Utils.hideElement(SEARCH_ERR_MSG_INPUT);
                HTML_Utils.enableButton(SEARCH_BUTTON_ID);
            } else {
                showErrorMsg(errMsg);
            }
        } else  {
          
        }
    };

let showErrorMsg = function(errMsg){
    let searchValidBox = document.querySelector(SEARCH_ERR_MSG_INPUT);
    HTML_Utils.showElement(SEARCH_ERR_MSG_INPUT);
    HTML_Utils.disableButton(SEARCH_BUTTON_ID);
    searchValidBox.value = errMsg;  
}

let searchButtonHandler = function searchButtonHandler(event) {
    let searchInputBox = document.querySelector(SEARCH_INPUTBOX_ID);
    searchActionListeners.forEach((callBack) => {
        callBack(searchInputBox.value);
    });
}

 /**
  * Function to find the search element and then initialize the event handler
  * on the 
  * inputBox - register it with debounced version of action handler.
  * Search button.
  * 
  */
 function init(){
    
    let searchInputBox = document.querySelector(SEARCH_INPUTBOX_ID);
    searchInputBox.addEventListener('keyup', Common_Utils.debounce(function(event) {
        searchInputHandler(event);
        }, 100));

    let searchButton = document.querySelector(SEARCH_BUTTON_ID);
    searchButton.addEventListener('click', (event) => searchButtonHandler(event));

 }

 /**
  * Registration function for call-backs to be called 
  * @param {call-back function called when searchButton is pressed} searchActionListener 
  */
 function registerSearchCallBack(searchActionListener){
    if (!searchActionListener || typeof searchActionListener != 'function') {
        throw new TypeError("Invalid searchActionListener passed to registerSearchCallBack");
    }
    searchActionListeners.push(searchActionListener)
 }

 /**
  * Deregistering registered call-back
  */
 function deRegisterSearchCallBack(searchActionListener){
    let index = searchActionListeners.indexOf(searchActionListener);
    if (index != -1) {
        searchActionListeners.splice(index,1);
    }
 }

 export default {
     init,
     registerSearchCallBack,
     deRegisterSearchCallBack
 }