const container = document.querySelector(".container");
const registerBtn = document.querySelector(".register-btn");
const loginBtn = document.querySelector(".login-btn");

registerBtn.addEventListener("click", () => {
    container.classList.add('active');
});



loginBtn.addEventListener("click", () => {
    container.classList.remove('active');
});
// xử lý đăng nhập
let email = document.getElementById('email');
let pwd = document.getElementById('pwd');
let form = document.getElementById('loginForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    //nhập thông tin
    let email_val = email.value;
    let pwd_val = pwd.value;
    console.log(email_val, pwd_val);
    if (email_val === '' || pwd_val === '') {
        alert('Please fill all the fields');
    }
    //phần đăng nhập của admin
    else if (email_val === 'admin@gmail.com' && pwd_val === 'admin') {
        alert('Login successful');
        location.href = "mainscreen.html";
    }

    else if (pwd_val.length < 6) {
        alert('Password must be at least 6 characters');
    }
    else {
        alert('Invalid email or password');
    }
})

// Xử lý Đăng ký
let registerusername = document.getElementById('registerusername');
let registeremail = document.getElementById('registeremail');
let registerpwd = document.getElementById('registerpwd');
let registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Ngừng hành động gửi form mặc định

    // Lấy giá trị các trường trong form đăng ký
    let registerusername_val = registerusername.value;
    let registeremail_val = registeremail.value;
    let registerpwd_val = registerpwd.value;

    // console.log(registerusername_val, registeremail_val, registerpwd_val);
    if (registerusername_val === '' || registeremail_val === '' || registerpwd_val === '') {
        alert('Please fill all the fields');
    }
    else if (registerpwd_val.length < 6) {
        alert('Password must be at least 6 characters');
    }
    else {
        // đăng ký thành công, có thể gửi dữ liệu tới server ở đây
        alert('Registration successful!');
        console.log("Registered user:", registeremail_val, registeremail_val, registerpwd_val);
        // Chuyển hướng người dùng đến trang đăng nhập sau khi đăng ký thành công
        location.href = "login.html";
    }
    //local strogare
    let registerusername = "registerusername"
    let registeremail = "registeremail"
    let registerpwd = "registerpwd"

    // lưu data
    let data = localStorage.setItem('User', registerusername)
    let dataemail = localStorage.setItem('Email', registeremail)
    let datapwd = localStorage.setItem('Pwd', registerpwd)

    //lấy data
    let getItem = localStorage.getItem('registerusername')
    console.log(getItem);

});

