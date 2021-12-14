import { madeCardsFilms, getFilmsCards } from './gener-cart.js'

function getSearching(arr) {
  const inputElem = document.querySelector('.search__input')
  const cardElement = document.querySelectorAll('.card')
  const titelelem = document.querySelectorAll('.card-header__title')
  const local = document.body.outerHTML

  console.log(cardElement)
  inputElem.oninput = (Event) => {
    let userText = Event.target.value

    // //let arr = []

    // if (userText != '') {
    //   cardElement.forEach((elements) => {
    //     console.log(elements)
    //     //console.log(document.querySelector('.card-header__title'))
    //     if (
    //       elements
    //         .querySelector('.card-header__title')
    //         .innerHTML.search(userText) == -1
    //     ) {
    //       elements.remove()
    //     }
    //   })
    // } else {
    //   cardElement.forEach((elements) => {
    //     elements.remove()
    //   })
    //   //createCards(generatmokCart())
    //   //madeCardsFilms()
    //   getSearching()
    // }
    if (userText != '') {
      cardElement.forEach((element) => {
        console.log(element)
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
      //createCards(generatmokCart())
      //madeCardsFilms()
      getSearching()
    }
  }
}

export { getSearching }
