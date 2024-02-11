import {
  logo,
  searchIcon,
  searchCameraIcon,
  deliveryIcon,
  likeIcon,
  accountIcon,
  cartIcon,
} from './constants'

import { showPopup, closePopup } from './burger-menu'

const header = document.createElement('header')

header.insertAdjacentHTML(
  'afterbegin',
  `<div class="container">
    <div class="header">
      <div class="header__inner-logo">
        ${logo}
      </div>
      <div class="header__inner search__block">
        <label for="search-input">${searchIcon}</label>
        <input class="search__block-input" placeholder="Найти товары" id="search-input">
        <label for="search-input">${searchCameraIcon}</label>
      </div>
      <div class="burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
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
      </ul>
    </div>
  </div>`
)

document.addEventListener('DOMContentLoaded', () => {
  const popup = document.querySelector('.popup')
  if (document.querySelector('.burger')) {
    const burger = document.querySelector('.burger')
    burger.addEventListener('click', () => {
      if (popup.classList.contains('show-popup')) {
        closePopup()
      } else showPopup()
    })
    popup.addEventListener('click', (e) => {
      if (e.target.classList.contains('show-popup')) {
        closePopup()
      }
    })
  }
})

export { header }
