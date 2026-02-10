const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

if (menu) {
    menu.addEventListener("click", () => {
        nav.style.display =
            nav.style.display === "flex" ? "none" : "flex";
    });
}
