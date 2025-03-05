let a
let b
let c
for (let i = 0; i < 3; i = i + 1) {
    let num = prompt("Mời bạn nhập vào 1 số (a, b, c theo thứ tự):");
    num = Number(num);
    if (isNaN(num)) {
        alert("Dữ liệu không hợp lệ");
        i--; 
    } else {
        if (i === 0) {
            if (num === 0) {
                alert("Hệ số a phải khác 0");
                i--; 
            } else {
                a = num;
                alert("Dữ liệu hợp lệ");
            }
        } else if (i === 1) {
            b = num;
            alert("Dữ liệu hợp lệ");
        } else if (i === 2) {
            c = num;
            alert("Dữ liệu hợp lệ");
        }
    }
}
let delta = b * b - 4 * a * c;

if (delta > 0) {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert("Nghiệm: x1 = " + x1 + ", x2 = " + x2);
} else if (delta === 0) {
    let x = -b / (2 * a);
    alert("Nghiệm kép: x = " + x);
} else {
    alert("Phương trình vô nghiệm thực");
}