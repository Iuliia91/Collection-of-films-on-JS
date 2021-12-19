import { madeCardsFilms, areaofcards, getFilmsCards } from './gener-cart.js'

import { sortByRating, sortByDate, sortbyTotalSum } from './sort.js'

import { getSearching } from './function-search.js'

import { getToken, getFilmsData } from './Api-request.js'

import { saveChosenElement, selectChosenElement } from './save-chosen.js'

getToken()
//getFilmsData().then((data) => console.log(data))

// console.log(getFilmsData(getToken()))
// getSearching()

// saveChosenElement()
// selectChosenElement()
