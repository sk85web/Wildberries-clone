const root = document.getElementById('root')
const logo = `<svg
class="header__inner-logo-svg"
xmlns="http://www.w3.org/2000/svg"
fill="#fff"
>
<path
  d="M89.8217 9.4101C87.4122 9.4101 85.2348 10.1187 83.3769 11.3375V0.226749H78.2384V20.7192C78.2384 26.9548 83.4349 31.9717 89.7927 31.9717C96.1505 31.9717 101.405 26.9832 101.405 20.6625C101.405 14.3419 96.2666 9.4101 89.8217 9.4101ZM63.1423 9.75022C57.4232 10.3171 52.7492 15.1355 52.7492 20.8609C52.7492 26.9265 58.0619 32 64.2745 32C70.4871 32 75.7998 26.9265 75.7998 20.8609C75.7998 18.2817 74.8418 15.9008 73.3031 14.0301L61.923 0.255093H55.2749L63.1423 9.75022ZM23.3699 22.1647L18.6669 10.2037H15.0671L10.335 22.1647L5.60297 10.2037H0L8.27382 31.2347H11.8737L16.8379 18.7068L21.8313 31.2347H25.4311L33.6759 10.2037H28.102L23.3699 22.1647ZM115.34 9.43844C108.924 9.43844 103.728 14.3135 103.728 20.4641C103.728 26.6147 108.285 32 115.05 32C119.114 32 122.394 30.101 124.717 26.8414L120.711 23.667C119.549 25.7077 117.314 26.8981 115.079 26.8981C112.176 26.8981 109.331 24.8857 109.098 21.938H125.907V20.4074C125.907 13.9734 121.553 9.43844 115.34 9.43844ZM180.95 9.43844C174.534 9.43844 169.367 14.3135 169.367 20.7476C169.367 26.7848 173.924 32 180.66 32C184.724 32 188.004 30.101 190.327 26.8414L186.785 23.9221C185.537 25.7927 183.272 26.8981 180.572 26.8981C177.873 26.8981 174.969 24.8857 174.737 21.938H191.488V20.1807C191.488 13.9734 187.162 9.43844 180.95 9.43844ZM198.949 16.3543C198.949 15.0505 200.778 14.0018 203.159 14.0018C205.539 14.0018 208.181 15.1639 209.894 17.0345L213 13.3215C210.039 10.7706 207.049 9.43844 203.304 9.43844C198.63 9.43844 193.811 11.5359 193.811 16.3543C193.811 22.2781 199.036 22.7033 203.304 23.0434C205.684 23.2135 207.803 23.3835 207.803 24.9141C207.803 26.558 205.394 27.3233 203.275 27.3233C200.807 27.3233 198.136 26.3029 196.191 24.0071L192.882 27.4367C195.523 30.5828 199.355 31.9717 203.1 31.9717C207.803 31.9717 212.942 29.7892 212.942 24.8007C212.942 19.1603 207.658 18.6218 203.594 18.225C201.039 17.9699 198.949 17.7431 198.949 16.3543ZM133.717 14.9938V10.2037H128.578V31.2064H133.717V22.3348C134.413 17.3747 138.449 15.3906 143.123 15.3906V10.2037H142.6C138.652 10.2037 135.778 11.6209 133.717 14.9938ZM150.032 14.9938V10.2037H144.893V31.2064H150.032V22.3348C150.729 16.7511 155.664 15.3906 159.438 15.3906V10.2037H158.886C154.996 10.2037 152.064 11.5926 150.032 14.9938ZM44.9689 31.2064H50.1074V0.255093H44.9689V31.2064ZM64.3035 26.9548C60.7618 26.9548 57.8877 24.1771 57.8877 20.7192C57.8877 17.2613 60.7618 14.4553 64.2745 14.4553C67.7872 14.4553 70.7484 17.2329 70.7484 20.7192C70.7484 24.2055 67.8453 26.9548 64.3035 26.9548ZM89.7927 26.9548C86.309 26.9548 83.3769 24.2338 83.3769 20.6909C83.3769 17.1479 86.1348 14.4553 89.8217 14.4553C93.5087 14.4553 96.2666 17.2613 96.2666 20.6909C96.2666 24.1205 93.3345 26.9548 89.7927 26.9548ZM36.0855 31.2064H41.2239V10.2037H36.0855V31.2064ZM161.644 31.2064H166.783V10.2037H161.644V31.2064ZM38.5821 0C36.4919 0 34.75 1.70062 34.75 3.85474C34.75 6.00886 36.579 7.51107 38.5821 7.51107C40.8175 7.51107 42.5013 5.69708 42.5013 3.74136C42.5013 1.78565 40.7304 0 38.5821 0ZM164.199 0C162.109 0 160.338 1.70062 160.338 3.82639C160.338 5.95217 162.051 7.48273 164.286 7.48273C166.521 7.48273 168.06 5.98051 168.06 3.91143C168.06 1.84234 166.318 0 164.199 0ZM175.347 17.7431C176.189 15.674 178.018 14.4553 180.718 14.4553C183.417 14.4553 185.043 15.7307 185.74 17.7431H175.347ZM109.708 17.7431C110.579 15.674 112.379 14.4553 115.05 14.4553C117.72 14.4553 119.462 15.7307 120.159 17.7431H109.708Z"
></path>
</svg>`

