let phones = [
    {
        id: 1,
        name: "Galaxy S23",
        price: 20000000,
        quantity: 15,
        company: "Samsung"
    },
    {
        id: 2,
        name: "iPhone 14",
        price: 25000000,
        quantity: 10,
        company: "Apple"
    },
    {
        id: 3,
        name: "Redmi Note 12",
        price: 6000000,
        quantity: 20,
        company: "Xiaomi"
    },
    {
        id: 4,
        name: "iPhone 13",
        price: 18000000,
        quantity: 12,
        company: "Apple"
    }
];
let cart = [];
let menu = `
1. Hiển thị danh sách điện thoại theo hãng
2. Thêm điện thoại mới vào cửa hàng
3. Tìm kiếm điện thoại theo tên hoặc id
4. Mua điện thoại
5. Thoát
Mời bạn nhập lựa chọn: 
`;

let input;
while (input !== 5) {
    input = +prompt(menu)
    switch (input) {
        case 1:
            let company = prompt("Nhập hãng điện thoại muốn xem")
            let filteredPhones = phones.filter(phone => phone.company.toLowerCase() === company.toLowerCase())
            if (filteredPhones.length > 0) {
                console.log(`Điện thoại của hãng ${company}:`)
                filteredPhones.forEach(phone => {
                    console.log(` - ${phone.name}, Giá: ${phone.price} VND, Số lượng: ${phone.quantity}`)
                });
            } else {
                console.log("hãng bạn nhập ko đúng")
            }
            break
        case 2:
            let newId = +prompt("Nhập id điện thoại mới:")
            if (phones.some(phone => phone.id === newId)){
                console.log("Mã điện thoại đã tồn tại")
            }else{
                let newPhone = {
                    id: newId,
                    name: prompt("Nhập tên điện thoại:"),
                    price: +prompt("Nhập giá điện thoại:"),
                    quantity: +prompt("Nhập số lượng:"),
                    company: prompt("Nhập hãng điện thoại:")
                }
                phones.push(newPhone)
                console.log("Đã thêm điện thoại mới thành công")
            }
            break
        case 3:
            let searchType = prompt("Tìm theo id hoặc tên (1:id;2:tên)")
            if (searchType === "1"){
                let searchId = +prompt("Nhập ID điện thoại cần tìm:")
                let foundPhone = phones.find(phone => phone.id === searchId)
                if (foundPhone){
                    console.log(`Tìm thấy: ${foundPhone.name}, Giá: ${foundPhone.price} VND, Số lượng: ${foundPhone.quantity}, Hãng: ${foundPhone.company}`);
                } else{
                    console.log("Không tìm thấy điện thoại với ID này")
                }
            } else if (searchType === "2") {
                let searchName = prompt("Nhập tên điện thoại cần tìm:")
                let foundPhones = phones.filter(phone => phone.name.toLowerCase().includes(searchName.toLowerCase()))
                if (foundPhones.length > 0){
                    foundPhones.forEach(phone => {
                        console.log(`Tìm thấy: ${phone.name}, Giá: ${phone.price} VND, Số lượng: ${phone.quantity}, Hãng: ${phone.company}`);
                    });
                } else {
                    console.log("Không tìm thấy điện thoại với tên này")
                }
            } else {
                console.log("Lựa chọn không hợp lệ");
            }
            break;

        case 4:
            let buyId = +prompt("Nhập id điện thoại muốn mua:");
            let phoneIndex = phones.findIndex(phone => phone.id === buyId);
            if (phoneIndex === -1) {
                console.log("Không tìm thấy điện thoại với id này");
            } else if (phones[phoneIndex].quantity === 0) {
                console.log("Điện thoại đã hết hàng");
            } else {
                let quantityToBuy = +prompt(`Nhập số lượng muốn mua (${phones[phoneIndex].name} - Còn: ${phones[phoneIndex].quantity}):`);
                if (quantityToBuy <= 0) {
                    console.log("Số lượng phải lớn hơn 0");
                } else if (phones[phoneIndex].quantity < quantityToBuy) {
                    console.log(`Không đủ số lượng, chỉ còn ${phones[phoneIndex].quantity} chiếc`);
                } else {
                    let buyPhone = {
                        id: phones[phoneIndex].id,
                        name: phones[phoneIndex].name,
                        price: phones[phoneIndex].price,
                        quantity: quantityToBuy,
                        company: phones[phoneIndex].company
                    };
                    cart.push(buyPhone);
                    phones[phoneIndex].quantity -= quantityToBuy;
                    console.log(`Đã thêm ${quantityToBuy} chiếc ${phones[phoneIndex].name} vào giỏ hàng`);
                    console.log(`Số lượng còn lại trong kho: ${phones[phoneIndex].quantity}`);
                }
            }
            break;
        case 5:
            console.log("Cảm ơn bạn đã sử dụng chương trình!");
            break;

        default:
            console.log("Lựa chọn không hợp lệ, vui lòng thử lại");
            break;
    }
}