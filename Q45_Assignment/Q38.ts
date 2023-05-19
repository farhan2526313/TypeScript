let  describe_city = ( cityname : string, counteryname : string = "Pakistan") => {

       return console.log(`${cityname} is in ${counteryname}`);


}

let descity = describe_city;

descity("karachi");
descity("Madina", "Sudia Arbia");
descity( "Lahore");
descity("New York", "USA");