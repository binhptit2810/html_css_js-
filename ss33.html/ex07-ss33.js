// B1: Xây dựng kho lưu trữ dữ liệu mô phỏng
const products = [
    {
      id: 1,
      name: "Điện thoại Samsung Galaxy A54",
      price: 7490000,
      image: "https://cdn.tgdd.vn/Products/Images/42/335177/samsung-galaxy-a56-5g-green-thumb-600x600.jpg",
    },
    {
      id: 2,
      name: "Laptop Dell Inspiron 15",
      price: 15990000,
      image: "https://bizweb.dktcdn.net/100/446/400/products/laptop-dell-vostro-3490-1-gia-loc.jpg?v=1699258008053",
    },
    {
      id: 3,
      name: "Tai nghe AirPods Pro",
      price: 4990000,
      image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airpods-pro-2-hero-select-202409_FMT_WHH?wid=750&hei=556&fmt=jpeg&qlt=90&.v=1724041668836",
    },
    {
      id: 4,
      name: "Đồng hồ thông minh Apple Watch",
      price: 8990000,
      image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXM23ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=TnVrdDZWRlZzTURKbHFqOGh0dGpVRW5TeWJ6QW43NUFnQ2V4cmRFc1VnYUdWejZ5THhpKzJwRmRDYlhxN2o5aXB2QjR6TEZ4ZThxM3VqYkZobmlXM3RGNnlaeXQ4NGFKQTAzc0NGeHR2aVk0VEhOZEFKYmY1ZHNpalQ3YVhOWk9WVlBjZVFuazArV21YaFcvTVJ5dzR2eDMxaWg4TFhITTVrUW41Z084dENpYmZuSTdFUnErS0g3SWYxazQrNDdyRzE3K0tORmZaUy9vOVdqTEp2dmJNL3gwYlE3R0w4Z1RCbG9qQTd1MjYyL1owaE5aVCt2Ri82aDRacTg0bXlaZA",
    },
    {
      id: 5,
      name: "Máy ảnh Canon EOS M50",
      price: 12490000,
      image: "https://cdn.vjshop.vn/may-anh/mirrorless/canon/canon-eos-r50/black-18-45/canon-eos-r50-lens-18-45mm-500x500.jpg",
    },
    {
      id: 6,
      name: "Loa Bluetooth JBL Flip 5",
      price: 2190000,
      image: "https://bizweb.dktcdn.net/100/445/498/products/jbl-go-4-3-4-left-black-48178-x1.jpg?v=1732646465910",
    },
    {
      id: 7,
      name: "Bàn phím cơ Logitech G Pro",
      price: 2490000,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn9GcR1MvD76Mt-Ne0IC2DPMMsTZpG05xDxJOzkqw&s",
    },
    {
      id: 8,
      name: "Chuột không dây Logitech MX Master",
      price: 1890000,
      image: "https://product.hstatic.net/200000722513/product/h_mx_master_3_wireless__graphite_.jpg_1e5491e35f754dcc90b90582a9c3be95_ca0c63ca59de4ed1b4d46fcc5c81c1ed.png",
    },
];

let cart = [];

let productGrid = document.getElementById("product-grid");
let cardContainer = document.getElementById("cart-items");
let cartTotal = document.getElementById("cart-total");

// B2: Duyệt qua toàn bộ sản phẩm (đối tượng dữ liệu)
// có trong products
// --> chuyển đổi toàn bộ đối tượng dữ liệu đó thành HTML
// và cho chúng xuất hiện ở trên trình duyệt
for (let product of products) {
    let productCard = `
        <div class="product-card">
            <img class="product-image" src="${product.image}" alt="${product.name}"/>
            <div class="product-title">${product.name}</div>
            <div class="product-price">${product.price}₫</div>
            <button class="add-to-cart-btn" data-id="${product.id}">Thêm vào giỏ hàng</button>
        </div>
    `;
    productGrid.innerHTML += productCard;
}

