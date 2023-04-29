const shoppingIconDiv = document.querySelector("#shopping-icon");
const closeSpan = document.querySelector("#close");
const shoppingCartDiv = document.querySelector("#shopping-cart");

shoppingIconDiv.addEventListener("click", () => {
    shoppingCartDiv.classList.toggle("active");
});

closeSpan.addEventListener("click", () => {
    shoppingCartDiv.classList.toggle("active");
});

// theme
const themeButton = document.getElementById("theme-button");
const themeButtonIcon = document.querySelector("#theme-button > i");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeButtonIcon.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

if (selectedTheme) {
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    themeButtonIcon.classList[selectedIcon === "ri-sun-line" ? "add" : "remove"](
        iconTheme
    );
}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButtonIcon.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});