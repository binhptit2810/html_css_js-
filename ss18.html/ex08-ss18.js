let canhA = +prompt("Mời bạn nhập độ dài cạnh a");
let canhB = +prompt("Mời bạn nhập độ dài cạnh b");
let canhC = +prompt("Mời bạn nhập độ dài cạnh c");
if (isNaN(canhA) || isNaN(canhB) || isNaN(canhC) || canhA <= 0 || canhB <= 0 || canhC <= 0) {
    alert("mời bạn nhập lại cạnh của tam giác");
}
else if (canhA + canhB <= canhC || canhA + canhC <= canhB || canhB + canhC <= canhA) {
    alert("Ba cạnh này không tạo thành tam giác");
}
else {
    if (canhA === canhB && canhB === canhC) {
        alert("Đây là tam giác đều");
    } 
    else if (canhA === canhB || canhB === canhC || canhA === canhC) {
        alert("Đây là tam giác cân");
    } 
    else if (
        (canhA * canhA + canhB * canhB === canhC * canhC) || (canhA * canhA + canhC * canhC === canhB * canhB) || (canhB * canhB + canhC * canhC === canhA * canhA)
    ) {
        alert("Đây là tam giác vuông");
    } 
    else {
        alert("Đây là tam giác thường");
    }
}
