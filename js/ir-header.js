window.addEventListener('scroll', function() {
    var irHeader = document.querySelector("go-up");
    irHeader.classList.toggle("ir-a-header",window.scrollY > 80)
    irHeader.style.opacity = 1;
});