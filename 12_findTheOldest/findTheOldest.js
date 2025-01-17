// const people = [
//     {
//       name: "Carly",
//       yearOfBirth: 1942,
//       yearOfDeath: 1970,
//     },
//     {
//       name: "Ray",
//       yearOfBirth: 1962,
//       yearOfDeath: 2011,
//     },
//     {
//       name: "Jane",
//       yearOfBirth: 1912,
//       yearOfDeath: 1941,
//     },
// ];

const findTheOldest = function(people) {

    let oldestFirst = people.sort((currentPerson, nextPerson) => {

        
        if(typeof currentPerson.yearOfDeath === "undefined" && typeof nextPerson.yearOfDeath === "undefined"){
            
            return currentPerson.yearOfBirth < nextPerson.yearOfBirth ? -1 : 1;

        }else if(typeof currentPerson.yearOfDeath === "undefined" && typeof nextPerson.yearOfDeath === "number"){

            return currentPerson.yearOfBirth < nextPerson.yearOfBirth ? -1 : 1;

        }else if(typeof currentPerson.yearOfDeath === "number" && typeof nextPerson.yearOfDeath === "undefined"){

            return currentPerson.yearOfBirth < nextPerson.yearOfBirth ? -1 : 1;

        }

        let currentPersonAge = currentPerson.yearOfDeath - currentPerson.yearOfBirth;
        let nextPersonAge = nextPerson.yearOfDeath - nextPerson.yearOfBirth;

        return currentPersonAge > nextPersonAge ? -1 : 1;

    })
    
    console.log(oldestFirst);

    return oldestFirst[0];
};

// console.log(findTheOldest(people));

// Do not edit below this line
module.exports = findTheOldest;
