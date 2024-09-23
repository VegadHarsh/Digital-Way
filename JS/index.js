const searchbtn = document.querySelector("#search-btn");
const searchfield = document.querySelector(".search-field");

searchbtn.addEventListener("click", () => {
    if (searchfield.style.width === "50%") {
        searchfield.style.width = "0px";
        searchfield.style.opacity = "0";
    } else {
        searchfield.style.width = "50%";
        searchfield.style.opacity = "1";
    }
});


// Hamburger Manu
const menu = document.querySelector(".nav-links");
const hamburger = document.querySelector(".fa-bars");

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

document.addEventListener("click", (event) => {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnHamburger = hamburger.contains(event.target);

    if (!isClickInsideMenu && !isClickOnHamburger) {
        menu.classList.remove("active");
    }
});


// loding time
document.addEventListener('DOMContentLoaded', function () {
    // Show the loader on initial page load
    document.getElementById('loader').style.display = 'flex';

    // Hide the loader after 2 seconds
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
    }, 2000);

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function (event) {
            const href = this.getAttribute('href');

            
            if (href === './Files/About.html' || href === '../Files/contact.html') {
                event.preventDefault();

                document.getElementById('loader').style.display = 'flex';

                setTimeout(() => {
                    window.location.href = href;
                }, 1000);
            }
        });
    });
});
