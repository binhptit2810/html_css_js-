let num1 = +prompt("Mời bạn nhập số a")
let num2 = +prompt("Mời bạn nhập số b")
let num3 = +prompt("Mời bạn nhập số c")
let delta = ( num2 * num2 ) - (4 * ( num1 * num3))
if(delta < 0){
    alert("Phương trình vô nghiệm")
}else if(delta == 0){
    let result = - ( num2 / (2 * num1))
    alert("Phương trình có nghiệm kép x1 = x2 = " + result)
}else if(delta > 0){
    let result1 = ((-num2 + Math.sqrt(delta))) / 2 * num1
    let result2 = ((-num2 - Math.sqrt(delta))) / 2 * num1
    alert("phương trình có 2 nghiệm phân biệt : x1= " + result1 + "; x2= " + result2)
}else{
    alert("Số bạn nhập chưa đúng hãy nhập lại")
}