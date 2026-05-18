function iniciarMenuMobile(){
    const mobileToggle =
        document.getElementById("mobile-toggle");
    const menu =
        document.querySelector(".menu");
    if(!mobileToggle || !menu) return;
    mobileToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
        if(menu.classList.contains("active")){
            mobileToggle.innerHTML = "✖";
        }else{
            mobileToggle.innerHTML = "☰";
        }
    });
}