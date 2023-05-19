class person {

    name : string;
    age: number;

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }
}

class student extends person {
    rollnumber: number;
    course : course[] = [];
    instructor : instructor [] = [];

    constructor (name : string, age: number ,rollnumber: number){
        super(name, age);
        this.rollnumber = rollnumber;
    }
    registerforcourse(courses: course){
        this.course.push(courses);
    }
    setinstructor(instructor: instructor){
        this.instructor.push(instructor);
    }
}

class instructor extends person{

    salry : number;
    course : course [] = [];

    constructor(name : string, age: number ,salry: number){
        super(name, age);
        this.salry = salry;
    }
    assigncourse(course: course){
        this.course.push(course);
    }
}

class course  {

    id : number;
    name : string;
    student :student [] = [];
    instructor : instructor [] = [];

    constructor (id: number, name: string){
        this.id = id;
        this.name= name;
    }
    addstudent(student: student){
        this.student.push(student);
        std1.registerforcourse(cour1);
        
    }
    setinstructor(instructor: instructor){
        this.instructor.push(instructor);
    }
}

class  department{

    name : string;
    courses : course [] = [];
        constructor(name: string){
            this.name = name ;
        }
    
    addcourses(course: course){
        this.courses.push(course);

    }    
}
let dep = new department("cs");
let cour1 = new course(1,"blockChain");
let cour2 = new course(2,"Mataverse");
let inst1 = new instructor("Zia Khan",50,50000);
let inst2 = new instructor("JahanZab",28,25000);
let std1 = new student("farhan",28,123,);
let std2 = new student("Adeel",26,1234,);
let std3 = new student("Ali",25,1235,);
dep.addcourses(cour1);
cour1.setinstructor(inst1);
inst1.assigncourse(cour1);
cour1.addstudent(std1);
std1.registerforcourse(cour1);
std2.registerforcourse(cour2);
cour1.setinstructor(inst1);
cour2.setinstructor(inst2);
std1.setinstructor(inst1);


console.log(std1);



