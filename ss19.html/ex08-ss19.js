let month = +prompt("Mời bạn nhập 1 tháng trong năm")
switch(month){
    case 1:
    case 2:
    case 3:
        alert("Mùa Xuân")
        break
    case 4:
    case 5:
    case 6:
        alert("Mùa Hạ")
        break
    case 7:
    case 8:
    case 9:
        alert("Mùa Thu")
        break
    case 10:
    case 11:
    case 12:
        alert("Mùa Đông")
        break
    default:
        alert("Tháng không hợp lệ hãy nhập lại")
        break
}