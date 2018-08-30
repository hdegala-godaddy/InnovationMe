// function braces(values) {

//     let arrayList = [];
    
//     values.forEach((value) => arrayList.push(mapBraces(value)));
    
    

// }

function mapBraces(bracesString1){
    const bracesPair = {
        "}" : "{",
        "]" : "[" ,
        ")" : "("
    }
    let braceMap = [];
    let bracePairKeys = [ "}", "]", ")"];
    let bracesString = bracesString1.split("");
    for (let i=0;i<bracesString.length;i++){
        if (bracePairKeys.indexOf(bracesString[i]) >= 0){
            if (braceMap.pop() != bracesPair[bracesString[i]]){
                return false;    
            }
        } else {
            braceMap.push(bracesString[i]);  
        } 
    }
    
    return braceMap.length === 0 ? true: false;
    
} 

console.log(mapBraces("{()}"));