const elemcheckbox = document.getElementById('favorite')

let carteleme = document.querySelectorAll('.card')

let arr = []

export function deletElem() {
  carteleme.forEach((element) => {
    element.addEventListener('click', (Event) => {
      const { target } = Event
      if (target.classList.contains('button__icon-svg')) {
        const elmaddtochosen = document.querySelector('.card__footer>.button')
        elmaddtochosen.classList.remove('button_add')
        elmaddtochosen.classList.add('button_remove')
        element.remove()
      }

      arr.push(element)
    })
    return
  })

  return arr
}

deletElem()

export function elementchoosen() {
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
