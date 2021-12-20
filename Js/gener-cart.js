import { getSearching } from './function-search.js'
import { sortingElements } from './sort.js'
import { selectChosenElement } from './save-chosen.js'

export let areaofcards = document.querySelector('.film-list')

function getFilmsCards(arr) {
  const filmsarr = arr
  let newarr = filmsarr.map((element) => {
    element.BoxOffice = element.BoxOffice.replace('$', '')
    if (element.BoxOffice == 'N/A') {
      element.BoxOffice = 0
    }

    if (element.Released === null) {
      element.Released = '-'
    }

    if (element.Director === null) {
      element.Director = '-'
    }

    if (element.Plot.length >= 140) {
      element.Plot = element.Plot.slice(0, 137) + '...'
    }

    return element
  })

  sortingElements(newarr)
  getSearching(newarr)

  selectChosenElement(newarr)
  madeCardsFilms(newarr)

  return newarr
}

function madeCardsFilms(data) {
  const elementTemplate = document.querySelector('#card-template')

  data.forEach((item) => {
    let clonbox = elementTemplate.content.cloneNode(true)

    clonbox.querySelector('.card-header__image').src = item.Poster

    const elemtitel = clonbox.querySelector('.card-header__title')
    elemtitel.textContent = item.Title

    const elemrating = clonbox.querySelector(
      '.film-info__rating>.film-info__text'
    )
    elemrating.textContent = item.imdbRating

    const elemtdatarealiz = clonbox.querySelector(
      '.film-info__release-date>.film-info__text'
    )
    elemtdatarealiz.textContent = item.Released

    const elemtdirector = clonbox.querySelector(
      '.film-info__director>.film-info__text'
    )
    elemtdirector.textContent = item.Director

    const elemttotalSum = clonbox.querySelector(
      '.film-info__box-office>.film-info__text'
    )
    elemttotalSum.textContent = `$${item.BoxOffice}`

    const elementabout = clonbox.querySelector(
      '.film-info__plot>.film-info__text'
    )
    elementabout.innerHTML = item.Plot

    areaofcards.appendChild(clonbox)
  })

  return
}

export { madeCardsFilms, getFilmsCards }
