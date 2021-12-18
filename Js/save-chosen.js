import { madeCardsFilms, getFilmsCards, areaofcards } from './gener-cart.js'
import { getToken, getFilmsData, arr } from './Api-request.js'
getToken()

const elemcheckbox = document.getElementById('favorite')

function selectChosenElement(arr) {
  let cartelemen = document.querySelectorAll('.card')
  console.log(cartelemen)
  cartelemen.forEach((element) => {
    let elementsOfChoosen = []

    element.addEventListener('click', (Event) => {
      console.log(element)
      const { target } = Event
      if (target.classList.contains('button__icon-svg')) {
        element.remove()
      }
      element.setAttribute('data-id', '4')
      elementsOfChoosen.push(element)
      saveChosenElement(elementsOfChoosen)
      madeCardsFilms(arr)
    })
  })
}

function saveChosenElement(arr) {
  let cartelemen = document.querySelectorAll('.card')
  elemcheckbox.addEventListener('click', (Event) => {
    const { target } = Event
    if (!target.classList.contains('filter__check')) {
      return
    }
    for (let i = 0; i < cartelemen.length; i++) {
      if (!cartelemen[i].hasAttribute('4')) {
        cartelemen[i].remove()
      }
    }
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
      const elmaddtochosen = arr[i].querySelector('.card__footer>.button')
      elmaddtochosen.classList.remove('button_add')
      elmaddtochosen.classList.add('button_remove')
      areaofcards.append(arr[i])
    }
  })
}

export { saveChosenElement, selectChosenElement }
