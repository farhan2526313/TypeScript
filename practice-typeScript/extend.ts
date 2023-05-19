

class burger {

        band ( ){
            console.log("Band");
        }
        chees(){
            console.log("chees");
        }    
}

class farhan extends burger {

    peti(){
        console.log("This is farhan Beef burger");
    }
}

class adeel extends burger {

    peti(){
        console.log("This is adeel chiken burger");
    }
}

class eatburger extends farhan {

    eat () {
        console.log("farhan want to eat burger");
    }
}

let farhan1 = new farhan
farhan1.band();
farhan1.chees();
farhan1.peti();

let adeel1 = new adeel 
adeel1.band();
adeel1.chees();
adeel1.peti();

let eatburger1 = new eatburger
eatburger1.band();
eatburger1.chees();
eatburger1.eat();
eatburger1.peti();
