/**
 * Cache store for handling both lists and images.
 * 
 */

const IMAGE_STORE_KEY = "image-store";
const STREAM_STORE_KEY = "stream-store";

let localStore = null;
/**
 *  getLocalStore
 * 
 *  Normally wanted to use windows.localStorage, but because we need to stringify object to 
 * store in local storage I am using a map for now.
 */
function getLocalStore(){
    if (!localStore) {
        localStore = new Map();
    }

    return localStore; // incase want to use localStorage we can return localStorage.
}

 /**
  * LRU Cache for storing image URLS
  * 
  */
class LRUCache {

    constructor(cacheSize=100) {
        this.cacheSize = cacheSize;
        this.cacheStore = new Map();
    }

    get(key) {
        let item = this.cacheStore.get(key);
        if (item)
        {
            //delete from the store
            this.cacheStore.delete(key);
            this.cacheStore.set(key, item);
        }
        return item;
    }

    set(key, val) {
        if (this.cacheStore.has(key)) {
            //Delete the key to make it newest
            this.cacheStore.delete(key);
        } else if (this.cacheStore.size == this.cacheSize) {
            //delete the oldest
            this.cacheStore.delete(this.oldestKey());
        }
        this.cacheStore.set(key, val);
    }

    oldestKey(){
        //As maps maintains the order its just the first of the keys
        return this.cacheStore.keys().next().value;
    }
}

function storeStreamObjects(url, streamObjects) {
    let lruCache = getLocalStore().get(STREAM_STORE_KEY);
    lruCache.set(url,streamObjects);
}

function getStreamObjects(url) {
    let lruCache = getLocalStore().get(STREAM_STORE_KEY);
    return lruCache.get(url);
}

function getImage(url) {
    let lruCache = getLocalStore().get(IMAGE_STORE_KEY);
    return lruCache.get(url);
}

function setImage(url,image) {
    let lruCache = getLocalStore().get(IMAGE_STORE_KEY);

    if (!lruCache.get(url)) {
        lruCache.set(url,image);
    }
}

/**
 * 
 * @param {initialConfiguration for image cache} imageCacheSize 
 * @param {initialConfigureation for stream objects cache} streamLRUCacheSize
 */
function init(imageCacheSize = 200, streamCacheSize = imageCacheSize){
    let imageLRUCache = new LRUCache(imageCacheSize);
    let streamLRUCache = new LRUCache(streamCacheSize);
    getLocalStore().set(IMAGE_STORE_KEY, imageLRUCache);
    getLocalStore().set(STREAM_STORE_KEY, streamLRUCache);
}

export default {
    init,
    getStreamObjects,
    storeStreamObjects,
    getImage,
    setImage
}