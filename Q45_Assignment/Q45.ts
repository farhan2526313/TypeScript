let create_car = (manufacturer: string, model : string, ...key: string [] | number [] ) =>   {

    let car = {
        manufacturer : manufacturer,
        model : model,
    
    }

    return car ;

}

let newcar = create_car (" Toyta","carola");


console.log(newcar);
