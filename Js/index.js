import { madeCardsFilms, areaofcards, getFilmsCards } from './gener-cart.js'

import { sortByRating, sortByDate, sortbyTotalSum } from './sort.js'

import { getSearching } from './function-search.js'

import { getToken, getFilmsData, arr } from './Api-request.js'

sortByRating()
sortByDate()
sortbyTotalSum()

getToken()
getSearching()
getFilmsCards
