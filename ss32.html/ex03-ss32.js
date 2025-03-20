function addSubject() {
    let subjectInput = document.getElementById("subjectInput");
    let subjectName = subjectInput.value.trim();
    if (subjectName === '') {
        alert("Tên môn học không được để trống")
        return
    }
    let li = document.createElement("li");
    li.textContent = subjectName
    let subjectList = document.getElementById('subjectList');
    subjectList.appendChild(li)
    subjectInput.value = ''
}