let books = [
    {
        id: 1,
        name: "Harry Potter",
        price: 150000,
        quantity: 10,
        category: "Fantasy"
    },
    {
        id: 2,
        name: "mèng méng",
        price: 200000,
        quantity: 8,
        category: "Fantasy"
    },
    {
        id: 3,
        name: "meo meo",
        price: 180000,
        quantity: 15,
        category: "Fantasy"
    },
    {
        id: 4,
        name: "Conan",
        price: 120000,
        quantity: 12,
        category: "Science Fiction"
    }
];
let cart = [];
let menu = `
1. Hiển thị danh sách sách theo thể loại
2. Thêm sách mới vào kho
3. Tìm kiếm sách theo tên hoặc id
4. Mua sách
5. Sắp xếp sách theo giá
6. Tính tổng tiền trong giỏ hàng
7. Hiển thị tổng số lượng sách trong kho
8. Thoát

Mời bạn nhập lựa chọn: 
`
let input;
while (input !== 8) {
    input = +prompt(menu);
    switch (input) {
        case 1:
            let category = prompt("Nhập thể loại muốn xem");
            let filteredBooks = books.filter(book => book.category.toLowerCase() === category.toLowerCase())
            if (filteredBooks.length > 0) {
                console.log(`Sách thuộc thể loại ${category}:`)
                filteredBooks.forEach(book => {
                    console.log(`   - ${book.name}, Giá: ${book.price} VND, Số lượng: ${book.quantity}`)
                })
            }else{
                console.log("Không tìm thấy sách trong thể loại này")
            }
            break
        case 2:
            let newId = +prompt("Nhập mã sách mới:")
            if(books.some(book => book.id === newId)) {
                console.log("Mã sách đã tồn tại");
            }else{
                let newBook = {
                    id: newId,
                    name: prompt("Nhập tên sách"),
                    price: +prompt("Nhập giá sách"),
                    quantity: +prompt("Nhập số lượng:"),
                    category: prompt("Nhập thể loại:")
                }
                books.push(newBook);
                console.log("Đã thêm sách mới thành công!");
            }
            break
        case 3:
            let searchType = prompt("Tìm theo id hoặc tên(1 :id; 2:tên)")
            if (searchType === "1"){
                let searchId = +prompt("Nhập ID sách cần tìm:");
                let foundBook = books.find(book => book.id === searchId);
                if (foundBook) {
                    console.log(`Tìm thấy: ${foundBook.name}, Giá: ${foundBook.price} VND, Số lượng: ${foundBook.quantity}`);
                } else {
                    console.log("Không tìm thấy sách với ID này");
                }
            } else if (searchType === "2"){
                let searchName = prompt("Nhập tên sách cần tìm:")
                let foundBooks = books.filter(book => book.name.toLowerCase().includes(searchName.toLowerCase()))
                if (foundBooks.length > 0){
                    foundBooks.forEach(book => {
                        console.log(`Tìm thấy: ${book.name}, Giá: ${book.price} VND, Số lượng: ${book.quantity}`)
                    });
                } else {
                    console.log("Không tìm thấy sách với tên này");
                }
            } else {
                console.log("Lựa chọn không hợp lệ");
            }
            break
        case 4:
            let buyId = +prompt("Nhập ID sách muốn mua:");
            let bookIndex = books.findIndex(book => book.id === buyId);
            if (bookIndex === -1) {
                console.log("Không tìm thấy sách với ID này");
            } else if (books[bookIndex].quantity === 0) {
                console.log("Sách đã hết hàng");
            } else {
                let quantityToBuy = +prompt(`Nhập số lượng muốn mua (${books[bookIndex].name} - Còn: ${books[bookIndex].quantity}):`);
                if (quantityToBuy <= 0){
                    console.log("Số lượng phải lớn hơn 0");
                }else if(books[bookIndex].quantity < quantityToBuy) {
                    console.log(`Không đủ số lượng, chỉ còn ${books[bookIndex].quantity} cuốn`);
                }else{
                    let buyBook = {
                        id: books[bookIndex].id,
                        name: books[bookIndex].name,
                        price: books[bookIndex].price,
                        quantity: quantityToBuy
                    };
                    cart.push(buyBook);
                    books[bookIndex].quantity -= quantityToBuy;
                    console.log(`Đã thêm ${quantityToBuy} cuốn ${books[bookIndex].name} vào giỏ hàng`);
                }
            }
            break;
        case 5:
            let sortChoice = +prompt("Sắp xếp theo giá (1: tăng dần; 2:giảm dần )");
            if (sortChoice === 1){
                let sortedBooks = [...books].sort((a, b) => a.price - b.price);
                console.log("Sách sắp xếp theo giá tăng dần:");
                sortedBooks.forEach(book => {
                    console.log(`- ${book.name}, Giá: ${book.price} VND, Số lượng: ${book.quantity}`);
                })
            } else if (sortChoice === 2) {
                let sortedBooks = [...books].sort((a, b) => b.price - b.price);
                console.log("Sách sắp xếp theo giá giảm dần:")
                sortedBooks.forEach(book => {
                    console.log(`- ${book.name}, Giá: ${book.price} VND, Số lượng: ${book.quantity}`)
                });
            } else {
                console.log("Lựa chọn không hợp lệ")
            }
            break
        case 6:
            if (cart.length === 0) {
                console.log("Giỏ hàng đang trống");
            } else {
                let total = 0;
                console.log("Sách trong giỏ hàng:");
                cart.forEach((item, index) => {
                    let subtotal = item.price * item.quantity;
                    total += subtotal;
                    console.log(`${index + 1}. ${item.name} - Số lượng: ${item.quantity} - Giá: ${item.price} VND - Thành tiền: ${subtotal} VND`);
                });
                console.log(`Tổng số tiền cần thanh toán: ${total} VND`);
            }
            break;
        case 7:
            let totalQuantity = books.reduce((sum, book) => sum + book.quantity, 0);
            console.log(`Tổng số lượng sách trong kho: ${totalQuantity} cuốn`);
            break;
        case 8:
            console.log("Cảm ơn bạn đã sử dụng chương trình!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ, vui lòng thử lại");
            break;
    }
}