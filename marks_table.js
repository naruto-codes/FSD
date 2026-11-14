/*PROGRAM 3: DISPLAY STUDENT MARKS USING TABLE
Develop a Node.js program using console.table to display
student id, name and marks of 5 students.
*/

const students = [
  { id: 101, name: "Rahul", marks: 85 },
  { id: 102, name: "Priya", marks: 92 },
  { id: 103, name: "Arjun", marks: 78 },
  { id: 104, name: "Sneha", marks: 88 },
  { id: 105, name: "Kiran", marks: 95 },
];

console.log("Student Marks List:");
console.table(students);