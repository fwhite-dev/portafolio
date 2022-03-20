const body = document.querySelector('body');
console.log(body);

const menu = document.getElementById("menu")
console.log(menu)
menu.addEventListener("click", () => {

    const divMenu = document.createElement("div")
    divMenu.className = "hola"
    divMenu.textContent = "1111111111111"
    divMenu.style.width = "100px"
    divMenu.style.background = "#ffff"
    body.appendChild(divMenu)
})