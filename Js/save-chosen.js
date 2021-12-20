import { areaofcards } from './gener-cart.js'
import { getToken } from './api-request.js'
getToken()

const elemcheckbox = document.getElementById('favorite')

function selectChosenElement(arr) {
  let cartelemen = document.querySelectorAll('.card')
  let elementsOfChoosen = []
  cartelemen.forEach((element) => {
    element.addEventListener('click', (Event) => {
      const { target } = Event
      if (!target.classList.contains('button__icon-svg')) {
        return
      }
      element.remove()
      element.setAttribute('data-id', '4')
      elementsOfChoosen.push(element)
      console.log(elementsOfChoosen)
    })
    saveChosenElement(elementsOfChoosen)
  })
}

function saveChosenElement(arr1) {
  elemcheckbox.addEventListener('click', (Event) => {
    let cartelemen = document.querySelectorAll('.card')

    for (let item of cartelemen) {
      item.remove()
    }
    const { target } = Event

    if (!target.classList.contains('.filter__check')) {
    }

    for (let i = 0; i < arr1.length; i++) {
      arr1[i].remove()
      if (!arr1[i].hasAttribute('data-id')) {
        arr1[i].remove()
      }
      const elmaddtochosen = arr1[i].querySelector('.card__footer>.button')
      elmaddtochosen.classList.remove('button_add')
      elmaddtochosen.classList.add('button_remove')
      areaofcards.append(arr1[i])
    }
  })
}

export { saveChosenElement, selectChosenElement }
