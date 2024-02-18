import { basketArray } from './constants'
import { generateBasketModal } from './generate-basket-modal'

function clearBasket() {
  const basketList = document.querySelector('.basket-card__list')
  const totalAmount = document.querySelector('.basket-card__total')
  const basketTitle = document.querySelector('.basket-card__title')
  if (basketList) {
    basketList.innerHTML = ''
  }
  if (totalAmount) {
    totalAmount.remove()
  }

  basketTitle.innerText = 'Корзина пуста'
}

export { clearBasket }
