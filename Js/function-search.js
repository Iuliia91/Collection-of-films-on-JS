import { madeCardsFilms } from './gener-cart.js'
import { selectChosenElement } from './save-chosen.js'

function getSearching(arr) {
  const inputElem = document.querySelector('.search__input')

  inputElem.oninput = (Event) => {
    const cardElement = document.querySelectorAll('.card')

    let userText = Event.target.value

    if (userText != '') {
      cardElement.forEach((element) => {
        if (
          element
            .querySelector('.card-header__title')
            .innerHTML.search(userText) == -1
        ) {
          element.remove()
          selectChosenElement(element)
        }
      })
    } else {
      cardElement.forEach((element) => {
        element.remove()
      })
      madeCardsFilms(arr)
    }
  }
}

export { getSearching }
