import { cardLikeIcon } from './constants'

function generateCard(cardData) {
  const { image, price, deliveryTime, description, id } = cardData

  const card = document.createElement('div')
  card.classList.add('cards-item')
  card.id = `card${id}`

  const cardImageBlock = document.createElement('div')
  cardImageBlock.classList.add('cards-item__img')
  const cardImage = document.createElement('img')
  cardImage.src = `${image}?random=${Math.random()}`

  const fastShowBtn = document.createElement('button')
  fastShowBtn.type = 'button'
  fastShowBtn.classList.add('cards-item__img_hover')
  fastShowBtn.innerText = 'Быстрый просмотр'
  cardImageBlock.append(cardImage, fastShowBtn)

  cardImageBlock.addEventListener('mouseenter', () => {
    fastShowBtn.style.display = 'block'
  })
  cardImageBlock.addEventListener('mouseleave', () => {
    fastShowBtn.style.display = 'none'
  })

  const cardPriceBlock = document.createElement('div')
  cardPriceBlock.classList.add('cards-item__price')
  const cardPriceSpan = document.createElement('span')
  cardPriceSpan.innerText = `${price.toFixed(2)} р.`
  cardPriceBlock.append(cardPriceSpan)

  const cardDeliveryBlock = document.createElement('div')
  cardDeliveryBlock.classList.add('cards-item__delivery')
  const cardDeliverySpan = document.createElement('span')
  cardDeliverySpan.innerText = deliveryTime
  cardDeliveryBlock.append(cardDeliverySpan)

  const cardDescriptionBlock = document.createElement('div')
  cardDescriptionBlock.classList.add('cards-item__description')
  const cardDescriptionSpan = document.createElement('span')
  cardDescriptionSpan.classList.add('cards-item__description-span')
  cardDescriptionSpan.innerText = description
  cardDescriptionBlock.append(cardDescriptionSpan)

  const cardButtonBlock = document.createElement('div')
  cardButtonBlock.classList.add('cards-item__btn')
  const cardButton = document.createElement('button')
  cardButton.classList.add('cards-item__btn-button')
  cardButton.type = 'button'
  cardButton.innerText = 'В корзину'
  cardButtonBlock.append(cardButton)

  const cardLikeBlock = document.createElement('div')
  cardLikeBlock.classList.add('cards-item__like')
  cardLikeBlock.innerHTML = cardLikeIcon

  card.append(
    cardImageBlock,
    cardPriceBlock,
    cardDeliveryBlock,
    cardDescriptionBlock,
    cardButtonBlock,
    cardLikeBlock
  )
  return card
}

export { generateCard }
