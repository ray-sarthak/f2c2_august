const students = [
    {
      ID: 1,
      name: "Lala",
      age: 23,
      grade: "A",
      degree: "Btech",
      email: "Lala@example.com",
    },
    {
      ID: 2,
      name: "Sarthak",
      age: 26,
      grade: "B",
      degree: "LLB",
      email: "Sarthak@example.com",
    },
    {
      ID: 3,
      name: "Ray",
      age: 27,
      grade: "A",
      degree: "Software",
      email: "Ray@example.com",
    },
  ];
  function renderStudent(displayData = students) {
    const tbody = document.getElementById("student-body");
    tbody.innerHTML = "";
    displayData.forEach((student, index) => {
      const row = document.createElement("tr");
      const columns = ["ID", "name", "age", "grade", "degree", "email"];
      columns.forEach((column) => {
        const td = document.createElement("td");
        td.textContent = student[column];
        // console.log(td);
        row.appendChild(td);
      });
      // adding edit button and delete button
      const actionTd = document.createElement("td");
  
      const editButton = document.createElement("button");
      editButton.textContent = "edit";
      editButton.onclick = () => editStudent(student.ID);
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "delete";
      deleteButton.onclick = () => deleteStudent(student.ID);
  
      actionTd.appendChild(editButton);
      actionTd.appendChild(deleteButton);
      row.appendChild(actionTd);
  
      tbody.appendChild(row);
    });
    // using the above forEach method I am executing a function
    // on each element in the students array
  }
  renderStudent();


  function handleSubmit(){
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const grade = document.getElementById("grade").value;
    const degree = document.getElementById("degree").value;
    const email = document.getElementById("email").value;
    const StudentID = document.getElementById("student-id").value;
    if(StudentID){
        const student=students.find((s)=>s.ID==StudentID);
        student.name=name;
        student.age=age;
        student.grade=grade;
        student.degree=degree;
        student.email=email;


    }
    else{
        const newStudent={
            ID:students[students.length-1].ID+1,
            name,
            age,
            grade,
            degree,
            email,
        }
        students.push(newStudent)
    }
    document.getElementById("student-form").reset();
    document.getElementById("submit-button").textContent="Add Student";
    renderStudent();
    return false;

  }
function editStudent(StudentID){
const student=students.find((s)=>s.ID===StudentID)
document.getElementById("name").value = student.name;
document.getElementById("age").value = student.age;
document.getElementById("grade").value = student.grade;
document.getElementById("degree").value = student.degree;
document.getElementById("email").value = student.email;
document.getElementById("student-id").value = student.ID;
document.getElementById("submit-button").textContent = "Edit Student";
}
function deleteStudent(StudentID){
    const confirmation=prompt("Type 'y' to confirm");
    if(confirmation.toLowerCase()=="y"){
const index=students.findIndex((s) =>s.ID==StudentID);
students.splice(index,1);
renderStudent();
alert("Deleted Succefully");
}
}


function searchStudents(){
    const searchvalue=document.getElementById("search-input").value.toLowerCase();
    const filteredStudents = students.filter((student) => {
        return (
          student.name.toLowerCase().includes(searchvalue) ||
          student.email.toLowerCase().includes(searchvalue) ||
          student.degree.toLowerCase().includes(searchvalue)
        );
      });
    
      renderStudent(filteredStudents);

}