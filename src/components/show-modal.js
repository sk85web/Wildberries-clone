import { generateCardModal } from './generate-card-modal'
import { root } from './constants'
import { closeModal } from './close-modal'

const body = document.querySelector('body')

function showModal(data) {
  const quickViewButtons = document.querySelectorAll('.cards-item__img_hover')
  quickViewButtons.forEach((button, index) => {
    button.addEventListener('click', (e) => {
      const clickedCard = e.target.closest('.cards-item')
      const dataCard = data.find((card) => card.id === clickedCard.id.slice(4))
      const cardModalWindow = generateCardModal(dataCard)
      body.classList.add('lock')
      root.classList.add('root-lock')
      root.append(cardModalWindow)

      const closeBtn = cardModalWindow.querySelector('.card-modal__info-close')
      closeBtn.addEventListener('click', closeModal)

      const modalBody = document.querySelector('.card-modal')
      modalBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('card-modal')) closeModal()
      })
    })
  })
}

export { showModal }
