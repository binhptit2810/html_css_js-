let radius = +prompt("Mời bạn nhập vào bán kính của hình cầu")
let thetich = 4 / 3 * Math.PI * ((radius) * (radius) * (radius))
let dientichbm = 4 * Math.PI * ((radius) * (radius))
let chuvilonnhat = 2 * Math.PI * radius
alert("Thể tích hình cầu là " + thetich)
alert("Diện tích bề mặt hình cầu là " + dientichbm)
alert("Chu vi lớn nhất của hình cầu là " + chuvilonnhat)
