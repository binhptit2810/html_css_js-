let div = document.getElementById("body")
let btn = document.getElementById("btn-change")
btn.onclick= function(){
    if(div.style.backgroundColor =="white"){
        div.style.backgroundColor = "black"
        div.style.color = "white"
    }else{
        div.style.backgroundColor = "white"
        div.style.color = "black"
    }
}