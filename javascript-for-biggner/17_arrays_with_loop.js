// var a =[];
// a.push("Ali","haider","Farhan","boali","Afzal","abdulrehman")

// for(var b= 0 ; b<a.length; b++ ){

//     console.log(a[b])
// }

// var a =[];
// // a.push(23,3,4,56,23,22,12,2)

// for(var b= 0 ; b<5; b++ ){
//         a[b] = b * 4;
// }
// for(var c =0; c<a.length; c++){
//     console.log(a[c])
// }

var a = [];
var b =prompt("how many names did you want to add");
for( var c=0 ; c<b ; c++){
    a.push(prompt("Plase enter you student names"));
}
console.log( "Arrays length:",a.length);
console.log(a)
console.log(a[5])

