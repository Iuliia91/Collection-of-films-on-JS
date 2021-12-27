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

        const elmaddtochosen = element.querySelector(
          '.card__footer >.card__button'
        )

        elmaddtochosen.classList.remove('button_add')
        elmaddtochosen.classList.add('button_remove')

        elementsOfChoosen.push(element.innerHTML)

        localStorage.setItem('test', JSON.stringify(elementsOfChoosen))
      }
    })
  })
  deleteselectivelement(cartelemen)
}

function deleteselectivelement(arr) {
  console.log(arr)
  const areaofcards = document.querySelector('.film-list')
  let cartelemens = document.querySelectorAll('.card')

  let m = []
  let b = []

  JSON.parse(localStorage.getItem('test')).forEach((item) => {
    let cartElement = document.createElement('div')
    cartElement.classList.add('card')
    cartElement.setAttribute('data-favorit', 'true')
    cartElement.insertAdjacentHTML('afterBegin', item)
    m.push(cartElement)
    return m
  })

  console.log(m)
  for (let i = 0; i <= arr; i++) {
    for (let j = 0; j <= m; j++) {
      console.log(m[j])
      if (arr[i] == m[j]) {
        arr[i].rremove()
      }
    }
  }
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
      cartElement.setAttribute('data-favorit', 'true')
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

export { saveChosenElement, selectChosenElement, deleteselectivelement }
