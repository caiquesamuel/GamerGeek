// HEADER
fetch("/components/header.html")
.then(res => res.text())
.then(data => {
    document.getElementById("header").innerHTML = data;
    iniciarDarkMode();
    iniciarMenuMobile();
});

// FOOTER
fetch("/components/footer.html")
.then(res => res.text())
.then(data => {
    document.getElementById("footer").innerHTML = data;
});