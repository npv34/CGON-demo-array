let students = ["An", "Duong", "Linh", "Diep"];
function showListStudent() {
    let html = '';
    for (let i = 0; i < students.length; i++) {
        html += "<tr>";
        html += "<td>";
        html += i + 1;
        html += "</td>";
        html += "<td>";
        html += students[i];
        html += "</td>";
        html += "<td>";
        html += '<button onclick="deleteStudent('+i+')">Delete</button>';
        html += "</td>";
        html += "</tr>";
    }
    document.getElementById('student-list').innerHTML = html;
}

showListStudent();

function deleteStudent(i) {
    if (confirm('are you sure?')){
        students.splice(i, 1);
        showListStudent();
    }
}

// thuc hien chuc nang them moi
// tao 1 ham ten la addStudent()
// tao bien value = gia tri cua o input khi nhap vao
// thuc hien push value vao mang students
// goi lai ham showListStudent() de hien thi du lieu moi
// goi ham addStudent() khi click vao button Add
