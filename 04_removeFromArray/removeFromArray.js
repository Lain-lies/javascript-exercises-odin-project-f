const removeFromArray = function(...args) {

    const originalList  = args.shift();
    const removalList = args;

    const newList = [];
    let elementsToBeRemoved = [];

    for(let i = 0; i < removalList.length; i++){
        
        for(let j = 0; j < originalList.length; j++){

            if (removalList[i] === originalList[j]){
                
                elementsToBeRemoved.push(j);
            }

        }
    }

    outer:
    for(let i = 0; i < originalList.length; i++){

        for(let j = 0; j < elementsToBeRemoved.length; j++){

            if (i === elementsToBeRemoved[j]){
                
                continue outer;

            }
        }

        newList.push(originalList[i]);
   
    }
    
    return newList;
};

// Do not edit below this line
module.exports = removeFromArray;
