import { dataUrl } from './constants'
import { generateCard } from './generate-card'

const cards = document.createElement('section')
cards.classList.add('cards')

const container = document.createElement('div')
container.classList.add('container')

const cardsWrapper = document.createElement('div')
cardsWrapper.classList.add('cards__wrapper')
container.append(cardsWrapper)

cards.append(container)

function getData(url) {
  return fetch(url)
    .then((response) => response.json().then((data) => data))
    .catch((err) => {
      console.log('Error in fetch ' + err)
    })
}

function renderOnPage(data) {
  data.forEach((element) => {
    const card = generateCard(element)
    cardsWrapper.append(card)
  })
}

getData(dataUrl)
  .then((response) => {
    // console.log(response)
    // if (!response.ok) throw new Error('Error in implemeting fetch')
    renderOnPage(response)
  })
  .catch((err) => console.log('Error in html-building ' + err))

export { cards }
