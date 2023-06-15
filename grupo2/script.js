var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerViuw:"auto",
    coverflowEffect:{
        rotate:15,
        strech:10,
        depth:300,
        modifier:1,
        slideShadows: true,
    },
    loop: true,
});