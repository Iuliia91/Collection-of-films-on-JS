import { madeCardsFilms, getFilmsCards, areaofcards } from './gener-cart.js'

const elemcheckbox = document.getElementById('favorite')

function selectChosenElement() {
  let cartelemen = document.querySelectorAll('.card')

  cartelemen.forEach((element) => {
    let elementsOfChoosen = []
    element.addEventListener('click', (Event) => {
      const { target } = Event

      if (target.classList.contains('button__icon-svg')) {
        element.remove()
      }
      element.setAttribute('data-id', '4')
      elementsOfChoosen.push(element)
      saveChosenElement(elementsOfChoosen)
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
