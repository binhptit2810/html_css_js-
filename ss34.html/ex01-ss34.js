document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault()
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let messageDiv = document.getElementById('message');
    if (!email) {
        messageDiv.textContent = 'Email không được để trống.';
        return;
    }
    if (!password) {
        messageDiv.textContent = 'Mật khẩu không được để trống.';
        return
    }
    if (!confirmPassword) {
        messageDiv.textContent = 'Xác nhận mật khẩu không được để trống.';
        return
    }
    if (password !== confirmPassword) {
        messageDiv.textContent = 'Mật khẩu và xác nhận mật khẩu không khớp.';
        return;
    }
    let user = {
        email: email,
        password: password
    };
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    messageDiv.style.color = 'green';
    messageDiv.textContent = 'Đăng ký thành công'
    document.getElementById('registerForm').reset();
    displayUsers();
});

