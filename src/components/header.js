import {
  logo,
  searchIcon,
  searchCameraIcon,
  deliveryIcon,
  likeIcon,
  accountIcon,
  cartIcon,
} from './constants'
const header = document.createElement('header')

header.insertAdjacentHTML(
  'afterbegin',
  `<div class="container">
    <div class="header__inner">
      <div class="header__inner-logo">
        ${logo}
      </div>
      <div class="header__inner search__block">
        <label for="search-input">${searchIcon}</label>
        <input class="search__block-input" placeholder="Найти товары" id="search-input">
        <label for="search-input">${searchCameraIcon}</label>
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

export { header }
