//OOPS - Object Oriented Programming in JavaScript - it relies on objects to structure code -reusable, maintainable, and scalable applications 
//Encapsulation - Hiding internal details and exposing only necessary parts.
//Abstraction - Hiding complex logic and exposing only essential features.
//Inheritance - Creating new classes from existing ones.
//Polymorphism - A single behaves differently based on the object.

const car = {
    Brand: "Teslaa",
    model: "Model X",
    Start: function () {
        console.log(this.Brand + " " + "is starting...") //this keyword refers to the current object.
    }
};
car.Start();

//Constructor Function - A constructor function acts as a blueprint for multiple objects.


const tatkalBook = new Promise ((resolve, reject) => {
    let Bookingsuccess = true
    if (Bookingsuccess)
        resolve(850)
    else
        reject()
    
})
tatkalBook.then((amt) => console.log(`Thankyou Buddy! I will sent you ${amt}`));
tatkalBook.catch(() => console.log("Thanks for trying. I'll book a bus"));

//comment

//multiple promises
let reachA = new Promise((resolve, reject) => {
    const reached = true
    if(reached)
        setTimeout(resolve, 1000, "Ramya reached")
    else
        reject("Ramya not reached")
})
let reachB = new Promise((resolve, reject) => {
    const reached = true
    if(reached)
        setTimeout(resolve, 1000, "Vidhya reached")
    else
        reject("Vidhya not reached")
})
let reachC = new Promise((resolve, reject) => {
    const reached = true
    if(reached)
        setTimeout(resolve, 1000, "Maya reached")
    else
        reject("Maya not reached")
})

// Promise.all([reachA, reachB, reachC]); //promiseall
// .then((message) => console.log(message))
// .catch((message) => console.log(message));

Promise.allSettled([reachA, reachB, reachC]); //promiseallsettled //promise.any
.then((message) => console.log(message))
.catch((message) => console.log(message));

//largest number in Array //Math.max() returns the largest number
function findLargest(arr) {
    return Math.max(...arr);//...arr (spread operator) expands the array into individual numbers
}
console.log(findLargest([10, 20, 30, 40, 50, 100]));
console.log(findLargest([2, 3, 5, 10, 15]));

//method 2 loop method
function findLargest(arr) {
    let max = arr[0];

    for (let num of arr) {
        if (num > max) {
            max = num;
        }
    }
    return max;
}
console.log(findLargest([10,20,59,99,32]));

//find duplicate character
function duplicateCharacters(str){
    let charCount = {}
    let duplicates = []

    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (let char in charCount) {
        if (charCount[char] > 1) {
            duplicates.push(char);
        }
    }
    return duplicates;
}
console.log(duplicateCharacters("JavaScript"));
console.log(duplicateCharacters("Mississippi"));
console.log(duplicateCharacters("Hello World"));

//reverse character
const reverseCharacters = str => [...str].reverse().join("");
console.log(reverseCharacters("Mississippi"));

const reverseChar = str => [...str].reverse().join("");
console.log(reverseChar("JavaScript"));

function reversecharacter(str) {
    return str.split("").reverse().join("");
}
console.log(reversecharacter("Monisha"));

//Reverse number
function reverseNumbers(num) {
    return parseInt(num.toString().split("").reverse().join("")) * Math.sign(num);

}
console.log(reverseNumbers(123456789));
//comment
