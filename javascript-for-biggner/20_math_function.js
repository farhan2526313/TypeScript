// round function is use for the value calculate if 2.4 then calculate 2 if the value is 2.6 then calculate is 3

var a = (23+33+29)/ 2;
console.log(a);
var b =Math.round(a);
console.log(b);

// ceil function is use for the value calculate this function is move only upper side 


var a = (23+33+29)/ 2;
console.log(a);
var b =Math.ceil(a);
console.log(b);

// floor function is use for the value calculate this function is move only lower side 

var a = (23+33+29)/ 2;
console.log(a);
var b =Math.floor(a);
console.log(b);

// math random function

var num = Math.random();
console.log("num is :",num);
num2 = num * 6 ;
console.log("num2 is :" ,num2);
num3 = num2 + 1;
console.log("num3 is :",num3)
num4 =Math.floor(num3)
console.log("num4 is :",num4)


// avarage to fixed function

var c = (23+44+21+67+19)/ 67;
console.log(c);
var d =c.toFixed (3);
console.log(d)