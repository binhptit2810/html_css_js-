let arr = [1,4,7,8,3]
let tongle =0 
let tongchan =0
for(let i = 0; i < arr.length; i = i + 1){
    if(arr[i] % 2 == 0){
        tongchan += arr[i]
    }else{
        tongle += arr[i]
    }
}
alert("tổng các số chẵn là : " + tongchan)
alert("Tổng các số lẻ là " + tongle)