import { loadFromLocalStorage } from './local-storage'

function markBasket() {
  const basketMarker = document.getElementById('header-mark')
  const dataStorage = loadFromLocalStorage()
  if (dataStorage.length) {
    basketMarker.classList.add('show')
    basketMarker.innerText = dataStorage.length
  }
}

function unMarkBasket() {
  const basketMarker = document.getElementById('header-mark')
  basketMarker.classList.remove('show')
}

function markBasketBurger() {
  const basketMarker = document.getElementById('burger-mark')
  const dataStorage = loadFromLocalStorage()
  if (dataStorage.length) {
    basketMarker.classList.add('menu__icon-item-marker-burger-show')
    basketMarker.innerText = dataStorage.length
  }
}

function unMarkBasketBurger() {
  const basketMarker = document.getElementById('burger-mark')
  basketMarker.classList.remove('menu__icon-item-marker-burger-show')
}

export { markBasket, unMarkBasket, markBasketBurger, unMarkBasketBurger }
