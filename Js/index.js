import { getFilmsCards } from './gener-cart.js'

import { getToken, getFilmsData } from './api-request.js'

getToken()
  .then((token) => getFilmsData(token))
  .then((data) => getFilmsCards(data))
