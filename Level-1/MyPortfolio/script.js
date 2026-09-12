// Typed Text
const typed = new Typed(".multiple-text", {
    strings: [
        "a Web Developer",
        "a Content Creator",
        "an Innovator",
        "a Problem Solver",
        "a Tech Enthusiast"
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Active Navbar
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let top = window.scrollY;

    sections.forEach(sec => {

        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            let activeLink = document.querySelector(
                '.nav-links a[href="#' + id + '"]'
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
});
