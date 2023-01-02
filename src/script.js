const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

const menu = document.getElementById("hamburger-menu");

menu.addEventListener("click", () => {
    sidebar.classList.toggle("ml-[-210px]");
    menu.classList.toggle("fa-xmark");
})
