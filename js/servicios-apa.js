let animado = document.querySelectorAll(".serv-see");

function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;

    for (var i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado -300 < scrollTop) {
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrar-serv");
        }
    }
}

window.addEventListener('scroll', mostrarScroll);