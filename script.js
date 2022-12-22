const paineis = document.querySelectorAll('.painel')

paineis.forEach(painel => {
    painel.addEventListener('click', () => {
        removerClassesAtivas()
        painel.classList.add('Ativo')
    })
})

function removerClassesAtivas() {
    paineis.forEach(painel =>{
        painel.classList.remove('Ativo')
    })
}