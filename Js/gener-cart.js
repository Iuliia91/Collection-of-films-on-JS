// import { text, titel } from './mok-date.js'
// import {
//   getRandomIntInclusive,
//   gerRandomDate,
//   getRandomText,
//   getRandomboxOffice,
// } from './rander.js'

// function generatmokCart() {
//   let arr = []
//   for (let i = 0; i < 6; i++) {
//     let objCart = {
//       titel: getRandomText(titel),
//       releseDate: gerRandomDate('1991-01-01', '2021-12-31'),
//       about: getRandomText(text),
//       poster:
//         'https://m.media-amazon.com/images/M/MV5BNzIxMjYwNDEwN15BMl5BanBnXkFtZTgwMzk5MDI3NTM@._V1_SX300.jpg',
//       totalSum: getRandomboxOffice(100000000, 1000000000),
//       rating: getRandomIntInclusive(1, 10),
//       director: 'J.A. Bayona',
//     }
//     arr.push(objCart)
//   }
//   return arr
// }
import { getSearching } from './function-search.js'
import { getFilmsData, getToken } from './Api-request.js'
import { sortByRating, sortByDate, sortbyTotalSum } from './sort.js'

export let areaofcards = document.querySelector('.film-list')

function getFilmsCards(arr) {
  const filmsarr = arr
  let newarr = filmsarr.map((element) => {
    // if (v === 'N/A') {
    //   v = 0
    // }
    element.BoxOffice = element.BoxOffice.replace('$', '')
    if (element.BoxOffice == 'N/A') {
      element.BoxOffice = 0
    }

    // if (element.imdbVotes == 'null') {
    //   element.imdbVotes = 0
    // }

    if (element.Released === null) {
      element.Released = '-'
    }

    if (element.Director === null) {
      element.Director = '-'
    }

    if (element.Plot.length >= 140) {
      element.Plot = element.Plot.slice(0, 137) + '...'
    }
    // else if (element.Plot === null) {
    //   element.Plot = '-'
    // }

    return element
  })
  //console.log(newarr)

  sortByRating(newarr)
  sortByDate(newarr)

  sortbyTotalSum(newarr)
  getSearching(newarr)
  madeCardsFilms(newarr)
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
    elemttotalSum.textContent = item.BoxOffice

    const elementabout = clonbox.querySelector(
      '.film-info__plot>.film-info__text'
    )
    elementabout.innerHTML = item.Plot

    areaofcards.appendChild(clonbox)
  })
}

// function createCards(arr) {
//   //console.log(arr[0].Title)
//   const elementTemplate = document.querySelector('#card-template')
//   arr.forEach((item) => {
//     let clonbox = elementTemplate.content.cloneNode(true)

//     const elemtitel = clonbox.querySelector('.card-header__title')
//     elemtitel.textContent = item.titel

//     const elemrating = clonbox.querySelector(
//       '.film-info__rating>.film-info__text'
//     )
//     elemrating.textContent = item.rating

//     const elemtdatarealiz = clonbox.querySelector(
//       '.film-info__release-date>.film-info__text'
//     )
//     elemtdatarealiz.textContent = item.releseDate

//     const elemtdirector = clonbox.querySelector(
//       '.film-info__director>.film-info__text'
//     )
//     elemtdirector.textContent = item.director

//     const elemttotalSum = clonbox.querySelector(
//       '.film-info__box-office>.film-info__text'
//     )
//     //`$${item.totalSum.toLocaleString('de-DE')}`
//     elemttotalSum.textContent = item.totalSum

//     const elementabout = clonbox.querySelector(
//       '.film-info__plot>.film-info__text'
//     )
//     elementabout.innerHTML = item.about

//     areaofcards.appendChild(clonbox)
//   })
// }

export { madeCardsFilms, getFilmsCards }
