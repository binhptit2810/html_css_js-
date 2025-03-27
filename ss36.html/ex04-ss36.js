document.addEventListener("DOMContentLoaded", function () {
    let toggleButton = document.querySelector(".dark-mode-toggle");
    let modeIcon = document.getElementById("mode-icon");
    let body = document.body;
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        modeIcon.src = "https://img.icons8.com/ios-filled/50/moon.png";
    }
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        if(body.classList.contains("dark-mode")) {
            modeIcon.src = "https://img.icons8.com/ios-filled/50/moon.png"; 
            localStorage.setItem("darkMode", "enabled");
        }else {
            modeIcon.src = "https://img.icons8.com/ios-filled/50/sun.png"; 
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
