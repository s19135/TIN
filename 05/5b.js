function Student(firstName, lastName, id, grades)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;
    this.print = () => {
        let sum = this.grades.reduce((a, b) => a + b, 0);
        console.log("Student: " + this.firstName + " " + this.lastName + "\nAvg grade: "+ (sum / this.grades.length));
    }
}

let student = new Student("Glad", "Valakas", 54, [5, 4, 2, 1, 1]);

student.print();