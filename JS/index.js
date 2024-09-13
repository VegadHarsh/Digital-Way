const searchbtn = document.querySelector("#search-btn");
const searchfield = document.querySelector(".search-field");

searchbtn.addEventListener("click", () => {
    if (searchfield.style.width === "70%") {
        searchfield.style.width = "0px";
        searchfield.style.opacity = "0";
    } else {
        searchfield.style.width = "70%";
        searchfield.style.opacity = "1";
    }
});


// Hamburger Manu
const menu = document.querySelector(".nav-links");
const hamburger = document.querySelector(".nav-toggle");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});
