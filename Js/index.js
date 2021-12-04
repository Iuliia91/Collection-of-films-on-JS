import { createCards, generatmokCart, areaofcards } from './generCart.js'

import { sortByRating, sortByDate, sortbyTotalSum } from './sort.js'
createCards(generatmokCart())

sortByRating()
sortByDate()
sortbyTotalSum()
