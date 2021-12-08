import { createCards, generatmokCart } from './generCart.js'

const buttonrating = document.getElementById('rating')
const buttonreleaseDate = document.getElementById('releaseDate')
const buttonboxOffice = document.getElementById('boxOffice')

function sortByRating() {
  buttonrating.addEventListener('click', () => {
    buttonrating.classList.add('button_checked')
    buttonreleaseDate.classList.remove('button_checked')
    buttonboxOffice.classList.remove('button_checked')

    let newobj = generatmokCart().sort((a, b) => {
      return a.rating - b.rating
    })

    const s = document.querySelectorAll('.card')
    for (let i = 0; i < s.length; i++) {
      s[i].remove()
    }

    createCards(newobj)
  })
}

function sortByDate() {
  buttonreleaseDate.addEventListener('click', () => {
    buttonreleaseDate.classList.add('button_checked')
    buttonrating.classList.remove('button_checked')
    buttonboxOffice.classList.remove('button_checked')

    let newobj = generatmokCart().sort((a, b) => {
      return new Date(a.releseDate) - new Date(b.releseDate)
    })

    const s = document.querySelectorAll('.card')
    for (let i = 0; i < s.length; i++) {
      s[i].remove()
    }
    createCards(newobj)
  })
}

function sortbyTotalSum() {
  buttonboxOffice.addEventListener('click', () => {
    buttonboxOffice.classList.add('button_checked')
    buttonreleaseDate.classList.remove('button_checked')
    buttonrating.classList.remove('button_checked')

    let newobj = generatmokCart().sort((a, b) => {
      // `$${c.toLocaleString('de-DE')}`
      return a.totalSum - b.totalSum
    })

    const s = document.querySelectorAll('.card')
    for (let i = 0; i < s.length; i++) {
      s[i].remove()
    }

    createCards(newobj)
  })
}

export { sortByRating, sortByDate, sortbyTotalSum }
