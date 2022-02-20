window.addEventListener('scroll', function() {
    var header = document.querySelector(".go-up");
    header.classList.toggle("ir-a-header",window.scrollY > 200)
});