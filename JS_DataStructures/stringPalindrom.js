

function isStringPalindrome(sourceStr) {

    if (!sourceStr || sourceStr.length < 0){
        return false;
    }

    const length = sourceStr.length;
    for (let index = 0; index < (length / 2); index++) {
        if (sourceStr.charAt(index) != sourceStr.charAt(length -1 - index)) {
            return false;
        }
    }
    return true;
}


console.log(isStringPalindrome("HARAHS"));


