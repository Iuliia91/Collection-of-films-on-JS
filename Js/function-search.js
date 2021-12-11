import { createCards, generatmokCart } from './gener-cart.js'

function getSearching() {
  const inputElem = document.querySelector('.search__input')
  const cardElement = document.querySelectorAll('.card')
  const titelelem = document.querySelectorAll('.card-header__title')
  const local = document.body.outerHTML

  inputElem.oninput = (Event) => {
    let userText = Event.target.value

    let arr = []

    if (userText != '') {
      cardElement.forEach((element) => {
        if (
          element
            .querySelector('.card-header__title')
            .innerHTML.search(userText) == -1
        ) {
          element.remove()
        }
      })
    } else {
      cardElement.forEach((element) => {
        element.remove()
      })
      createCards(generatmokCart())
      getSearching()
    }
  }
}

export { getSearching }
