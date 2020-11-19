function Student(firstName, lastName, id, grades)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;
}

Student.prototype.course = [];

let student = new Student("Glad", "Valakas", 54, [5, 4, 2, 1, 1]);

let createStudent = (firstName, lastName, id, grades, course) => {
    course = ["BYT","TIN","ZPR"];
    student.course = course;
    return student;
}

console.log(createStudent());