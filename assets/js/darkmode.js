function iniciarDarkMode(){
    const toggle =
        document.getElementById("theme-toggle");
    if(!toggle) return;
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
        if(document.body.classList.contains("light-mode")){
            toggle.innerHTML = "☀️";
        }else{
            toggle.innerHTML = "🌙";
        }
    });
}