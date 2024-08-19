const cardPokemon = document.querySelectorAll('.js-open-details-pokemon')
const btnCloseModal = document.querySelector('.js-close-details-pokemon')

// Função para abrir o modal - Adicionar a class 'open-modal' na div 'box'
function openDatailsPokemon (card) {
    document.documentElement.classList.add('open-modal')
}

// Função para fechar o modal - Remover a class 'open-modal' da div 'box'
function closeDatailsPokemon (card) {
    document.documentElement.classList.remove('open-modal')
}

// Adicioanr evento nos cards
cardPokemon.forEach(card => {
    card.addEventListener('click', openDatailsPokemon)
})

// Adicionar evento no botão de fechar
btnCloseModal.addEventListener('click', closeDatailsPokemon)

