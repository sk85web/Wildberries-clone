function generateCard(cardData) {
  const { image, price, deliveryTime, description } = cardData

  const card = document.createElement('div')
  card.classList.add('cards-item')

  const cardImageBlock = document.createElement('div')
  cardImageBlock.classList.add('cards-item__img')
  const cardImage = document.createElement('img')
  cardImage.src = `${image}?random=${Math.random()}`
  cardImageBlock.append(cardImage)

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
  cardDescriptionSpan.innerText = description
  cardDescriptionBlock.append(cardDescriptionSpan)

  const cardButtonBlock = document.createElement('div')
  cardButtonBlock.classList.add('cards-item__btn')
  const cardButton = document.createElement('button')
  cardButton.type = 'button'
  cardButton.innerText = 'В корзину'
  cardButtonBlock.append(cardButton)

  card.append(
    cardImageBlock,
    cardPriceBlock,
    cardDeliveryBlock,
    cardDescriptionBlock,
    cardButtonBlock
  )
  return card
}

export { generateCard }
