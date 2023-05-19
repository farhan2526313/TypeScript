// var a= 4;
// var b= 2;
// var c= ++a + ++b - --a - --b
// // c= 4 + - 4 - 2 = 2
// console.log(a)
// console.log(b)
// console.log(c)

// var d = a++ + b++ - ++a - ++b + --a + --b
// //  d = 4 + 2 - 5 - 3 + 4 + 2 = 4
// console.log(d)
// var e = 4 + 2 - 5 - 3 + 4 + 2 
// console.log(e)
// var f = ++a + ++b - a--  + b-- + --b + --a
// // //  f = 5 + 3 - 5 + 3 + 1 + 3 = 10
// console.log(f)
// var g = 5 + 3 - 5 + 3 + 1 + 3 
// console.log(g)

// var a = 5
// var b = 6
// var c = a++ + b++ - ++a
// // c = 5 + 6 - 7
// console.log(a)
// console.log(b)
// console.log(c)


var a = 5
var b = 6

var c = a++ + b++ - ++a - ++b + --a + --b - a-- + b--
var d =     5  +  6  -  7  -  8  +   6 +  7  -  6 +   7 
            //     - 4   +          13  + 1 = 10
console.log(c)
console.log(d)