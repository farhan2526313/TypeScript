let make_sandwich = ( ...items : string []) => {


    console.log("Making a sandwich with");

    console.log(items.join("\n"));
    console.log("SandWich Down  \n\n");
}

let mk_sand = make_sandwich;

mk_sand ("Turky","chees","chiken","bread");
mk_sand ("Pakistani","Egg","chiken","bread");
mk_sand ("Indian","chees","Paneer","bread","Egg");