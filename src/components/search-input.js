function searchInput(data) {
  const searhField = document.querySelector('.search__block-input')
  const allCards = document.querySelectorAll('.cards-item__description-span')

  searhField.addEventListener('input', (e) => {
    const inputValue = e.target.value
    allCards.forEach((card) => {
      if (!card.innerText.includes(inputValue))
        card.closest('.cards-item').classList.add('hidden-card')
      else card.closest('.cards-item').classList.remove('hidden-card')
    })
  })
}

export { searchInput }
