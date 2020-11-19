class Person{
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    set fullName(fullName) {
        let [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Student extends Person{
    constructor(firstName,lastName,id,grades) {
        super(firstName,lastName);
        this.id = id;
        this.grades = grades;

        this.print = () => {
        console.log("Student: " + this.fullName + "\nAvg grade: " + this.avg + "\n");
        } 
    }

    get avg(){
        return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
    }
}

let student = new Student("", "", 54, [5, 4, 5, 4, 5, 4]);
student.fullName = "Glad Valakas" ;
student.print();