import { getFilmsCards } from './gener-cart.js'

import { getToken, getFilmsData } from './api-request.js'

getToken()
  .then((token) => getFilmsData(token))
  .then((data) => getFilmsCards(data))

// const BUTTON_FOR_SORTING = document.querySelectorAll('.sorting__titel>.button')
// console.log(BUTTON_FOR_SORTING)
