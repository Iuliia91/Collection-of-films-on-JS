const elemcheckbox = document.getElementById('favorite')

export function deletElem() {
  let carteleme = document.querySelectorAll('.card')
  let arr = []

  carteleme.forEach((element) => {
    element.addEventListener('click', (Event) => {
      const { target } = Event
      if (target.classList.contains('button__icon-svg')) {
        const elmaddtochosen = document.querySelector('.card__footer>.button')
        elmaddtochosen.classList.remove('button_add')
        elmaddtochosen.classList.add('button_remove')
        element.remove()
      }
      localStorage.setItem('key', 'jah')

      let arrelem = element
      arr.push(element)

      arr.id = element.id
      arr.innerHTML = element.innerHTML
      localStorage.setItem('id', JSON.stringify(arr))

      // let g = JSON.parse(localStorage.getItem('id'))
      // console.log(g)
    })
  })

  return arr
}

export function elementchoosen() {
  let carteleme = document.querySelectorAll('.card')

  elemcheckbox.addEventListener('click', (Event) => {
    const { target } = Event
    carteleme = document.querySelectorAll('.card')
    if (!target.classList.contains('filter__check')) {
      return
    }

    for (let i = 0; i < carteleme.length; i++) {
      carteleme[i].remove()
    }
  })
}
