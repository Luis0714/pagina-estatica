document.addEventListener("DOMContentLoaded",async ()=>{
    loadMainPage()
    const opciones = document.querySelectorAll(".opciones a");
    console.log("Opciones",opciones)
    opciones.forEach(opcion => opcion.addEventListener('click', manageOptions));
});

async function manageOptions(event) {
    event.preventDefault()
    const option = event.target.text
    const container = 'main'
    const element = document.querySelector(container)
    var url = ''
    switch (option) {
        case 'StakeHolders':
            url = '/views/stakeholders.html'
            break;
        case 'Negocio':
            url = '/views/negocio.html'
            break;
        case 'Observaciones':
            url = '/views/observaciones.html'
            break;
        case 'Requerimientos':
            url = '/views/requerimientos.html'
            break;
        default:
            return
            
    }
    const response = await fetch(url)
    const html = await response.text()
    element.innerHTML = html;
}


async function loadMainPage(){
    const container = 'main'
    const element = document.querySelector(container)
    var url = '/views/stakeholders.html'
    const response = await fetch(url)
    const html = await response.text()
    element.innerHTML = html;
}

