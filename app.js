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
//api sản phẩm
document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:3000/api/nike-shoes')
        .then(response => response.json())
        .then(data => {
            const productContainer = document.getElementById('productContainer');
            const currentPage = window.location.pathname.split('/').pop().split('.')[0];
            let row;

            data.forEach((product, index) => {
                if (index % 3 === 0) {
                    row = document.createElement('div');
                    row.className = 'row mb-4';
                    productContainer.appendChild(row);
                }

                const col = document.createElement('div');
                col.className = 'col-md-4';
                col.innerHTML = `
          <div class="card h-100">
            <img src="${product.image}" class="card-img-top" alt="Product Image">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <a href="product.html?id=${product.id}&from=${currentPage}" class="btn btn-primary">View Details</a>
            </div>
          </div>
        `;
                row.appendChild(col);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});

// Xử lý đăng xuất
function logout() {
    localStorage.removeItem("currentUser");
    alert("Logged out successfully");
    location.href = "../mainscreen.html";
}

