class Student {
    constructor(firstName, lastName, id, grades) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.grades = grades;
        this.print = () => {
            console.log("Student: " + this.fullName + "\nAvg grade: " + this.avg);
        }   
    }

    get fullName()
    {
        return this.firstName + " " + this.lastName;

    }

    set fullName(fullName)
    {
        let [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get avg()
    {
        return this.grades.reduce((a, b) => a + b, 0) / this.grades.length;
    }
}


let student = new Student("", "", 54, [5, 4, 5, 4, 5, 4]);

student.fullName = "Glad Valakas" ;
student.print();