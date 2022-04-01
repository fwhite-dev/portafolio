

let ubicacionPrincipal = window.pageXOffset;

window.onscroll = () => {
    let desplazamientoActual = window.pageYOffset;
    if (ubicacionPrincipal >= desplazamientoActual){
        document.getElementById("nav").style.top = "0";
    } else {
        document.getElementById("nav").style.top = "-100px"
    }
    ubicacionPrincipal=desplazamientoActual;
}

const btnHam = document.getElementById("ham")
const enlaces = document.getElementById("nav__items")
const secciones = document.querySelectorAll(".nav__item")
console.log(secciones)

btnHam.addEventListener("click",()=>{
    enlaces.classList.toggle("activado")
})

secciones.forEach(element => {
    element.addEventListener("click",()=>{
        enlaces.classList.toggle("activado")
    })
});