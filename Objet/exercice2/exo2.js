let student = {
    name: "Steven",
    age: 19,
    grades: [12, 14, 8],
    average: 0
};

for (grade of student.grades) {
    student.average += grade;
}
student.average = student.average / student.grades.length;
console.log(student.average)