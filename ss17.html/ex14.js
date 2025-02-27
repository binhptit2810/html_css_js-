let radius = +prompt("Mời bạn nhập vào bán kính")
let height = +prompt("Mời bạn nhập vào chiều cao")
let dientichxq = 2 * 3.14159 * radius * height
let dientichtp = (2 * 3.14159 * radius * height) + (2 * 3.14159 * (radius) * (radius))
let chuviday = 2 * 3.14159 * radius
alert("diện tích xung quanh của hình trụ là : " + dientichxq)
alert("diện tích toàn phần của hình trụ là : " + dientichtp)
alert("chu vi đáy của hình trụ là " + chuviday)