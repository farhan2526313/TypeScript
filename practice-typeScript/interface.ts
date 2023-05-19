

interface ball  { 
    name : string,
    age : Number
}

type spa = { name : string , age : Number };

let a : ball ={ name : "farhan", age : 25};

let c : spa = { name : "ali", age : 24};


a= c ;

c = a;


let d : { name : string , age : Number } ={ name : "farhan", age : 25};

let e : { name : string , age : Number } = { name : "ali", age : 24};

d = e ;
e = d ;



interface tube { name : string, age : Number , gender : string};

let f : tube =  { name : "Hadir", age : 12 , gender : "Male"};


// f =d ;

d  = f;


let i: { id: number, [y: string]: any };

i = { id : 15, name : "ali"};

// let   = {id : 13, yourname : "ali" }

// i = y;


i = { id : 15, fullname : "ali"};

i = { id : 10 , myname : "farhan"};


let mytype = { name : "Farhan", age : 15};

let mytype1 = { name : "Farhan", age : 15, id : 11};

mytype = mytype1 















