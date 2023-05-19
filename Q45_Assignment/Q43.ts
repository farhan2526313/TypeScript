let make_great1 = ( ...magicina : string []  ) => {

    for(let a = 0 ; a<magicina.length ; a++){

        console.log(magicina[a]);
        console.log(`${magicina[a]} is the Great magicina `);

    }

}

let smagicians1 = make_great1;

smagicians1("Ali", "BooAli", "Akbar");

let smagicians2 = make_great1;

smagicians2("Afzal","adeel","Taimoor");