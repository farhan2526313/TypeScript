//  Arrow function 

let add = (a: number, b:number): number => {

    console.log("Hello arrow function");
    return a + b ;
}

console.log(add(12,13));

let add1 = (a:number , b: number) : number => a + b;


console.log(add1(12,16));


// name function 



function add2 (a : number , b : number ): number {

        return a + b; 
}

console.log(add2(12,14));



let username1 =  (first: string, last? :string): string => {

        if (last){
            return(first+" "+last);
        }
        else{

            return (first);
        }


}

console.log(username1("Muhammad"));
console.log(username1("Muhammad","Farhan Bashir"));
