

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
console.log(btnHam)
console.log(enlaces)

btnHam.addEventListener("click",()=>{
    enlaces.classList.toggle("activado")
})