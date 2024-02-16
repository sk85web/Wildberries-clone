function generateCardModal(dataCard) {
  const { image, price, deliveryTime, description } = dataCard
  const modal = document.createElement('div')
  modal.classList.add('card-modal')

  const modalInfoBlock = document.createElement('div')
  modalInfoBlock.classList.add('card-modal__info')

  const closeModalIcon = document.createElement('span')
  closeModalIcon.classList.add('card-modal__info-close')
  closeModalIcon.innerText = 'X'

  const modalLeft = document.createElement('div')
  modalLeft.classList.add('card-modal__info-left')
  const modalImage = document.createElement('img')
  modalImage.classList.add('card-modal__info-left-img')
  modalImage.src = image
  modalLeft.append(modalImage)

  const modalRight = document.createElement('div')
  modalRight.classList.add('card-modal__info-right')

  const cardDiscription = document.createElement('div')
  cardDiscription.classList.add('card-modal__info-right-discription')
  cardDiscription.innerText = description

  const cardPrice = document.createElement('div')
  cardPrice.classList.add('card-modal__info-right-price')
  cardPrice.innerText = `${price.toFixed(2)} р.`

  const cardDelivery = document.createElement('div')
  cardDelivery.classList.add('card-modal__info-right-delivery')
  cardDelivery.innerText = `Доставим ${deliveryTime}`

  const cardButton = document.createElement('button')
  cardButton.classList.add('card-modal__info-right-button')
  cardButton.type = 'button'
  cardButton.innerText = 'В корзину'

  modalRight.append(cardDiscription, cardPrice, cardDelivery, cardButton)

  modalInfoBlock.append(modalLeft, modalRight, closeModalIcon)
  modal.append(modalInfoBlock)
  return modal
}

export { generateCardModal }
