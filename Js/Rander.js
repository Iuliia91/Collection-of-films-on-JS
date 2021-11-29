function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function gerRandomDate(start, end) {
  const startDate = new Date(start)
  const endDate = new Date(end)
  const rendomDate = new Date(
    getRandomIntInclusive(Number(startDate), Number(endDate))
  ).toLocaleDateString()
  return rendomDate
}

function getRandomText(arr) {
  const index = Math.floor(Math.random() * arr.length)
  return arr[index]
}

function getRandomboxOffice(minValue, maxValue) {
  const value = getRandomIntInclusive(minValue, maxValue)

  return `$${value.toLocaleString('de-DE')}`
}

export {
  getRandomIntInclusive,
  gerRandomDate,
  getRandomText,
  getRandomboxOffice,
}
