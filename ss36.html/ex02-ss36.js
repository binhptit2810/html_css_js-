const foods = [
    {
        id: "bunbohue",
        name: "Bún bò Huế",
        image: "https://satrafoods.com.vn/uploads/Images/mon-ngon-moi-ngay/bun-bo-hue.jpg",
        likes: 0
    },
    {
        id: "phobo",
        name: "Phở bò Hà Nội",
        image: "https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/01-Phuong-Mon%20ngon&congthuc/1.%20pho%20ha%20noi/canh-nau-pho-ha-noi-xua-mang-huong-vi-kinh-do-cua-80-nam-ve-truoc-1.jpg",
        likes: 0
    },
    {
        id: "comtam",
        name: "Cơm tấm Sài Gòn",
        image: "https://sakos.vn/wp-content/uploads/2024/10/bia-4.jpg",
        likes: 0
    }
];
function loadLikes() {
    foods.forEach(food => {
        let savedLikes = localStorage.getItem(food.id);
        if (savedLikes !== null) {
            food.likes = parseInt(savedLikes);
        }
    });
}
function saveLikes(id, likes) {
    localStorage.setItem(id, likes);
}
function renderFoods() {
    let foodList = document.getElementById("food-list");
    foodList.innerHTML = "";
    foods.forEach(food => {
        let foodDiv = document.createElement("div");
        foodDiv.classList.add("food-item");
        foodDiv.innerHTML = `
            <img src="${food.image}" alt="${food.name}">
            <div class="food-info">
                <strong>${food.name}</strong>
                <p>❤️ <span id="like-count-${food.id}">${food.likes}</span> lượt thích</p>
                <button class="like-btn" onclick="likeFood('${food.id}')">Thích +1</button>
            </div>
        `;
        foodList.appendChild(foodDiv);
    });
}

function likeFood(id) {
    let food = foods.find(f => f.id === id);
    if (food) {
        food.likes++;
        saveLikes(food.id, food.likes);
        document.getElementById(`like-count-${food.id}`).textContent = food.likes;
    }
}

loadLikes();
renderFoods();