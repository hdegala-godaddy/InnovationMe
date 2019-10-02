/**
 * Module - controller handling all the Stream dummary view.
 * 
 * Handling Dynamic updation of streams when paginations right and left 
 * button triggered
 */
import CONSTANTS from "../Services/Constants";
import ErrorConstants from "../Services/ErrorConstants";
import HTMLUtils from "../Utils/HtmlUtils";
import COMMON_UTILS from "../Utils/CommonUtils";
import CommonUtils from "../Utils/CommonUtils";
import Stream_Api_Service from "../Services/Stream-API-Service";


const TOTAL_SUMMARY_ID = "#TotalSummmaryText";
const PAGINATION_SUMMARY_ID = "#pagination-text-id";
const STREAM_LIST_DIV = "#summary-item-details";
const LEFT_BTN_ID = "#PaginationLeftBtn";
const RT_BTN_ID = "#PaginationRightBtn";
const DECREMENT = "decrement";
const INCREMENT = "increment";

let errorMessageHandler = null;
let currentStream = null;
let queryString = '';

function updateTotalSummary(value) {
    let searchInputBox = document.querySelector(TOTAL_SUMMARY_ID);
    searchInputBox.innerText = CONSTANTS.TOTAL_STR + value;
}

function updatePaginationSummary(currentPage, totalPages) {
    let paginationLabel = document.querySelector(PAGINATION_SUMMARY_ID);
    paginationLabel.innerText = currentPage + "/" + totalPages;
}

/**
 * TODO: 
 * PENDING TODO:
 * we neede to recalculate on resize , and reduce depending on media size
 * 
 */
function getMaxVisibleStreams() {
    //Lets recalculate
    return 5;
}

/**
 * Function that acts on the stream update and then reflects 
 * the same on
 * Total
 * pagination
 * streams
 * @param {querystring to be stored} queryStr 
 * @param {response} modelResponse 
 */
function update(queryStr, modelResponse) {
    let { "_total": totalElements, streams } = JSON.parse(modelResponse);

    if (totalElements == null || totalElements == undefined) {
        errorMessageHandler(ErrorConstants.STREAM_RESPONSE_INVALID_TOTAL_VAL);
    }

    if (!streams) {
        errorMessageHandler(ErrorConstants.STREAM_RESPONSE_INVALID_STREAMARR);
    }
    queryString = queryStr;
    currentStream = streams;
    updateTotalSummary(totalElements);
    updatePaginationSummary(1, Math.ceil(totalElements / getMaxVisibleStreams()));
    updateStreamsOnScreen(streams);
}

function updateStreamsOnScreen(streams) {
    let parentElem = document.querySelector(STREAM_LIST_DIV);
    HTMLUtils.clearAllChildren(parentElem);
    if (!streams || !streams.length) {
        HTMLUtils.createTextNodeOn(parentElem, CONSTANTS.NO_ITEMS_TO_DISPLAY, "2em");
    } else {
        let maxVisibleStreams = getMaxVisibleStreams();
        for (let i = 0; i < maxVisibleStreams; i++) {
            HTMLUtils.createNewStreamComponent(parentElem, streams[i]);
        }
    }
}

function getPaginationDetails() {
    let paginationLabel = document.querySelector(PAGINATION_SUMMARY_ID);
    return paginationLabel.innerText.split("/");
}

/**
 *  Handling Dynamic updation of streams when paginations right and left 
 * button triggered
 * Taking boundary as 100 , so 5 streams per page 20 pages is the boundary
 * @param {*} operation 
 */

function handlePaginationAction(operation) {
    let [currentPage, totalPages] = getPaginationDetails();
    let currentPageVal = Number.parseInt(currentPage);
    if ((operation == DECREMENT && currentPageVal == 1) ||
        (operation == INCREMENT && currentPageVal == totalPages)) {
        //Nothing to be done
        return;
    }
    
    let newPageCnt = operation == INCREMENT ? currentPageVal + 1 : currentPageVal - 1;
    updatePaginationSummary(newPageCnt, totalPages);

    if (isBoundaryCrossed(operation, newPageCnt)) {
        console.log("Boundary crossed with pageCount : " + newPageCnt);
        let newQueryStr = formQueryStrWithOffset(operation, newPageCnt);

        Stream_Api_Service.fetchStreamDetails(newQueryStr).then((response) => {
            let { streams } = JSON.parse(response);
            currentStream = streams;
            updateStreamsOnScreen(streams);
        }, error => {
            console.log("Error : " + error);
            errorMessageHandler(error);
        });
    } else {
        let nearestStartIndex = ((newPageCnt - 1) % 20) * getMaxVisibleStreams();
        updateStreamsOnScreen(currentStream.slice(nearestStartIndex, nearestStartIndex + getMaxVisibleStreams()));
    }

}

function formQueryStrWithOffset(operation, newPageCnt) {
    let offSetVal = operation == DECREMENT ? (newPageCnt * 5 - 100) : (newPageCnt - 1) * 5;
    let newQueryStr = queryString;
    if (offSetVal) { // if offset != 0;
        let offSetStr = "offset=" + offSetVal;
        newQueryStr = newQueryStr ? (newQueryStr + "&" + offSetStr) : offSetStr;
    }
    return newQueryStr;
}

function isBoundaryCrossed(operation, newPageCnt) {
    return ((operation == DECREMENT && newPageCnt % 20 == 0) ||
        (operation == INCREMENT && (newPageCnt - 1) % 20 == 0));
}

function init(errorMsgHandler) {

    let paginationLeftBtn = document.querySelector(LEFT_BTN_ID);
    paginationLeftBtn.addEventListener('click', event => handlePaginationAction(DECREMENT));

    let paginationRtBtn = document.querySelector(RT_BTN_ID);
    paginationRtBtn.addEventListener('click', event => handlePaginationAction(INCREMENT));

    updateTotalSummary(0);
    updatePaginationSummary(0, 0);
    errorMessageHandler = errorMsgHandler;
}
export default {
    init,
    update
}