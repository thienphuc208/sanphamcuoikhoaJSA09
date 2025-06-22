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

    // Admin đăng nhập
    if (email_val === 'admin@gmail.com' && pwd_val === 'admin') {
        alert('Login successful');
        location.href = "mainscreen.html";
        return;
    }

    // Lấy dữ liệu từ localStorage
    const storedEmail = localStorage.getItem("registeremail");
    const storedPwd = localStorage.getItem("registerpwd");
    // Kiểm tra xem dữ liệu đã được lưu chưa
    if (!storedEmail || !storedPwd) {
        alert('No registered user found. Please register first.');
        return;
    }

    // Kiểm tra dữ liệu
    if (email_val === storedEmail && pwd_val === storedPwd) {
        alert("Login successful");
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

    // Lưu dữ liệu vào localStorage
    localStorage.setItem("registerusername", username_val);
    localStorage.setItem("registeremail", email_val);
    localStorage.setItem("registerpwd", pwd_val);

    alert('Registration successful!');
    const userData = {
        username: username_val,
        email: email_val,
        password: pwd_val
    };

    // Chuyển đổi đối tượng userdata thành chuỗi JSON và lưu vào localStorage
    const userDataJSON = JSON.stringify(userData);
    // Lưu chuỗi JSON vào localStorage
    localStorage.setItem("userData" + userData.username, userDataJSON );
    // In thông tin đăng ký ra console
    console.log("Registered user:", username_val, email_val, pwd_val);
    location.href = "login.html";

});

// // Kiểm tra trạng thái đăng nhập khi load trang
// window.onload = function() {
//     const isLoggedIn = localStorage.getItem("loggedInUser");
//     if (isLoggedIn) {
//         document.getElementById("loginItem").style.display = "none";
//         document.getElementById("logoutItem").style.display = "block";
//     } else {
//         document.getElementById("loginItem").style.display = "block";
//         document.getElementById("logoutItem").style.display = "none";
//     }
// }

// // Xử lý đăng xuất
// const logoutBtn = document.getElementById("logoutItem");        
// logoutBtn.addEventListener("click", () => {
//     localStorage.removeItem("loggedInUser");
//     alert("Logged out successfully");
//     location.href = "login.html";
// });
// // Lấy thông tin người dùng từ localStorage
// const userData = localStorage.getItem("userData");
// if (userData) {
//     const parsedData = JSON.parse(userData);
//     console.log("User Data:", parsedData);
// }   
// else {
//     console.log("No user data found in localStorage.");
// }   
// // Lấy thông tin người dùng từ localStorage
// const userDataKey = "userData" + localStorage.getItem("registerusername");
// const userDataFromStorage = localStorage.getItem(userDataKey);
// if (userDataFromStorage) {
//     const parsedUserData = JSON.parse(userDataFromStorage);
//     console.log("User Data from localStorage:", parsedUserData);
// }
// // Hiển thị thông tin người dùng trên trang chính
// const userInfo = document.getElementById("userInfo");   
// if (parsedUserData) {
//     userInfo.innerHTML = `
//         <h2>Welcome, ${parsedUserData.username}!</h2>
//         <p>Email: ${parsedUserData.email}</p>
//     `;
// }
// // Hiển thị thông tin người dùng trên trang chính
// const userInfoMain = document.getElementById("userInfoMain");

