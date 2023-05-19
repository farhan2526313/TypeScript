"use strict";
//  Arrow function 
Object.defineProperty(exports, "__esModule", { value: true });
let add = (a, b) => {
    console.log("Hello arrow function");
    return a + b;
};
console.log(add(12, 13));
let add1 = (a, b) => a + b;
console.log(add1(12, 16));
// name function 
function add2(a, b) {
    return a + b;
}
console.log(add2(12, 14));
let username1 = (first, last) => {
    if (last) {
        return (first + " " + last);
    }
    else {
        return (first);
    }
};
console.log(username1("Muhammad"));
console.log(username1("Muhammad", "Farhan Bashir"));
