// Math.abs(): Trả về giá trị tuyệt đối (khoảng cách từ số đến 0, luôn dương)
let num1 = -5.5;          
let num2 = 10;            
let num1abs = Math.abs(num1);  
let num2abs = Math.abs(num2);  
alert(num1abs);           
alert(num2abs);           

// Math.ceil(): Làm tròn lên số nguyên gần nhất (dù phần thập phân nhỏ thế nào cũng tròn lên)
let num3 = 4.4;           
let num4 = 5.8;          
let num3ceil = Math.ceil(num3);
let num4ceil = Math.ceil(num4); 
alert(num3ceil);         
alert(num4ceil);         

// Math.floor(): Làm tròn xuống số nguyên gần nhất (bỏ hết phần thập phân)
let num5 = 5.7;           
let num6 = 6.1;          
let num5floor = Math.floor(num5); 
let num6floor = Math.floor(num6); 
alert(num5floor);         
alert(num6floor);         

// Math.round(): Làm tròn đến số nguyên gần nhất (nếu phần thập phân >= 0.5 thì tròn lên, ngược lại tròn xuống)
let num7 = 10.1;          
let num8 = 20.6;          
let num7round = Math.round(num7); 
let num8round = Math.round(num8); 
alert(num7round);         
alert(num8round);         