"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//  rest parameter
let ali = (first, ...last) => {
    console.log(last);
    return first + " " + last.join("");
};
let ab = ali("Muhammad", "ali ", "haidr");
console.log(ab);
// defult parameter
let ali1 = (first, last = "hadir") => {
    if (last) {
        return first + " " + last;
    }
    else {
        return first;
    }
};
console.log(ali1("Farhan"));
console.log(ali1("Farhan", "khan"));
