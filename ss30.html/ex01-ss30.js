let products = [
    {
        id : 1,
        name : "mèn mén",
        price : 20000,
        quantity : 20,
        category : " món ăn dân tộc Mông",
    },
    {
        id : 2,
        name : "mứt",
        price : 80000,
        quantity : 21,
        category : " món ăn dân tộc Kinh",
    },
    {
        id : 3,
        name : "cơm lam",
        price : 40000,
        quantity : 15,
        category : " món ăn dân tộc Mông",
    },
    {
        id : 4,
        name : "bánh đậu xanh",
        price : 60000,
        quantity : 30,
        category : " món ăn dân tộc Kinh",
    }
]
let cart = []
let menu = `
1. Hiển thị sản phẩm theo ten danh mục
2. Chọn sản phẩm để mua bằng cách nhập id sản phẩm 
   a. Sản phẩm không có trong cửa hàng hiển thị thông báo
   b. Sản phẩm có trong cửa hàng
        i. Cho người dùng nhập số lượng sản phẩm muốn mua, mua
           thành công số lượng sản phẩm trong cửa hàng sẽ bị trừ đi.
        ii. Số lượng sản phẩm trong cửa hàng = 0 hoặc không đủ hiển 
            thị thông báo.
3. Sắp xếp các sản phẩm trong cửa hàng theo giá :
   a. Tăng dần
   b. Giảm dần
4. Tính số tiền thanh toán trong giỏ hàng
5. Thoát

Mời bạn nhập lựa chọn : 
`
let input;
while(input !== 5){
    input = +prompt(menu)
    switch(input){
        case 1:
            console.log("Danh sách sản phẩm theo danh mục:");
            [" món ăn dân tộc Mông", " món ăn dân tộc Kinh"].forEach(category => {
            let filteredProducts = products.filter(product => product.category === category);
            if (filteredProducts.length > 0) {
                console.log(category + ":");
                filteredProducts.forEach(product => {
                console.log(`   - ${product.name}, Giá: ${product.price} VND, Số lượng: ${product.quantity}`);
                });
                }
            });
            break
        case 2:
            let searchProduct = prompt("Mời bạn nhập id sp muốn tìm kiếm");
            let findIndex = search("id", searchProduct);
            if(findIndex === -1){
                console.log('Không có id nào với id ' + searchProduct);
            }else if(products[findIndex].quantity <= 0 ){
                console.log("sản phẩm đã hết hàng")
                
            }else{
                let product = products[findIndex];
                let numProduct = +prompt(`Mời bạn nhập số lượng sp muốn mua (${product.name} - Còn: ${product.quantity})`)
                if(numProduct <= 0) {
                    console.log("Số lượng phải lớn hơn 0");
                } else if(product.quantity === 0){
                    console.log("Sản phẩm đã hết hàng");
                }else if(product.quantity < numProduct){
                    console.log(`Không đủ số lượng, chỉ còn ${product.quantity} sản phẩm`);
                }else{
                    let buyProduct = {
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        quantity: numProduct
                    }
                    cart.push(buyProduct);
                    products[findIndex].quantity -= numProduct;
                    console.log(`Đã thêm ${numProduct} ${product.name} vào giỏ hàng`);
                    console.log(`Số lượng còn lại trong kho: ${products[findIndex].quantity}`);
                }
            }
            break
        case 3:
        let choice = +prompt("Mời bạn lựa chọn sắp xếp sản phẩm trong cửa hàng theo giá(1 : tăng dần, 2: giảm dần)");
        if(choice === 1){
            let ascendingProducts = [...products].sort((a, b) => a.price - b.price);
            console.log("Danh sách sản phẩm sắp xếp theo giá tăng dần:");
            ascendingProducts.forEach(product => {
                console.log(`- ${product.name}, Giá: ${product.price} VND, Số lượng: ${product.quantity}`);
            });
        }
        else if(choice === 2){
            let descendingProducts = [...products].sort((a, b) => b.price - a.price);
            console.log("Danh sách sản phẩm sắp xếp theo giá giảm dần:");
            descendingProducts.forEach(product => {
                console.log(`- ${product.name}, Giá: ${product.price} VND, Số lượng: ${product.quantity}`);
            })
        }
        else {
            console.log("Lựa chọn không hợp lệ, vui lòng chọn 1 hoặc 2");
        }
            break
        case 4:
            if (cart.length === 0) {
                console.log("Giỏ hàng của bạn đang trống");
            } else {
                let total = 0;
                console.log("Danh sách sản phẩm trong giỏ hàng:");
                cart.forEach((item, index) => {
                    let subtotal = item.price * item.quantity;
                    total += subtotal;
                    console.log(`${index + 1}. ${item.name} - Số lượng: ${item.quantity} - Giá: ${item.price} VND - Thành tiền: ${subtotal} VND`);
                });
                console.log(`Tổng số tiền cần thanh toán: ${total} VND`);
            }
            break
        case 5:
            console.log("Cảm ơn bạn đã sử dụng")
            break
        default :
            console.log("Dữ liệu ko hợp lệ hãy nhập lại")
            break
    }
}
function search(key, value) {
    let findIndex = -1;
    for (let i in products) {
        if (value == products[i][key]) { 
            findIndex = i;
            break;
        }
    }
    return findIndex;
}