const fibonacci = function(n) {
    n = +n;

    if(n < 0) return "OOPS";

    //0 1 1 2 3 5
    
    let a = 0;
    let b = 1;
    let c = 0;

    for(let i = 0; i < n; i++){
        
        c = a + b;
        a = b;
        b = c;

    }
    
    return a;
};


// Do not edit below this line
module.exports = fibonacci;
