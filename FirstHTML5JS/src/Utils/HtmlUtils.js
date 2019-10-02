/**
 * Module exposing HTML Dom related utility functions
 *  
 */


/**
 * Function to remove the specified element from the dom - tree
 * @param {element to be removed} selection 
 */
function remove(selection){
    selection.parentNode.removeChild(selection);
 }

 function showElement(elementSelector) {
     let element = document.querySelector(elementSelector);
     element.classList.remove("invisible");
 }

 function hideElement(elementSelector) {
    let element = document.querySelector(elementSelector);
    element.classList.add("invisible");
 }

 function enableButton(buttonSelector){
    let button = document.querySelector(buttonSelector);
    button.disabled = false;
 }

 function disableButton(buttonSelector){
    let button = document.querySelector(buttonSelector);
    button.disabled = true;
 }

 function createTextLabel(parentElm, message, className) {
    var newContentLabel = document.createElement("label");
    newContentLabel.innerText = message;
    newContentLabel.classList.add(className);
    parentElm.appendChild(newContentLabel); 
 }

 function isResolution(condition){
    let media =  window.matchMedia(condition);
    return media.matches;
 }

 function getCurrentResolution(){
    if (isResolution("(max-width: 640px)")) {
        return "XS";
    } else if(isResolution("(max-width: 800px)")) {
        return "MD";
    } else if(isResolution("(max-width: 1024px)")) {
        return "L";
    } else if(isResolution(("(max-width: 1280px)")))  {
        return "XL";
    }
    
    return "MD";
 }
 function getImageBasedOnResolution(previewList) {
    let imageSrc = null;
    switch (getCurrentResolution()) {
        case 'XS' :
            imageSrc = previewList.small;
            break;
        case 'MD':
            imageSrc = previewList.medium;
            break;
        case "L":
        case "XL":
            imageSrc = previewList.large;
            break;
    }

    let previewDef = previewList  && previewList.length ? previewList[0] : ''; 
    return imageSrc ? imageSrc : previewDef;
    
 }
 function createNewImageDiv(parentElm, model) {
    let newImageDiv = document.createElement("div");
    newImageDiv.classList.add("image-div");
    let newImage = document.createElement('img');
    newImage.src = getImageBasedOnResolution(model.preview);
    newImage.alt = "No image";
    newImage.classList.add("image");
    newImageDiv.appendChild(newImage);
    parentElm.appendChild(newImageDiv);
 }

 function crateMetaDataDiv(newItemDiv, model){
    let newMetadataDiv = document.createElement("div");
    newMetadataDiv.classList.add("item-metadata-div");
    
    createTextLabel(newMetadataDiv, model.channel.display_name, "metadata-display-name");
    createTextLabel(newMetadataDiv, "Game name - " + model.game, "metadata-game-name");
    let newDescriptionTextArea = document.createElement('textarea');
    newDescriptionTextArea.classList.add("metadata-description-textarea");
    newDescriptionTextArea.readOnly = true;
    newDescriptionTextArea.rows = 2;
    newDescriptionTextArea.cols = 40;
    newDescriptionTextArea.value = model.channel.description;
    newMetadataDiv.appendChild(newDescriptionTextArea);

    newItemDiv.appendChild(newMetadataDiv);
 }
 function createNewStreamComponent(parentElm, model){
    let newItemDiv = document.createElement("div");
    newItemDiv.classList.add("item-class");

    createNewImageDiv(newItemDiv, model);
    crateMetaDataDiv(newItemDiv, model);
    
    
    parentElm.appendChild(newItemDiv); 
 }

 function clearAllChildren(parentElm){
    while (parentElm.firstChild) {
        parentElm.removeChild(parentElm.firstChild);
    }
 }

 export default {
     remove,
     showElement,
     hideElement,
     enableButton,
     disableButton,
     createNewStreamComponent,
     createTextNodeOn: createTextLabel,
     clearAllChildren
 }