"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let tup = ["str", 12];
let tup1 = tup;
console.log(tup1.join());
let fn = () => {
    return ["ali", 12];
};
let fn2 = () => {
    return {
        age: 25,
        username50: "farhan"
    };
};
let [num, num2] = fn();
let { username50, age } = fn2();
console.log(username50, age);
console.log(num, num2);
