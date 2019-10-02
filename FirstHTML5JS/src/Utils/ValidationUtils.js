/**
 * Common utility module to parse and validate incoming and outgoing arguments of a service.
 * 
 * Making modular so as enable writing UnitTests easily.
 */
import ERROR_CONSTANTS from "../Services/ErrorConstants";
import CONSTANTS from "../Services/Constants";

/**
 * Function to validate the query string. 
 * The query strings can be a cobination of two query strings,
 * queryString should be in the format of 
 *  {queryParam1}={queryValue1}&{queryParam2}!={queryValue2}.
 * So split on the basis of '&' and then validate each queryParam
 * 
 * Please refer to the documentation of https://dev.twitch.tv/docs/v5/reference/streams/
 * of possible values for queryParam and valid values of queryValue
 * 
 * @argument queryString s: can be null or empty, 
 * but if present should adhere to above requirement
 * 
 * @returns object: {
 *                      valid : boolean,
 *                      errMsg : string
 *                  }
 */

function validateQueryString(queryStrings) {

    if (queryStrings) {
        
        if (queryStrings.indexOf("=") == -1) {
            return INVALID(ERROR_CONSTANTS.QUERY_STRING_WITHOUT_EQUAL);
        }
        let queryStringsArr = queryStrings.split('&');

        //Itterate through each queryString
        for (let queryString of queryStringsArr) {

            //IF queryString contains more than one ='s
            if (queryString.indexOf("=") != queryString.lastIndexOf("=")){
                return INVALID(ERROR_CONSTANTS.QUERY_INVALID_NUMBEROF_EQUALS);
            }

            //Validate if value is present
            let [queryParam, queryValue] = queryString.split("=");
            if (!queryValue || !queryValue.length) {
                return INVALID(ERROR_CONSTANTS.QUERY_STRING_WITHOUT_VAL);
            };

            switch (queryParam) {
                case CONSTANTS.CHANNEL_STR:
                    //Check if all channels are inegers or not
                    let failureChnl = queryValue.split(",").find(item => Number.parseInt(item) + '' != item);
                    if (failureChnl) {
                        return INVALID(ERROR_CONSTANTS.QUERY_INVALID_CHANNEL_NUMBER + failureChnl);
                    }
                    break;
                case CONSTANTS.GAME_STR :
                case CONSTANTS.LANGUAGE_STR:
                    //Nothing to validate for queryValue
                    break;
                case CONSTANTS.LIMIT_TO :
                    if (Number.parseInt(queryValue) + '' != queryValue + '') {
                        return INVALID(ERROR_CONSTANTS.QUERY_INVALID_LIMIT_TO_PASSED);
                    }
                    break;
                case CONSTANTS.STREAM_TYPE :
                    let valuesArr = ["live", "playlist", "all"];
                    if (!valuesArr.find(item => item === queryValue)) {
                        return INVALID(ERROR_CONSTANTS.QUERY_INVALID_STREAM_TYPE);
                    }
                    break;
                default :
                    //Note not allowing offset and other values, as offset is only used
                    //for pagination
                    console.log("Unmatched queryParam");
                    return INVALID(ERROR_CONSTANTS.QUERY_INVALID_QUERY_PARAM);
                    break;
            }
        }

    }

    return {
        valid: true
    };
}

function INVALID(errMsg) {
    return {
        valid: false,
        errMsg
    };
}

export default {
    validateQueryString
}

