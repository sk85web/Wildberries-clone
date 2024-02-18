import { basketArray } from './constants'
import { generateBasketModal } from './generate-basket-modal'

function addInBasketClick(data) {
  if (basketArray.indexOf(data) === -1) {
    basketArray.push(data)
    generateBasketModal(basketArray)
  }
}

export { addInBasketClick }
