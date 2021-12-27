import { removeClass, BUTTON_FOR_SORTING } from './sort.js'

const elemcheckbox = document.getElementById('favorite')

let elementsOfChoosen = []

function selectChosenElement() {
  let cartelemen = document.querySelectorAll('.card')

  cartelemen.forEach((element) => {
    element.addEventListener('click', (Event) => {
      const { target } = Event

      if (target.classList.contains('button_add')) {
        element.remove()

        element.setAttribute('data-favorit', 'true')
        const elmaddtochosen = element.querySelector(
          '.card__footer >.card__button'
        )

        elmaddtochosen.classList.remove('button_add')
        elmaddtochosen.classList.add('button_remove')

        elementsOfChoosen.push(element.innerHTML)

        localStorage.setItem('test', JSON.stringify(elementsOfChoosen))
        deleteselectivelement(cartelemen)
      }
    })
  })
}

function deleteselectivelement(arr) {
  console.log(arr)
  const areaofcards = document.querySelector('.film-list')
  let cartelemen = document.querySelectorAll('.card')

  let m = []
  JSON.parse(localStorage.getItem('test')).forEach((item) => {
    let cartElement = document.createElement('div')
    cartElement.classList.add('card')
    cartElement.insertAdjacentHTML('afterBegin', item)
    console.log(cartElement)
    m.push(cartElement)

    return cartElement
  })
  let b = cartelemen.concat(m)
  console.log(b)
}

function saveChosenElement() {
  elemcheckbox.addEventListener('click', (Event) => {
    const { target } = Event

    removeClass(BUTTON_FOR_SORTING, 'button_checked')
    const areaofcards = document.querySelector('.film-list')
    areaofcards.innerHTML = ''

    JSON.parse(localStorage.getItem('test')).forEach((item) => {
      let cartElement = document.createElement('div')
      cartElement.classList.add('card')
      cartElement.insertAdjacentHTML('afterBegin', item)
      areaofcards.append(cartElement)
    })

    let cartelemen = document.querySelectorAll('.card')

    cartelemen.forEach((element, index) => {
      element.addEventListener('click', (Event) => {
        if (Event.target.classList.contains('button__icon-svg')) {
          element.remove()

          let deleteElementFromLocalStorage = JSON.parse(
            localStorage.getItem('test')
          )
          deleteElementFromLocalStorage.splice(index, 1)

          localStorage.setItem(
            'test',
            JSON.stringify(deleteElementFromLocalStorage)
          )
        }
      })
    })
  })
}

export { saveChosenElement, selectChosenElement }
