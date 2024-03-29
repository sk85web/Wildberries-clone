import { closeModal } from './close-modal'
import { dataUrl } from './constants'
import { generateCard } from './generate-card'
import { showModal } from './show-modal'
import { searchInput } from './search-input'
import { showBasketModal } from './show-basket-modal'

const cards = document.createElement('section')
cards.classList.add('cards')

const cardsTitle = document.createElement('h1')
cardsTitle.classList.add('cards__title')
cardsTitle.innerText = 'Хиты продаж'

const container = document.createElement('div')
container.classList.add('container')

const cardsWrapper = document.createElement('div')
cardsWrapper.classList.add('cards__wrapper')
container.append(cardsTitle, cardsWrapper)

cards.append(container)

function getData(url) {
  return fetch(url)
    .then((response) => response.json().then((data) => data))
    .catch((err) => {
      console.log('Error in fetch ' + err)
    })
}

function renderOnPage(data) {
  // debugger
  data.forEach((element) => {
    element.image = `${element.image}?random=${Math.random()}`
    const card = generateCard(element)
    cardsWrapper.append(card)
  })
}

getData(dataUrl)
  .then((response) => {
    renderOnPage(response)
    showModal(response)
    searchInput(response)
  })
  .catch((err) => console.log('Error in html-building ' + err))

export { cards }
