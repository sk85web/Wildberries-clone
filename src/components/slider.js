import { sliderImageWidth } from './constants'
import slide1Src from '../assets/images/slider/slide1.jpg'
import slide2Src from '../assets/images/slider/slide2.jpg'
import slide3Src from '../assets/images/slider/slide3.jpg'
import slide4Src from '../assets/images/slider/slide4.jpg'

// html building

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
const slide4 = document.createElement('img')

slide1.src = slide1Src
slide2.src = slide2Src
slide3.src = slide3Src
slide4.src = slide4Src

slide1.alt = 'slide-1'
slide2.alt = 'slide-2'
slide3.alt = 'slide-3'
slide3.alt = 'slide-4'

sliderLine.append(slide1, slide2, slide3, slide4)

sliderWrapper.append(prevButton, sliderLine, nextButton)

const sliderIndicators = document.createElement('ul')
sliderIndicators.classList.add('slider__indicators')

const dotIndicator1 = document.createElement('li')
dotIndicator1.classList.add('slider__indicators-item')
const dotIndicator2 = document.createElement('li')
dotIndicator2.classList.add('slider__indicators-item')
const dotIndicator3 = document.createElement('li')
dotIndicator3.classList.add('slider__indicators-item')
const dotIndicator4 = document.createElement('li')
dotIndicator4.classList.add('slider__indicators-item')

sliderIndicators.append(
  dotIndicator1,
  dotIndicator2,
  dotIndicator3,
  dotIndicator4
)

slider.append(sliderWrapper, sliderIndicators)

// add script
const sliderLength = sliderLine.childElementCount
let position = 0
let activeSlideIndex = 0

function slidePrev() {
  if (position > 0) {
    position -= sliderImageWidth
    activeSlideIndex--
  } else {
    position = sliderImageWidth * (sliderLength - 1)
    activeSlideIndex = sliderLength - 1
  }
  sliderLine.style.right = position + 'px'
  addActiveClass(activeSlideIndex)
}

function slideNext() {
  if (position < sliderImageWidth * (sliderLength - 1)) {
    position += sliderImageWidth
    activeSlideIndex++
  } else {
    position = 0
    activeSlideIndex = 0
  }
  sliderLine.style.right = position + 'px'
  addActiveClass(activeSlideIndex)
}

// Indicators

function addActiveClass(index) {
  for (let indicator of indicators) {
    indicator.classList.remove('active')
  }
  indicators[index].classList.add('active')
}

const indicators = slider.querySelectorAll('.slider__indicators-item')
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    position = sliderImageWidth * index
    sliderLine.style.right = position + 'px'
    addActiveClass(index)
  })
})

prevButton.addEventListener('click', slidePrev)
nextButton.addEventListener('click', slideNext)

window.addEventListener('DOMContentLoaded', () => {
  indicators[0].classList.add('active')
})

export { slider }
