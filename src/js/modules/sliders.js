const sliders = (slideSelector, dir, prevSelector, nextSelector) => {
    const slides = document.querySelectorAll(slideSelector);
    let slideIndex = 1,
        pause = false;

    const showSlide = (index) => {
        if (index > slides.length) slideIndex = 1;
        if (index < 1) slideIndex = slides.length;

        slides.forEach(slide => {
            slide.classList.add("animated");
            slide.style.display = "none";
        });

        slides[slideIndex - 1].style.display = "block";
    };
    showSlide(1);

    const plusSlide = n => showSlide(slideIndex += n);

    const shiftSlide = () => {
        try {
            const prev = document.querySelector(prevSelector),
                next = document.querySelector(nextSelector);
    
            prev.addEventListener("click", () => {
                plusSlide(-1);
                slides[slideIndex - 1].classList.remove("slideInLeft");
                slides[slideIndex - 1].classList.add("slideInRight");
                
            })
            next.addEventListener("click", () => {
                plusSlide(1);
                slides[slideIndex - 1].classList.remove("slideInRight");
                slides[slideIndex - 1].classList.add("slideInLeft");
            })
    
        } catch(e) {}
    };
    shiftSlide();

    const activateAnimation = () => {
        if (dir === "vertical") {
            pause = setInterval(() => {
                plusSlide(1);
                slides[slideIndex - 1].classList.add("slideInDown");
            }, 3000);
        } else {
            pause = setInterval(() => {
                plusSlide(1);
                slides[slideIndex - 1].classList.add("slideInLeft");
            }, 3000);
        }
    };
    activateAnimation();

    const pauseAnimation = () => {
        slides[0].parentElement.addEventListener("mouseenter", () => clearInterval(pause));
        slides[0].parentElement.addEventListener("mouseleave", () => activateAnimation());
    };
    pauseAnimation();
};

export default sliders;