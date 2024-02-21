import { root } from './constants'
import { closeModal } from './close-modal'
import { generateBasketModal } from './generate-basket-modal'
import { loadFromLocalStorage } from './local-storage'

const body = document.querySelector('body')

function showBasketModal() {
  const dataStorage = loadFromLocalStorage()
  const modalWindowBasket = generateBasketModal(dataStorage)
  body.classList.add('lock')
  root.classList.add('root-lock')
  root.append(modalWindowBasket)
  const closeBtn = modalWindowBasket.querySelector('.card-modal__info-close')
  closeBtn.addEventListener('click', closeModal)

  const modalBody = document.querySelector('.card-modal')
  modalBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('card-modal')) closeModal()
  })
}

export { showBasketModal }
