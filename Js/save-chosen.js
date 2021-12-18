import { madeCardsFilms, getFilmsCards, areaofcards } from './gener-cart.js'
import { getToken, getFilmsData } from './Api-request.js'
getToken()

const elemcheckbox = document.getElementById('favorite')

function selectChosenElement(arr) {
  let cartelemen = document.querySelectorAll('.card')

  cartelemen.forEach((element) => {
    let elementsOfChoosen = []

    element.addEventListener('click', (Event) => {
      console.log(element)
      const { target } = Event
      if (!target.classList.contains('button__icon-svg')) {
        return
      }
      element.remove()
      element.setAttribute('data-id', '4')
      elementsOfChoosen.push(element)
      saveChosenElement(elementsOfChoosen)
      madeCardsFilms(arr)
    })
  })
}

function saveChosenElement(arr1) {
  elemcheckbox.addEventListener('click', (Event) => {
    let cartelemen = document.querySelectorAll('.card')

    for (let item of cartelemen) {
      item.innerHTML = ''
    }
    const { target } = Event

    if (!target.classList.contains('.filter__check')) {
    }

    for (let i = 0; i < arr1.length; i++) {
      arr1[i].remove()
      // if (!arr1[i].hasAttribute('data-id')) {
      //   arr1[i].remove()
      // }
      const elmaddtochosen = arr1[i].querySelector('.card__footer>.button')
      elmaddtochosen.classList.remove('button_add')
      elmaddtochosen.classList.add('button_remove')
      areaofcards.append(arr1[i])
    }
  })
}

export { saveChosenElement, selectChosenElement }
