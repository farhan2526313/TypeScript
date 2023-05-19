
console.log("Tests for equality and inequality with strings \n");



console.log("Hello"=== "Hello");
console.log("HELLO" != "HELLO");
console.log("hello" !== "hello");
console.log("Farhan" == "Farhan");
console.log("Ali"!=="Ali");
console.log("true" == "true");
console.log("false"==="false");
console.log("Bashir"=="Bashir");
console.log("Ubaid"!="Ubaid");
console.log("ali"!="ali");
console.log("\n\n");



console.log(" Tests using the lower case function  \n");

console.log("HELLO".toLowerCase() === "hello");
console.log("hello".toLowerCase()=== "HELLO");
console.log("hello".toLowerCase()=== "hello");       
console.log("Hello".toLowerCase() === "hello"); 
console.log("hello".toLowerCase()=== "HELLO");

console.log("HELLO".toLowerCase() !== "hello"); 
console.log("hello".toLowerCase()!== "HELLO");  
console.log("hello".toLowerCase()!== "hello");       
console.log("Hello".toLowerCase() !== "hello");    
console.log("hello".toLowerCase() != "HELLO");  


console.log("\n\n");


console.log(" Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to  \n");

console.log(10 === 10); //tr
console.log(12 != 12);  //fa
console.log(10 > 10);   //fa
console.log(11 < 10);   // fa
console.log(8 >= 8 );    // tr
console.log( 10 >= 9  );  //tr
console.log(10 <= 12 );   // tr
console.log(10 <= 10);    // tr
console.log(10 >= 5);   //tr
console.log(15 <= 10);  // false
console.log(12 <= 10);  // fasle


console.log("\n\n");

console.log("Tests using 'and' and 'or' operators  \n");

console.log( 10 == 10 && 10 > 5 && 11 < 15);
console.log(15 < 20 && 10 != 10 && 20 > 10 );
console.log(10 > 12 && 15 == 15 && 12 < 15);
console.log(15 > 10 && 10 > 15);
console.log(5 > 3 && 8 > 4);


console.log( "OR  operators \n");

console.log( 20 == 20 || 10 > 5 || 10 < 15);
console.log(10 != 10 || 13 < 10 || 10 < 8);
console.log(15 != 15 || 10 < 8 || 12 < 15);

console.log("\n\n");

console.log("Test whether an item is in a array  \n");

let array1 = ["Mango","Banana","Orange",];

console.log(array1.includes("Mango"));
console.log(array1.includes("Appel"));
console.log(array1.includes("Orange"));
console.log(array1.indexOf("Mango") == 0);
console.log(array1.indexOf("Appel") == 0);
console.log(array1.indexOf("Orange") == 1);

console.log("\n\n");

console.log("Test whether an item is not in a array \n");

let number = [1,2,3,4,5,6,7];

console.log(number.includes(1));
console.log(number.includes(10));
console.log(number.includes(3));
console.log(number.includes(11));
console.log(number.includes(7));
console.log(number.indexOf(1) == 0);
console.log(number.indexOf(10) == 0);
console.log(number.indexOf(7) == 6);
console.log(number.indexOf(3) == 1);
console.log(number.indexOf(5) !== 4);
