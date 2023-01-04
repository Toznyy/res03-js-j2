let grades = [[20, 10],[15, 20],[13, 18]];
let average = 0;
let sum = 0;
let totalGradesNumber = 0;

for (grade of grades){
    for (subgrade of grade){
        sum = sum + subgrade;
    }
    totalGradesNumber = totalGradesNumber + grade.length
}

average = sum / totalGradesNumber;
console.log(average);