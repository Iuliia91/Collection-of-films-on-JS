function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const keyforObj = [
  'titel',
  'releseDate',
  'about',
  'poster',
  'totalSum',
  'rating',
  'director',
]

const valueObj = [
  'Jurassic World: Fallen Kingdom',
  '06-06-2018',
  'When the island s dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from this extinction-level event.',
  'https://m.media-amazon.com/images/M/MV5BNzIxMjYwNDEwN15BMl5BanBnXkFtZTgwMzk5MDI3NTM@._V1_SX300.jpg',
  '$417,719,760',
  getRandomIntInclusive(1, 10),
  'J.A. Bayona',
]

function rendomObj(arr1, arr2) {
  let arr = []
  for (let i = 0; i < 5; i++) {
    const obj = arr1.reduce((key, i, v) => ((key[i] = arr2[v]), key), {})
    obj.rating = getRandomIntInclusive(1, 10)
    arr.push(obj)
  }
  return arr
}
