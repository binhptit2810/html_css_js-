let modal = document.getElementById("myModal");
function openModal() {
    modal.style.display = "block";
}
function closeModal() {
    modal.style.display = "none";
}
modal.onclick = function(event) {
    if (event.target === modal) {
        closeModal();
    }
}