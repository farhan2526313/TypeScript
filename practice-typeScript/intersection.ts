interface studentdata {

    student_id : Number,
    name : string,

}

interface teacher {

    teacher_id : Number,
    teacher_name : string
}


type intersection = studentdata & teacher;

let intersection1 : intersection = {

    student_id : 15,
    name : "farhan",
    teacher_id : 1,
    teacher_name : "ali "
}



console.log(intersection1);