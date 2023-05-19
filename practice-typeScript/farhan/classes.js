"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class human {
    name;
    constructor(name) {
        this.name = name;
    }
}
class food {
    foodname;
    constructor(foodname) {
        this.foodname = foodname;
    }
}
class day {
    dayname;
    constructor(dayname) {
        this.dayname = dayname;
    }
}
let farhan1 = new human("farhan");
let eatanfood = new food("briyani");
let days = new day("FRIDAY");
console.log(farhan1, eatanfood, days);
farhan1 = new human("farhan");
eatanfood = new food("Nehari");
days = new day("sunday");
console.log(farhan1, eatanfood, days);
//  Getters / Setters function
class c {
    _lenght = 0;
    get lenght() {
        return this._lenght;
    }
    set lenght(value) {
        if (value > 0) {
            this._lenght = value;
        }
    }
}
let cc = new c();
cc.lenght = 5;
console.log(cc.lenght);
// indexing 
class indclass {
    ali = true;
    aa(s) {
        return this[s];
    }
}
let ind = new indclass();
// ind.aa("ali");
console.log(ind.aa("a"));
class aaa {
    pinga() {
        console.log("ali hadir");
    }
    pong() {
        console.log("ali hadir");
    }
}
