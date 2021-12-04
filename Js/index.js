import { createCards, generatmokCart, areaofcards } from './generCart.js'

import { sortByRating, sortByDate, sortbyTotalSum } from './sort.js'
createCards(generatmokCart())

sortByRating()
sortByDate()
sortbyTotalSum()

// for (let i = 0; i < block.length; i++) {
//   block[i].addEventListener('click', (Event) => {
//     let { target } = Event
//     let s = generatmokCart()
//     if (target == document.getElementById('rating')) {
//       document.getElementById('rating').classList.add('button_checked')

//       s.sort((a, b) => {
//         return a.rating - b.rating
//       })
//       createCards(s)
//     } else {
//       document.getElementById('rating').classList.remove('button_checked')
//     }

//     if (target == document.getElementById('releaseDate')) {
//       document.getElementById('releaseDate').classList.toggle('button_checked')
//     } else {
//       document.getElementById('releaseDate').classList.remove('button_checked')
//     }

//     if (target == document.getElementById('boxOffice')) {
//       document.getElementById('boxOffice').classList.toggle('button_checked')
//     } else {
//       document.getElementById('boxOffice').classList.remove('button_checked')
//     }
//   })
// }
