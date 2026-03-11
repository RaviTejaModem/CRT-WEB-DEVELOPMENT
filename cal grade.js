function calculateGrade(marks) {
    if (typeof marks !== 'number' || marks < 0 || marks > 100) {
        throw new Error('Marks must be a number between 0 and 100');
    }

    if (marks >= 90) {
        return 'A';
    } else if (marks >= 80) {
        return 'B';
    } else if (marks >= 70) {
        return 'C';
    } else if (marks >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

const students = [
    { name: 'Alice', marks: 95 },
    { name: 'Bob', marks: 82 },
    { name: 'Charlie', marks: 73 },
    { name: 'Diana', marks: 67 },
    { name: 'Evan', marks: 58 }
];

students.forEach(student => {
    const grade = calculateGrade(student.marks);
    console.log(`${student.name}: ${student.marks} -> ${grade}`);
});
