
var a = "Hello I'm Farhan Bashir" ;
console.log(a.length);

// Escape characters

var b = "Hello \'Farhan Bashir" ;
console.log(b);
var c = "Hello \Farhan Bashir" ;
console.log(c);
var d = "Hello \\Farhan Bashir" ;
console.log(d);
var e = "Hello \nFarhan Bashir" ;
console.log(e);
var f = "Hello \tFarhan Bashir" ;
console.log(f);

// lower case and upper case

var g = "Hello Farhan Bashir" ;
console.log("Lower Case characters:",g.toLowerCase());
var j = "Hello Farhan Bashir" ;
console.log("Upper Case Characters:",j.toUpperCase());

// slice function

var h = "Hello Farhan Bashir" ;
var i =h.slice(-6,-1)
console.log(h);
console.log(i);

// index of and last index of

var k = "My name is Muhammad Farhan and what is your name";
console.log("total length is:",k.length)
var l =k.indexOf("is",20);
console.log(k);
console.log(l);

// last index of

var m = "My name is Muhammad Farhan and what is your name";
console.log("Total length is:",m.length)
var n =m.lastIndexOf("is");
console.log(m);
console.log(n);

// charat function 

var o = "My name is Muhammad Farhan and what is your name";
console.log("Total length is:",o.length)
var p =o.charAt(36);
console.log(o);
console.log(p);

// replace function

var q = "My name is Muhammad Farhan and what is your name";
console.log("Total length is:",q.length)
var r =q.replace(/is/gi,"am"); // to use this /is/gi function to change all character in the line like if select is 
// then all replce 
console.log(q);
console.log(r);

// split function

var v = "My name is Muhammad Farhan and what is your name";
console.log("Total length is:",v.length)
var  w=v.split(" ");
console.log(v);
console.log(w);


