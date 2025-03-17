const contactList = []
let menu = `
--------MENU--------
1. Thêm đối tượng Contact vào danh sách liên hệ.
2. Hiển thị danh sách danh bạ.
3. Tìm kiếm thông tin Contact theo số điện thoại.
4. Cập nhật thông tin Contact(name, email, phone) theo id.
5. Xóa một đối tượng Contact khỏi danh sách danh bạ theo id.
6. Thoát.

Mời bạn nhập lựa chọn : 
`
let input;
while(input !== 6){
    input = +prompt(menu)
    switch(input){
        case 1:
            let name = prompt("Mời bạn nhập vào tên")
            let email = prompt("Mời bạn nhập vào email")
            let phone = prompt("Mời bạn nhập vào số điện thoại")
            let contact = {
                id: Math.random(),
                name,
                email,
                phone,
            }
            contactList.push(contact)
            break
        case 2:
            displayContact()
            break
        case 3:
            let searchPhone = prompt("Mời bạn nhập số điện thoại muốn tìm kiếm")
            let findIndex = search("phone", searchPhone)
            if(findIndex === -1){
                console.log('Không có số điện thoại nào với số điện thoại ' + searchPhone)
            }else{
                displayContact(contactList[findIndex], findIndex)
            }
            break
        case 4:
            let updateId = prompt("Mời bạn nhập ID liên hệ cần cập nhật")
            let updateIndex = search("id", updateId)
            if(updateIndex === -1){
                console.log('Không tìm thấy liên hệ với ID: ' + updateId)
            }else{
                let newName = prompt("Nhập tên mới:")
                let newEmail = prompt("Nhập email mới :")
                let newPhone = prompt("Nhập số điện thoại mới :") 
                contactList[updateIndex] = {
                    id: contactList[updateIndex].id,  
                    name: newName,                    
                    email: newEmail,              
                    phone: newPhone                
                }
                console.log("Đã cập nhật thông tin liên hệ!")
            }
            break
        case 5:
            let deleteId = prompt("Mời bạn nhập ID liên hệ cần xóa")
            let deleteIndex = search("id", deleteId)
            if(deleteIndex === -1){
                console.log('Không tìm thấy liên hệ với ID: ' + deleteId)
            }else{
                contactList.splice(deleteIndex, 1)
                console.log("Đã xóa liên hệ thành công!")
            }
            break
        case 6:
            console.log("Cảm ơn bạn đã sử dụng")
            break
        default:
            console.log("Lựa chọn không hợp lệ, vui lòng chọn lại!")
            break
    }
}
function displayContact(contact, index) {
    if(!contact){
        contactList.forEach(function (contact, index) {
            console.log(`Liên hệ ${index + 1}:`);
            console.log("Id liên hệ:", contact.id);
            console.log("Tên liên hệ:", contact.name);
            console.log("Email liên hệ:", contact.email);
            console.log("Số điện thoại liên hệ:", contact.phone);
            console.log("---------------------");
        });
    } else {
        console.log(`Liên hệ ${+index + 1}:`);
        console.log("Id liên hệ:", contact.id);
        console.log("Tên liên hệ:", contact.name);
        console.log("Email liên hệ:", contact.email);
        console.log("Số điện thoại liên hệ:", contact.phone);
        console.log("---------------------");
    }
}
function search(key, value) {
    let findIndex = -1;
    for (let i in contactList) {
        if (value == contactList[i][key]) { 
            findIndex = i;
            break;
        }
    }
    return findIndex;
}