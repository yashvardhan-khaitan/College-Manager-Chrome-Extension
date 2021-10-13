
document.getElementById("closePopup").addEventListener("click", closeModal);

function closeModal() {
    var modal = document.getElementById("newsletter");
    modal.style.display = "none";
}

function openModal() {
    var modal = document.getElementById("newsletter");
    modal.classList.add("show");
}

window.onload = function () {
    setTimeout(() => { openModal(); }, 3000);
}

window.onclick = function(event) {
    var modal = document.getElementById("newsletter");
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
