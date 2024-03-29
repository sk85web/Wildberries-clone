import { storageKey } from './constants'
import { generateBasketModal } from './generate-basket-modal'
import { loadFromLocalStorage } from './local-storage'
import { markBasket, markBasketBurger } from './markerBasket'

function isCardAlreadyExists(array, newCard) {
  return array.some((card) => card.id === newCard.id)
}

function addInBasketClick(card) {
  // debugger
  const dataStorage = loadFromLocalStorage()
  generateBasketModal(dataStorage)

  if (dataStorage.length === 0) {
    dataStorage.push(card)
    generateBasketModal(dataStorage)
    localStorage.setItem(storageKey, JSON.stringify(dataStorage))
    markBasket()
    markBasketBurger()
  } else if (!isCardAlreadyExists(dataStorage, card)) {
    dataStorage.push(card)
    generateBasketModal(dataStorage)
    localStorage.setItem(storageKey, JSON.stringify(dataStorage))
    markBasket()
    markBasketBurger()
  }
}

export { addInBasketClick }
