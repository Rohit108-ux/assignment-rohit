var testimonialSwiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    loop: true,
    speed: 600,
    navigation: {
        nextEl: ".testimonial_next",
        prevEl: ".testimonial_prev",
    },
    on: {
        slideChange: function () {
            let realIndex = this.realIndex;
            let profiles = document.querySelectorAll(".testimonial_profile");

            profiles.forEach(function (profile, index) {
                profile.classList.remove("active");

                if (index === realIndex) {
                    profile.classList.add("active");
                }
            });
        }
    }
});


let profiles = document.querySelectorAll(".testimonial_profile");
profiles.forEach(function (profile, index) {
    profile.addEventListener("click", function () {
        testimonialSwiper.slideToLoop(index);
    });
});

AOS.init({
    once: false,
});