import { createCards, generatmokCart } from './gener-cart.js'

function getSearching() {
  const inputElem = document.querySelector('.search__input')
  const cardElement = document.querySelectorAll('.card')
  const titelelem = document.querySelectorAll('.card-header__title')
  const local = document.body.outerHTML

  inputElem.oninput = function () {
    const text = this.value

    inputElem.oninput = function () {
      const text = this.value
      if (text != '') {
        titelelem.forEach((element) => {
          for (let i = 0; i < cardElement.length; i++) {
            if (element.innerText.search(text) == -1) {
              let closestperent = element.closest('div')
              closestperent.remove()
            }
          }
        })
      } else {
      }
    }
  }
}

export { getSearching }