const searchIcon =
  '<svg class="search__block-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="50px" height="50px"><g fill="#ca2dcc" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(5.12,5.12)"><path d="M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z"></path></g></g></svg>'

const searchCameraIcon =
  '<svg class="search__block-camera" enable-background="new 0 0 32 32" height="32px" id="Layer_1" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="camera"><path clip-rule="evenodd" d="M16,10.001c-4.419,0-8,3.581-8,8c0,4.418,3.581,8,8,8   c4.418,0,8-3.582,8-8C24,13.583,20.418,10.001,16,10.001z M20.555,21.906c-2.156,2.516-5.943,2.807-8.459,0.65   c-2.517-2.156-2.807-5.944-0.65-8.459c2.155-2.517,5.943-2.807,8.459-0.65C22.42,15.602,22.711,19.391,20.555,21.906z" fill="#ca2dcc" fill-rule="evenodd"/><path clip-rule="evenodd" d="M16,14.001c-2.209,0-3.999,1.791-4,3.999v0.002   c0,0.275,0.224,0.5,0.5,0.5s0.5-0.225,0.5-0.5V18c0.001-1.656,1.343-2.999,3-2.999c0.276,0,0.5-0.224,0.5-0.5   S16.276,14.001,16,14.001z" fill="#ca2dcc" fill-rule="evenodd"/><path clip-rule="evenodd" d="M29.492,9.042l-4.334-0.723l-1.373-3.434   C23.326,3.74,22.232,3,21,3H11C9.768,3,8.674,3.74,8.214,4.886L6.842,8.319L2.509,9.042C1.055,9.283,0,10.527,0,12v15   c0,1.654,1.346,3,3,3h26c1.654,0,3-1.346,3-3V12C32,10.527,30.945,9.283,29.492,9.042z M30,27c0,0.553-0.447,1-1,1H3   c-0.553,0-1-0.447-1-1V12c0-0.489,0.354-0.906,0.836-0.986l5.444-0.907l1.791-4.478C10.224,5.25,10.591,5,11,5h10   c0.408,0,0.775,0.249,0.928,0.629l1.791,4.478l5.445,0.907C29.646,11.094,30,11.511,30,12V27z" fill="#ca2dcc" fill-rule="evenodd"/></g></svg>'

const deliveryIcon =
  '<svg class="delivery-icon" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="256" width="256"/><path d="M224,177.3V78.7a8.1,8.1,0,0,0-4.1-7l-88-49.5a7.8,7.8,0,0,0-7.8,0l-88,49.5a8.1,8.1,0,0,0-4.1,7v98.6a8.1,8.1,0,0,0,4.1,7l88,49.5a7.8,7.8,0,0,0,7.8,0l88-49.5A8.1,8.1,0,0,0,224,177.3Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline fill="#fff" points="222.9 74.6 128.9 128 33.1 74.6" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" x1="128.9" x2="128" y1="128" y2="234.8"/></svg>'

const likeIcon =
  '<svg class="like-icon" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="256" width="256"/><path d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>'

const accountIcon =
  '<svg class="account-icon" data-name="Layer 1" id="Layer_1" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><title/><path d="M24,21A10,10,0,1,1,34,11,10,10,0,0,1,24,21ZM24,5a6,6,0,1,0,6,6A6,6,0,0,0,24,5Z" fill="#fff"/><path d="M42,47H6a2,2,0,0,1-2-2V39A16,16,0,0,1,20,23h8A16,16,0,0,1,44,39v6A2,2,0,0,1,42,47ZM8,43H40V39A12,12,0,0,0,28,27H20A12,12,0,0,0,8,39Z" fill="#fff"/></svg>'

const cartIcon =
  '<svg class="cart-icon" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="256" width="256"/><circle cx="80" cy="216" r="16" fill="#fff"/><circle cx="184" cy="216" r="16" fill="#fff"/><path d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>'

const sliderImageWidth = 1352

export {
  root,
  logo,
  searchIcon,
  searchCameraIcon,
  deliveryIcon,
  likeIcon,
  accountIcon,
  cartIcon,
  sliderImageWidth,
}
