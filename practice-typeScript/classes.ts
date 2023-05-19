


class human {
    name : string;

    constructor(name : string){
        this.name = name; 

    }
    

}

class food {
    foodname : string;
    constructor(foodname : string){
        this.foodname = foodname;
    }
}    

class day {
    dayname : string;
    constructor(dayname: string){
        this.dayname = dayname; 
    }

}





let farhan1 = new human ("farhan");
let eatanfood = new food ("briyani");
let days = new day ("FRIDAY");
console.log(farhan1,eatanfood,days);
 farhan1 = new human ("farhan");
 eatanfood = new food ("Nehari");
 days = new day ("sunday");
console.log(farhan1,eatanfood,days);

//  Getters / Setters function

class c {
    _lenght = 0;

    get lenght () {
        return this._lenght ;
    
    }

    set lenght (value) {
        if (value > 0){
            this._lenght = value;
        }
    }
}

let cc = new c() ;

cc.lenght = 5 ;

console.log(cc.lenght);


// indexing 


class indclass {
    [s : string] : Boolean| ((s : string)  => Boolean );

    ali = true;
    aa (s: string ) {
        return this[s] as Boolean
    }
}


let ind = new indclass ();
// ind.aa("ali");

console.log(ind.aa("a"));

//  implements 


interface ping {
    pinga() : void;
}

class aaa implements ping {

    pinga () {
        console.log("ali hadir");
    }

    pong () {

        console.log("ali hadir");
    }
}

