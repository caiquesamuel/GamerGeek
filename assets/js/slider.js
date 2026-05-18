// slider infinito automático
function iniciarSlider(){
    const slider =
        document.querySelector(".slider-container");
    if(!slider) return;
    let scrollAmount = 0;
    setInterval(() => {
        scrollAmount += 1;
        slider.scrollLeft += 1;

        // reinicia
        if(scrollAmount >= slider.scrollWidth / 2){
            slider.scrollLeft = 0;
            scrollAmount = 0;
        }
    }, 20);
}
iniciarSlider();