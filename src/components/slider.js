const slider = document.createElement('section')
slider.classList.add('slider-section')

const prevButton = document.createElement('button')
prevButton.type = 'button'
prevButton.classList.add('slider__btn-prev')

prevButton.innerHTML = `<svg class="slider-arrow-prev" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>`

const nextButton = document.createElement('button')
nextButton.type = 'button'
nextButton.classList.add('slider__btn-next')

nextButton.innerHTML = `<svg class="slider-arrow-next" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff"><path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>`

const sliderWrapper = document.createElement('div')
sliderWrapper.classList.add('slider__wrapper')
sliderWrapper.classList.add('slider')

const sliderLine = document.createElement('div')
sliderLine.classList.add('slider__line')

const slide1 = document.createElement('img')
const slide2 = document.createElement('img')
const slide3 = document.createElement('img')

// slide1.src = './assets/images/slider/1.jpg" alt="slide-1'
// slide2.src = './assets/images/slider/2.jpg" alt="slide-2'
// slide3.src = './assets/images/slider/3.jpg" alt="slide-3'

slide1.src =
  'https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/poster/ru/globalmainv3/1352x250/skidon_2704_11_02.jpg'
slide2.src =
  'https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/poster/ru/globalmainv3/1352x250/hit_2704_11_02.jpg'
slide3.src =
  'https://static-basket-01.wbbasket.ru/vol1/crm-bnrs/poster/ru/globalmainv3/1352x250/delivery_2704_by.jpg'

slide1.alt = 'slide-1'
slide2.alt = 'slide-2'
slide3.alt = 'slide-3'

sliderLine.append(slide1, slide2, slide3)

sliderWrapper.append(prevButton, sliderLine, nextButton)

const sliderIndicators = document.createElement('ul')
sliderIndicators.classList.add('slider__indicators')

const dotIndicator1 = document.createElement('li')
dotIndicator1.classList.add('slider__indicators-item')
const dotIndicator2 = document.createElement('li')
dotIndicator2.classList.add('slider__indicators-item')
const dotIndicator3 = document.createElement('li')
dotIndicator3.classList.add('slider__indicators-item')

sliderIndicators.append(dotIndicator1, dotIndicator2, dotIndicator3)

slider.append(sliderWrapper, sliderIndicators)

export { slider }
