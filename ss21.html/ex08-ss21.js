for (let num = 100; num < 1000; num = num + 1) {
    let hundreds = Math.floor(num / 100);       
    let tens = Math.floor((num / 10) % 10);    
    let units = num % 10;                      
    if (( (hundreds * hundreds * hundreds) + ( tens * tens * tens ) + ( units * units * units)) === num) {
        console.log(`${num} là số Armstrong`);
    }
}