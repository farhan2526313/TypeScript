var num = prompt("please enter any digit number : ")
num=Number(num)
var c= true

for(var a =2 ; a<num ; a++){
    var b = num %a
    if(b == 0){
        console.log("Number is Not prime "+num+"  a "+ a )
        c = false
        break;
    }
   
}
if(c){
    console.log("Number is Prime "+num )
}