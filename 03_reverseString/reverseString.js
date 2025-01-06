const reverseString = function(text) {

    let lastIndex = text.length - 1;
    let reversedStringContainer = "";
    
    for(let i = lastIndex; i >= 0; i--){
        
        reversedStringContainer += text[i];

    }

    return reversedStringContainer;
};

// Do not edit below this line
module.exports = reverseString;
