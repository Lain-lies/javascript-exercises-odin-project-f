const sumAll = function(start, end) {

    if (start < 0 || end < 0){

        return "ERROR";

    }else if(start > Math.trunc(start) || end > Math.trunc(end)){

        return "ERROR";

    }else if(typeof start !== 'number'  || typeof end !== 'number'){

        return "ERROR";

    }
    
    let i = start; 
    let limit = end;

    if(start > end){
        
        i = end;
        limit = start;
    }

    let sum = 0;

    for(;i <= limit; i++) sum += i;

    return sum;

};

console.log(sumAll(5, 1));
// Do not edit below this line
module.exports = sumAll;
