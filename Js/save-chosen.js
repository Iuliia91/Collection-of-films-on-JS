import { removeClass, BUTTON_FOR_SORTING } from './sort.js'

const elemcheckbox = document.getElementById('favorite')

function selectChosenElement() {
  let cartelemen = document.querySelectorAll('.card')

  let elementsOfChoosen = []

  cartelemen.forEach((element) => {
    element.addEventListener('click', (Event) => {
      const { target } = Event

      if (!target.classList.contains('button__icon-svg')) {
        return
      }

      element.remove()

      element.setAttribute('data-favorit', 'true')
      const elmaddtochosen = element.querySelector(
        '.card__footer >.card__button'
      )

      elmaddtochosen.classList.remove('button_add')
      elmaddtochosen.classList.add('button_remove')

      elementsOfChoosen.push(element)

      saveChosenElement(elementsOfChoosen)

      //let tips = localStorage.element.innerHTML
      console.log(cartelemen)

      let b = document.querySelectorAll('#card-template')
      console.log(b)
      localStorage.setItem('test', b)
    })
  })
}

window.onload = function () {
  let m = localStorage.getItem('test')
  console.log(m)
}

function saveChosenElement(arr1) {
  elemcheckbox.addEventListener('click', (Event) => {
    let cartelemen = document.querySelectorAll('.card')
    let areaofcards = document.querySelector('.film-list')
    removeClass(BUTTON_FOR_SORTING, 'button_checked')

    const { target } = Event

    for (let item of cartelemen) {
      item.remove()
    }

    arr1.forEach((element) => {
      if (element.hasAttribute('data-favorit')) {
        areaofcards.append(element)
      }
    })
  })
}

export { saveChosenElement, selectChosenElement }
