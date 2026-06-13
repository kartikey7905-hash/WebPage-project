

const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if (slider && nextBtn && prevBtn) {

    const scrollAmount = 525;

    nextBtn.addEventListener("click", () => {
        slider.scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });

    prevBtn.addEventListener("click", () => {
        slider.scrollBy({
            left: -scrollAmount,
            behavior: "smooth"
        });
    });

    setInterval(() => {
        if (
            slider.scrollLeft + slider.clientWidth >=
            slider.scrollWidth - 10
        ) {
            slider.scrollTo({
                left: 0,
                behavior: "smooth"
            });
        } else {
            slider.scrollBy({
                left: scrollAmount,
                behavior: "smooth"
            });
        }
    }, 3000);

}