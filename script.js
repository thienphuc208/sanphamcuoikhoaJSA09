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

// Gọi hàm khi trang vừa load
window.onload = function () {
    updateLoginStatus();
}





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
        localStorage.setItem("isLoggedIn", "true");
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
        localStorage.setItem("isLoggedIn", "true");
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
    localStorage.setItem("userData" + userData.username, userDataJSON);
    // In thông tin đăng ký ra console
    console.log("Registered user:", username_val, email_val, pwd_val);
    location.href = "login.html";

});
// tìm kiếm sản phẩm
function searchProducts() {
    const keyword = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        if (title.includes(keyword)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Hiển thị sản phẩm lên giao diện
        const productContainer = document.getElementById('productContainer');
        data.forEach(product => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${product.images[0]}" alt="${product.title}" class="card-img">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-price">${product.price} USD</p>
                </div>
            `;
            productContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching products:', error));
