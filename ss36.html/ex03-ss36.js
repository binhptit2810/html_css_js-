function changeColor(color) {
    document.body.style.backgroundColor = color;
    localStorage.setItem("backgroundColor", color);
}

document.addEventListener("DOMContentLoaded", function () {
    const savedColor = localStorage.getItem("backgroundColor");
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    }
});

