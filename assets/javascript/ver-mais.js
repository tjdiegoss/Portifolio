
const botaoVerMais = document.querySelector('button');
const projetos = document.querySelectorAll('.escondido');



function cliqueVer (e) {
    projetos.forEach( (element) => {
        if (element.classList.contains('escondido')) {
            element.classList.remove('escondido');
            element.classList.add('visivel');
            botaoVerMais.innerHTML = 'Ver menos';
        } else {
            element.classList.add('escondido');
            element.classList.remove('visivel');
            botaoVerMais.innerHTML = 'Ver mais';
        }
    } )
}

function maisProjetos (element) {
    element.addEventListener('click', cliqueVer)
}


maisProjetos(botaoVerMais);
