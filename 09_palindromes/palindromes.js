const palindromes = function (text) {

    text = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    /*

    The regex basically means that remove all non alpha characters

    ^ is the same as not ! and [a-zA-Z] lowercase and uppercase letters of the alphabet
    
    in pseudo it would mean: replace characters not included in the dataset[].

    */
    // console.log(text);
    let textEnd = text.length - 1;
    
    for(let i = 0; i < text.length / 2; i++){
        
        if(text[i] !== text[textEnd - i]){
            
            return false;
        }
    }

    return true;
};

// console.log(palindromes("r3ace3car"));
// Do not edit below this line
module.exports = palindromes;
