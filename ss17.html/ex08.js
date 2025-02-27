let day1 = "2006-07-04"
let day2 = "2006-10-28"
let date1 = new Date(day1)
let date2 = new Date(day2)

// tính số thời gian chênh lệch ngày thứ 2 và ngày thứ nhất
// date2 - date1
// tạo 1 biến để lưu trữ số mili giây chênh lệch date2-date1
//b2 
let difference = date2 - date1
let change = ((difference) / (1000 * 60 * 60 * 24))
alert("Độ lệch là " + change + " ngày")