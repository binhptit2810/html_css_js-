let number1 = +prompt("Mời bạn nhập vào số a")
let number2 = +prompt("Mời bạn nhập vào số b")
let number3 = +prompt("Mời bạn nhập vào số c")

let delta = number1 > 0 ?  ((number2 * number2) - 4* (number1 * number3)) : "vo nghiem"

let x1 = ((-number2 + Math.sqrt(delta)) / (2 * number1))
let x2 = ((-number2 - Math.sqrt(delta)) / (2 * number1))

alert(x1)
alert(x2)

alert(delta);