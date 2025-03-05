let cash = +prompt("Mời bạn nhập số tiền gửi");
let rate = +prompt("Mời bạn nhập lãi suất") / 100; 
let time = +prompt("Mời bạn nhập số tháng gửi");
let CashStart = cash;
let totalCash = cash;   
for (let i = 0; i < time; i++) {
    let CashMonth = totalCash * rate; 
    totalCash = totalCash + CashMonth; 
}
let CashEnd = totalCash - CashStart; 
console.log(`Tiền ban đầu: ${CashStart}`);
console.log(`Lãi suất: ${rate * 100}%`);
console.log(`Số tháng gửi: ${time}`);
console.log("Tiền lại nhận được là " + CashEnd)
console.log("tiền lãi nhận được là " + totalCash)