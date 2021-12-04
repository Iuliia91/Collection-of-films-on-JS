import { text, titel } from './mokDate.js'
import {
  getRandomIntInclusive,
  gerRandomDate,
  getRandomText,
  getRandomboxOffice,
} from './Rander.js'

function generatmokCart() {
  let arr = []
  for (let i = 0; i < 6; i++) {
    let objCart = {
      titel: getRandomText(titel),
      releseDate: gerRandomDate('1991-01-01', '2021-12-31'),
      about: getRandomText(text),
      poster:
        'https://m.media-amazon.com/images/M/MV5BNzIxMjYwNDEwN15BMl5BanBnXkFtZTgwMzk5MDI3NTM@._V1_SX300.jpg',
      totalSum: getRandomboxOffice(100000000, 1000000000),
      // .toLocaleString(
      //   'de-DE'
      // ),
      rating: getRandomIntInclusive(1, 10),
      director: 'J.A. Bayona',
    }
    arr.push(objCart)
  }
  return arr
}
export let areaofcards = document.querySelector('.film-list')

function createCards(obj) {
  const cart = obj
  const elementTemplate = document.querySelector('#card-template')
  obj.forEach((item) => {
    let clonbox = elementTemplate.content.cloneNode(true)

    const elemtitel = clonbox.querySelector('.card-header__title')
    elemtitel.textContent = item.titel

    const elemrating = clonbox.querySelector(
      '.film-info__rating>.film-info__text'
    )
    elemrating.textContent = item.rating

    const elemtdatarealiz = clonbox.querySelector(
      '.film-info__release-date>.film-info__text'
    )
    elemtdatarealiz.textContent = item.releseDate

    const elemtdirector = clonbox.querySelector(
      '.film-info__director>.film-info__text'
    )
    elemtdirector.textContent = item.director

    const elemttotalSum = clonbox.querySelector(
      '.film-info__box-office>.film-info__text'
    )
    // item.totalSum
    elemttotalSum.textContent = `$${item.totalSum.toLocaleString('de-DE')}`

    const elementabout = clonbox.querySelector(
      '.film-info__plot>.film-info__text'
    )
    elementabout.innerHTML = item.about

    areaofcards.appendChild(clonbox)
  })
}

export { createCards, generatmokCart }
