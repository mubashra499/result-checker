// Sample student database
const students = [
  { roll: "101", section: "A", name: "Ali", marks: 85, grade: "A", Attendence: "78%" ,status:"pass"},
  { roll: "102", section: "B", name: "Sara", marks: 78, grade: "B", Attendence: "70%",status:"pass" },
  { roll: "103", section: "A", name: "Ahmed", marks: 92, grade: "A+", Attendence: "80%",status:"pass" },
  { roll: "104", section: "C", name: "Hina", marks: 65, grade: "C", Attendence: "85%",status:"pass" }
];

function checkResult() {
  let roll = document.getElementById("roll").value;
  let section = document.getElementById("section").value;
  let resultBox = document.getElementById("result");

  let student = students.find(
    s => s.roll === roll && s.section.toUpperCase() === section.toUpperCase()
  );

  if (student) {
    resultBox.style.display = "block";
    resultBox.style.background = "#28a745"; // Green
    resultBox.style.color = "white";
    resultBox.innerHTML = `
      Name: ${student.name} <br>
      Roll No: ${student.roll} <br>
      Section: ${student.section} <br>
      Marks: ${student.marks} <br>
      Grade: ${student.grade} <br>
      Attendance: ${student.Attendence} <br>
        status:${student.status}
      }
    `;

    // Console log
    console.log("----- Result -----");
    console.log("Name:", student.name);
    console.log("Roll No:", student.roll);
    console.log("Section:", student.section);
    console.log("Marks:", student.marks);
    console.log("Grade:", student.grade);
    console.log("Attendance:", student.Attendence);
    console.log("status:",student.status);
    console.log("-----------------");

  } else {
    resultBox.style.display = "block";
    resultBox.style.background = "#dc3545"; // Red
    resultBox.style.color = "white";
    resultBox.innerText = "No result found. Check Roll Number or Section!";
    console.log("❌ No result found for Roll:", roll, "Section:", section);
  }
}
