let students = [
	{
		name : "Steven",
		age : 18,
		average : 10
	},
	{
		name : "Jessica",
		age : 20,
		average : 13
	},
	{
		name : "Charlie",
		age : 17,
		average : 12
	},
];

for (student of students){
    console.log(`${student.name} is ${student.age} years old and has an average of ${student.average}.`)
}