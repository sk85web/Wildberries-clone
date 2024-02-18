import { root } from './constants'
import { closeModal } from './close-modal'
import { basketArray } from './constants'
import { generateBasketModal } from './generate-basket-modal'

const body = document.querySelector('body')

function showBasketModal() {
  const basketIcon = document.querySelectorAll('.menu__icon')[3]

  basketIcon.addEventListener('click', (e) => {
    const modalWindowBasket = generateBasketModal(basketArray)
    body.classList.add('lock')
    root.classList.add('root-lock')
    root.append(modalWindowBasket)

    const closeBtn = modalWindowBasket.querySelector('.card-modal__info-close')
    closeBtn.addEventListener('click', closeModal)

    const modalBody = document.querySelector('.card-modal')
    modalBody.addEventListener('click', (e) => {
      if (e.target.classList.contains('card-modal')) closeModal()
    })
  })
}

export { showBasketModal }
