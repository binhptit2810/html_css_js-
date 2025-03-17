const productList = []
let menu = `
--------MENU--------
1. Thêm sản phẩm vào danh sách sản phẩm.
2. Hiển thị tất cả sản phẩm.
3. Hiển thị chi tiết sản phẩm theo id.
4. Cập nhật thông tin sản phẩm (name, price, category, quantity) theo id sản phẩm.
5. Xóa sản phẩm theo id.
6. Lọc sản phẩm theo khoảng giá.
7. thoát

Mời bạn nhập lựa chọn : 
`
let input;
while(input !== 7){
    input = +prompt(menu)
    switch(input){
        case 1:
            let name = prompt("Mời bạn nhập vào tên sản phẩm")
            let price = prompt("Mời bạn nhập vào giá tiền")
            let category  = prompt("Mời bạn nhập vào danh mục sản phẩm")
            let quantity = prompt("Mời bạn nhập vào số lượng sp")
            let product = {
                id: Math.random(),
                name,
                price,
                category,
                quantity,
            }
            productList.push(product)
            break
        case 2:
            displayProduct()
            break
        case 3:
            let searchProduct = prompt("Mời bạn nhập id sp muốn tìm kiếm")
            let findIndex = search("id", searchProduct)
            if(findIndex === -1){
                console.log('Không có id nào với id ' + searchProduct)
            }else{
                displayProduct(productList[findIndex], findIndex)
            }
            break
        case 4:
            let updateId = prompt("Mời bạn nhập ID sản phẩm cần cập nhật")
            let updateIndex = search("id", updateId)
            if(updateIndex === -1){
                console.log('Không tìm thấy sản phẩm với ID: ' + updateId)
            }else{
                let newName = prompt("Nhập tên mới:")
                let newPrice = prompt("Nhập tên mới :")
                let newCategory = prompt("Nhập danh mục sản phẩm mới :") 
                let newQuantity = prompt("Mời bạn nhập số lượng sp mới")
                productList[updateIndex] = {
                    id: productList[updateIndex].id,  
                    name: newName,                    
                    price: newPrice,           
                    category: newCategory,
                    quantity : newQuantity
                }
                console.log("Đã cập nhật thông tin sản phẩm")
            }
            break
        case 5:
            let deleteId = prompt("Mời bạn nhập ID sản phẩm cần xóa")
            let deleteIndex = search("id", deleteId)
            if(deleteIndex === -1){
                console.log('Không tìm thấy sản phẩmvới ID: ' + deleteId)
            }else{
                productList.splice(deleteIndex, 1)
                console.log("Đã xóa sản phẩm thành công!")
            }
            break
        case 6 :
            let minPrice = +prompt("Mời bạn nhập giá nhỏ nhất:")
            let maxPrice = +prompt("Mời bạn nhập giá lớn nhất:")
            if (isNaN(minPrice) || isNaN(maxPrice) || minPrice > maxPrice) {
                console.log("giá tiền ko hợp lệ")
            }else{
                let filteredProducts = productList.filter(product => 
                    product.price >= minPrice && product.price <= maxPrice
                )
                if (filteredProducts.length === 0){
                    console.log(`Không tìm thấy sản phẩm nào trong khoảng giá từ ${minPrice} đến ${maxPrice}`)
                }else{
                    console.log(`Các sản phẩm trong khoảng giá từ ${minPrice} đến ${maxPrice}:`)
                    filteredProducts.forEach((product, index) => {
                        console.log(`Sản phẩm ${index + 1}:`);
                        console.log("Id sản phẩm:", product.id);
                        console.log("Tên sản phẩm:", product.name);
                        console.log("Giá sản phẩm:", product.price);
                        console.log("Danh mục sản phẩm:", product.category);
                        console.log("Số lượng sp trong kho:", product.quantity);
                        console.log("---------------------");
                    })
                }
            }
            break
        case 7:
            console.log("Cảm ơn bạn đã sử dụng")
            break
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!")
            break
    }
}
function displayProduct(product, index) {
    if(!product){
        productList.forEach(function (product, index) {
            console.log(`Danh sách liên hệ ${index + 1}:`);
            console.log("Id sản phẩm:", product.id);
            console.log("Tên sản phẩm:", product.name)
            console.log("Giá sản phẩm:", product.price);
            console.log("Danh mục sản phẩm:", product.category);
            console.log("Số lượng sp trong kho:", product.quantity);
            console.log("---------------------");
        });
    } else {
        console.log(`Liên hệ ${+index + 1}:`);
        console.log("Id sản phẩm:", product.id);
        console.log("Tên sản phẩm:", product.name)
        console.log("Giá sản phẩm:", product.price);
        console.log("Danh mục sản phẩm:", product.category);
        console.log("Số lượng sp trong kho:", product.quantity);
        console.log("---------------------");
    }
}
function search(key, value) {
    let findIndex = -1;
    for (let i in productList) {
        if (value == productList[i][key]) { 
            findIndex = i;
            break;
        }
    }
    return findIndex;
}