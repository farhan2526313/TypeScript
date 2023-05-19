
//  rest parameter
let ali = (first :string , ...last:string[ ]) : string=> {
    
   console.log(last);  
   
   return first + " "+last.join("");
    

}

let ab = ali ("Muhammad","ali ","haidr");
console.log(ab);

// defult parameter

let ali1 = ( first: string , last = "hadir" ): string => {

    if (last){
        return first +" "+last;
    }
    else {
        return first
    }
}

console.log(ali1("Farhan"));
console.log(ali1("Farhan","khan",));