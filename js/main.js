var swiper = new Swiper(".bg-slider-thumbs", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 0,
});
var swiper2 = new Swiper(".bg-slider", {
    loop: true,
    spaceBetween: 0,
    thumbs: {
        swiper: swiper,
    },
});
let header = document.querySelector('header');

window.addEventListener('scroll', () =>{ header.classList.toggle('shadow', window.scrollY > 0);
});


const menuBtn = document.querySelector(".nav-menu-btn");

const closeBtn = document.querySelector(".nav-close-btn");

const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    navigation.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigation.classList.remove("active");
});

ScrollReveal().reveal('.SobreNosT',{
    origin: 'left',
    duration: 2000,
    distance: '20%',

});

ScrollReveal().reveal('.members',{
    origin: 'left',
    duration: 4000,
    distance: '10%',

});

ScrollReveal().reveal('#projetos',{
    origin: 'left',
    duration: 4100,
    distance: '10%',

});
