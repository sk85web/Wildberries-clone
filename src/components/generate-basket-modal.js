import { addInBasketClick } from './addInBasketClick'
import { clearBasket } from './clear-basket'

function generateBasketModal(dataCard) {
  const modal = document.createElement('div')
  modal.classList.add('card-modal')
  let totalMoney = 0
  const modalInfoBlock = document.createElement('div')
  modalInfoBlock.classList.add('card-modal__info')
  modalInfoBlock.classList.add('basket-card')

  const busketTitle = document.createElement('h2')
  busketTitle.classList.add('basket-card__title')
  busketTitle.innerText = 'Корзина'

  const basketList = document.createElement('ul')
  basketList.classList.add('basket-card__list')

  if (dataCard.length) {
    dataCard.forEach((card) => {
      const { image, price, deliveryTime, description } = card

      const basketListItem = document.createElement('li')
      basketListItem.classList.add('basket-card__list-item')
      basketListItem.classList.add('basket-item')
      basketListItem.insertAdjacentHTML(
        'afterbegin',
        `
        <img class="basket-item__image" src="${image}" alt="">
        <div class="basket-item__content">
          <p class="basket-item__content-description">${description}</p>
          <span class="basket-item__content-delivery">Доставка \n${deliveryTime}</span>
        </div>
        <span class="basket-item__price">${price.toFixed(2)} руб.</span>
      `
      )
      totalMoney += price

      basketList.append(basketListItem)
      modalInfoBlock.append(busketTitle, basketList)
    })

    const totalAmount = document.createElement('div')
    totalAmount.classList.add('basket-card__total')
    totalAmount.insertAdjacentHTML(
      'afterbegin',
      `   <button class="basket-card__total-btn" type="button">Очистить корзину</button>
          <span class="basket-card__total-calc">Итого ${totalMoney.toFixed(
            2
          )} руб.</span>
        `
    )
    modalInfoBlock.append(totalAmount)

    // Clear basket
    const clearBtn = modalInfoBlock.querySelector('.basket-card__total-btn')
    clearBtn.addEventListener('click', () => {
      clearBasket()
    })
  } else {
    busketTitle.innerText = 'Корзина пуста'
    modalInfoBlock.append(busketTitle)
  }

  const closeModalIcon = document.createElement('span')
  closeModalIcon.classList.add('card-modal__info-close')
  closeModalIcon.innerText = 'X'

  modalInfoBlock.append(closeModalIcon)
  modal.append(modalInfoBlock)

  return modal
}

export { generateBasketModal }
