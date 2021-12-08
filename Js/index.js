import { createCards, generatmokCart, areaofcards } from './generCart.js'

import { sortByRating, sortByDate, sortbyTotalSum } from './sort.js'

import { elementchoosen, deletElem } from './saveChosen.js'
createCards(generatmokCart())

sortByRating()
sortByDate()
sortbyTotalSum()

elementchoosen()
deletElem()
