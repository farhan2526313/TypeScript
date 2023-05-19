
let favorite_fruits = ["Banana","Mango","orang"];

if(favorite_fruits.includes("Appel") ){

    console.log("You realy like Appel, But its  not add top 3 favorite furit.");
}

if (favorite_fruits.includes("Banana")){

    console.log(favorite_fruits[0] +" , Is your favorite fruit");
}

if (favorite_fruits.includes("Mango")){

    console.log(favorite_fruits[1] +", is your favorite fruit");
}

if(favorite_fruits.includes("Peach")){

    console.log("Peach is not your favorite fruit.");
}

if(favorite_fruits.includes("orang")){

    console.log(`${favorite_fruits[2]} , is your favorite fruit`);
}