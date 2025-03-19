// console.log(document)
// let h1 = document.getElementById("demo-id")  //h1
// console.log(h1)
// let htmlList = document.getElementsByClassName("demo-class") // [h1,b,u]
// console.log(htmlList) // html colection === gần giống mảng
// console.log(htmlList[0])// h1
// console.log(htmlList[2]) // u
// for(let i =0 ; i< htmlList.length;i++){
//     console.log(htmlList[i])
// }
let h1 = document.getElementById("demo-id")
console.log(h1.innerHTML)
console.log(h1.innerText)
console.log(h1.textContent)
let div = document.getElementById("demo-inner")
console.log(div.innerHTML)
console.log(div.innerText)
console.log(div.textContent)

div.innerText = "chào mày nha"
div.innerHTML = `
<ul>
    <li>hello</li>
    <li>chào</li>
    <li>hi</li>
</ul>
`

div.id// "demo-inner"
// console.log(div.id)
// console.log(div.style)
// div.style.backgroundColor = "pink"
// div.style.borderRadius = "50%"
// div.style.textAlign = "center"
// div.style.padding = "40px"
console.log(div.classList)
div.classList.add("class-02")
div.classList.add("demo")
div.classList.remove("demo")

console.log(div.children[0].children[2].parentElement.parentElement.parentElement.parentElement)