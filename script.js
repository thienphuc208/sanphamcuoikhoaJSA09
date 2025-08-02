const container = document.querySelector(".container");
const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");

registerBtn.addEventListener("click", () => {
    container.classList.add('active');
});



loginBtn.addEventListener("click", () => {
    container.classList.remove('active');
});

// Xử lý Đăng nhập
const emailInput = document.getElementById('email');
const pwdInput = document.getElementById('pwd');
const loginForm = document.getElementById('loginForm');




loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email_val = emailInput.value;
    const pwd_val = pwdInput.value;

    // Kiểm tra ô trống
    if (email_val === '' || pwd_val === '') {
        alert('Please fill all the fields');
        return;
    }

    // Lấy dữ liệu từ localStorage
    const storedUserData = localStorage.getItem("userData" + email_val);
    if (!storedUserData) {
        alert('User not found. Please register first.');
        return;
    }
    // chuyển đổi chuỗi JSON thành đối tượng
    const userData = JSON.parse(storedUserData);
    const storedEmail = userData.email;
    const storedPwd = userData.password;

    // Kiểm tra dữ liệu
    if (email_val === storedEmail && pwd_val === storedPwd) {
        alert("Login successful");
        localStorage.setItem("currentUser", JSON.stringify({ email: email_val, password: pwd_val }));
        location.href = "mainscreen.html";
    } else if (pwd_val.length < 6) {
        alert('Password must be at least 6 characters');
    } else {
        alert('Invalid email or password');
    }
});

// Xử lý Đăng ký
const registerusername = document.getElementById('registerusername');
const registeremail = document.getElementById('registeremail');
const registerpwd = document.getElementById('registerpwd');
const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username_val = registerusername.value;
    const email_val = registeremail.value;
    const pwd_val = registerpwd.value;

    if (username_val === '' || email_val === '' || pwd_val === '') {
        alert('Please fill all the fields');
        return;
    }

    if (pwd_val.length < 6) {
        alert('Password must be at least 6 characters');
        return;
    }

    alert('Registration successful!');
    const userData = {
        username: username_val,
        email: email_val,
        password: pwd_val
    };

    // Chuyển đổi đối tượng userdata thành chuỗi JSON và lưu vào localStorage
    const userDataJSON = JSON.stringify(userData);
    // Lưu chuỗi JSON vào localStorage
    localStorage.setItem("userData" + email_val, userDataJSON);
    // In thông tin đăng ký ra console
    console.log("Registered user:", username_val, email_val, pwd_val);
    location.href = "login.html";

});
