import { deliveryIcon, likeIcon, accountIcon, cartIcon } from './constants'
const body = document.querySelector('body')

const popup = document.createElement('div')
popup.classList.add('popup')
const menuList = document.querySelector('.header__inner-menu')
const innerPopup = document.createElement('div')
innerPopup.classList.add('popup__innerblock')
popup.append(innerPopup)
body.append(popup)

function showPopup() {
  innerPopup.insertAdjacentHTML(
    'afterbegin',
    `
      <ul class="header__inner-menu">
              <li class="menu__icon">
                  <div class="menu__icon-item">
                      ${deliveryIcon}
                      <span>Доставки</span>
              </li>
              <li class="menu__icon">
                  <div class="menu__icon-item">
                      ${likeIcon}
                      <span>Избр.</span>
              </li>
              <li class="menu__icon">
                  <div class="menu__icon-item">
                      ${accountIcon}
                      <span>Войти</span>
              </li>
              <li class="menu__icon">
                  <div class="menu__icon-item">
                      ${cartIcon}
                      <span>Корзина</span>
              </li>
            </ul>`
  )
  popup.classList.add('show-popup')

  const burger = document.querySelector('.burger')
  burger.classList.toggle('burger_close')
}

function closePopup() {
  innerPopup.innerHTML = ''
  popup.classList.remove('show-popup')
  const burger = document.querySelector('.burger')
  burger.classList.toggle('burger_close')
}

export { showPopup, closePopup }
