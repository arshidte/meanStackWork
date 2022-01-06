// //This is the classical approach(Object Oriented method)

// class Student{
//     //setStudent(name,age,gender,course){
//     //constructor(name,age,gender,course){
//     constructor(...args){
//         // this.name=name;
//         this.name=args[0];
//         // this.age=age;
//         this.age=args[1];
//         // this.gender=gender;
//         this.gender=args[2];
//         // this.course=course;
//         this.course=args[3];

//         //this.name,this.age... are called instance variables. setStudent is initialising values to instance variables.
//         //This is usually done by constructor.
//         //If we need to pass many arguments to the constructor, then we can use spread operator inside the constructor parameter.
//     }
//     printStudent(){
//         console.log(this.name,this.age,this.gender,this.course);
//     }
// }

// var st1 = new Student("Arshid",23,"male","Mern");
// // st1.setStudent("Arshid",23,"male","Mern");
// st1.printStudent();

// var st2 = new Student("Ruksana",23,"Female","Mern");
// // st2.setStudent("Ruksana",23,"Female","Mern");
// st2.printStudent();

// Method overriding (Inheritance is neccessory)

class Parent{
    bike(){
        console.log("Passion Pro");
    }
}

class Child extends Parent{
    bike(){
        super.bike();//To get the parent's bike() also.
        console.log("Royal Enfield");
    }
}

var obj = new Child();
obj.bike();

// Here, the bike function of parent is overrided by child. If we need to get the parent's bike, then call super.bike().