import { madeCardsFilms, areaofcards } from './gener-cart.js'

import { sortByRating, sortByDate, sortbyTotalSum } from './sort.js'

import { elementchoosen, deletElem } from './save-chosen.js'

import { getSearching } from './function-search.js'
import { titel } from './mok-date.js'
import { getToken, getFilmsData, arr } from './Api-request.js'

//createCards(generatmokCart())

sortByRating()
sortByDate()
sortbyTotalSum()

elementchoosen()
deletElem()

getSearching()

getToken()

//getFilmsCards()

areaofcards

//madeCardsFilms()
