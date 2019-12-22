const anchors = document.querySelectorAll('a[href*="#"]');

for (const anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}



document.querySelector('.toggle').addEventListener("click", function(event) {

    const nav = document.querySelectorAll('.nav__link');
    if (document.querySelector('.toggle--active')) {
        for (const navLink of nav) {
            navLink.classList.remove('nav__link--active');
        }
        document.querySelector('.toggle').classList.remove('toggle--active');
    } else {
        for (const navLink of nav) {
            navLink.classList.add('nav__link--active');
        }
        document.querySelector('.toggle').classList.add('toggle--active');
    }


})