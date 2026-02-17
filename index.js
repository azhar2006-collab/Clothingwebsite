
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

if (menu) {
    menu.addEventListener("click", () => {
        nav.style.display =
            nav.style.display === "flex" ? "none" : "flex";
    });
}

function Menu() {
    document.getElementById("nav");
    nav.classList.toggle("show");
    

}

