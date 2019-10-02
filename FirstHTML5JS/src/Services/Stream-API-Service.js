/**
 * Service file to fetch the back-end data 
 * Using XMLHttpRequest.
 * Uses cache store internally,
 * 
 */
import ERROR_CONSTANTS from "./ErrorConstants";
import CONSTANTS from "./Constants";
import CACHE_STORE from  "./CacheStore-Service";

const CLIENT_ID = "421m3knuxm4kvefe5fbv4z0g86pwgr";

/**
 * Givem query string, this function fetches all the StreamDetails
 *  
 */
function fetchStreamDetails(queryString ){

    console.log(`QueryString ${queryString}`);
    if (!queryString || queryString.indexOf('limit=') == -1){
        queryString = queryString ? queryString + '&limit=100' : 'limit=100';
    }
    return new Promise((resolve, reject) => {
        const url = `https://api.twitch.tv/kraken/streams/?${queryString}`;
        let  cached_content = CACHE_STORE.getStreamObjects(url)
        if (cached_content) {
            resolve(cached_content)
        } else {
            getFromBackEnd(resolve,reject, url);
        }
    });
    
}

function getFromBackEnd(resolve, reject, url) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                console.log(this.responseText);
                CACHE_STORE.storeStreamObjects(url,this.responseText);
                resolve(this.responseText);
            }
            else {
                console.log("XMLHttp Req Error ", this.response);
                reject({msg : JSON.stringify(this.response)});
            }
        }
    };
    
    request.open('GET', url, true);
    request.setRequestHeader("Accept", "application/vnd.twitchtv.v5+json");
    request.setRequestHeader("Client-ID", "421m3knuxm4kvefe5fbv4z0g86pwgr");
    request.send(null);
}


/**
 * init function : right now initializes the cache store
 */
function init(){
    CACHE_STORE.init(100,1000);
}

export default {
   init,
   fetchStreamDetails
}