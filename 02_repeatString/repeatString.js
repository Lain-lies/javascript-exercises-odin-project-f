const repeatString = function(text, n) {
    
    if(!n){
        
        return "";
        
    }else if (n <= -1){
        
        return "ERROR";

    }
    
    textCopy = text;
    n = n - 1; // first copy is considered as first iteration

    for(let i = 0; i < n; i++){
        
        text += textCopy;
    }

    return text;
};

// Do not edit below this line
module.exports = repeatString;
