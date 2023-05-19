var username= prompt("please enter your name : ")
var age = prompt("How many years old you are?")
var age_at_school = prompt("please enter age at school :")

age= Number(age)
age_at_school= Number(age_at_school)
if(age == age_at_school){
    console.log(username,"is going to school his age is" ,age, "equle to age at school :" ,age_at_school)
}
else if( age > age_at_school){
    console.log(username,"is going to higher secondery school beacuse his age is",age,"and greater then to age at school : ",age_at_school)
}
else{
    console.log(username,"is still a child please take care this baby")
}