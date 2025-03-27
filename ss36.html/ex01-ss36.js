let nameInput = document.getElementById('name'); 
let saveButton = document.getElementById('btn');
let container = document.querySelector('.container');
function displayGreeting(name) {
    container.innerHTML = '';
    let greeting = document.createElement('p');
    greeting.innerHTML = ` 👋 Chào bạn, ${name}! <span style="font-size: 20px;"></span>`;
    greeting.classList.add('greeting');
    container.appendChild(greeting);
    let changeNameButton = document.createElement('button');
    changeNameButton.textContent = 'Đổi tên';
    changeNameButton.classList.add('change-name-btn');
    container.appendChild(changeNameButton);
    changeNameButton.addEventListener('click', () => {
        container.innerHTML = `
            <h1>Nhập tên của bạn</h1>
            <form>
                <label for="name">Tên của bạn:</label>
                <input type="text" id="name" placeholder="Nhập tên của bạn">
                <button type="button" id="btn">Lưu</button>
            </form>
        `;
        nameInput = document.getElementById('name');
        let newSaveButton = document.getElementById('btn');
        newSaveButton.addEventListener('click', saveName);
    });
}
function saveName(event) {
    event.preventDefault();
    let name = nameInput.value.trim();
    if(name){
        localStorage.setItem('userName', name);
        displayGreeting(name);
    }else{
        alert('Vui lòng nhập tên của bạn!');
        nameInput.value = '';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    let savedName = localStorage.getItem('userName');
    if(savedName){
        displayGreeting(savedName);
    }else{
        saveButton.addEventListener('click', saveName);
    }
});