// B2.1: Tiến hành duyệt qua toàn bộ sản phẩm có bên trong giỏ hàng
// --> Chuyển đổi toàn bộ sản phẩm đó thành HTML
// --> Đưa các sản phẩm đó xuất hiện trên trình duyệt (phần giỏ hàng)
function renderCart() {
    cardContainer.innerHTML = "";
    if (cart.length === 0) {
        cardContainer.innerHTML = `<div class="empty-cart">Giỏ hàng trống</div>`;
    } else {
        for (let item of cart) {
            let cartItem = `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">${item.price}₫ x ${item.number}</div>
                    </div>
                    <div class="quantity-controls">
                        <button class="quantity-btn decrease-btn" data-id="${item.id}">-</button>
                        <span>${item.number}</span>
                        <button class="quantity-btn increase-btn" data-id="${item.id}">+</button>
                        <button class="remove" data-id="${item.id}">X</button>
                    </div>
                </div>
            `;
            cardContainer.innerHTML += cartItem;
        }
    }

    // Cập nhật tổng tiền
    let total = cart.reduce((sum, item) => sum + item.price * item.number, 0);
    cartTotal.textContent = `Tổng: ${total}₫`;

    // Gắn sự kiện cho các nút
    attachEventListeners();
}

// B3: Tính năng thêm mới vào giỏ hàng
// Create (Thêm mới)
function attachEventListeners() {
    const addBtnList = document.getElementsByClassName("add-to-cart-btn");
    for (let btn of addBtnList) {
        btn.onclick = function () {
            // B3.1: Xác định sản phẩm cần phải thêm vào giỏ hàng
            let id = btn.getAttribute("data-id");

            // B3.2: Tìm vị trí của sản phẩm đó trong products
            let index = products.findIndex((element) => element.id === +id);
            let inCartIndex = cart.findIndex((element) => element.id === +id);

            if (inCartIndex === -1) {
                // Chưa tồn tại trong giỏ hàng
                let productInCart = { ...products[index], number: 1 };
                cart.push(productInCart);
            } else {
                // Đã tồn tại trong giỏ hàng rồi !!!
                cart[inCartIndex].number++;
            }
            renderCart();
        };
    }

    // B4: Tính năng U - Update (Cập nhật)
    // B4.1: Gọi ra toàn bộ nút increase để gắn sự kiện
    let increaseList = document.getElementsByClassName("increase-btn");
    for (let btn of increaseList) {
        btn.onclick = function () {
            let id = btn.getAttribute("data-id");
            // B4.2: Xác định được sản phẩm đó là sản phẩm nào trong giỏ hàng
            // B4.3: Tìm ra được vị trí của sản phẩm đó --> Tiến hành cập nhật
            // lại số lượng của sản phẩm đó trong mảng cart
            let index = cart.findIndex((element) => element.id === +id);
            cart[index].number++;
            // B4.4: Phản ánh sự thay đổi đó ở trên trình duyệt = cách gọi lại
            // hàm renderCart
            renderCart();
        };
    }

    // Tính năng Decrease
    let decreaseList = document.getElementsByClassName("decrease-btn");
    for (let btn of decreaseList) {
        btn.onclick = function () {
            let id = btn.getAttribute("data-id");
            let index = cart.findIndex((element) => element.id === +id);
            if (cart[index].number > 1) {
                cart[index].number--;
            } else {
                cart.splice(index, 1);
            }
            renderCart();
        };
    }

    // Tính năng Remove
    let removeList = document.getElementsByClassName("remove");
    for (let btn of removeList) {
        btn.onclick = function () {
            let id = btn.getAttribute("data-id");
            let index = cart.findIndex((element) => element.id === +id);
            cart.splice(index, 1);
            renderCart();
        };
    }
}

// Chức năng thanh toán
document.getElementById("checkout-btn").addEventListener("click", function () {
    if (cart.length === 0) {
        alert("Giỏ hàng trống, không thể thanh toán!");
        return;
    }

    let total = cart.reduce((sum, item) => sum + item.price * item.number, 0);
    let confirmCheckout = confirm(`Tổng số tiền cần thanh toán: ${total}₫\nBạn có chắc chắn muốn thanh toán?`);

    if (confirmCheckout) {
        alert("Thanh toán thành công! Cảm ơn bạn đã mua hàng.");
        cart = [];
        renderCart();
    }
});

// Khởi tạo giao diện ban đầu
renderCart();