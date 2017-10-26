const $tooltipped = document.querySelectorAll('.tooltipped')

$tooltipped.forEach($tooltip => {
  $tooltip.addEventListener('mouseenter', event => {
    const { top, bottom, left, right } = $tooltip.getBoundingClientRect()

    if (top > 20 && window.innerWidth - right > 120) {
      event.target.setAttribute('data-tooltip', 'Above')
      // event.target.classList.remove('bottom', 'left', 'right')
      // event.target.classList.add('top')
    } else if (bottom > 20 && window.innerWidth - right > 120) {
      event.target.setAttribute('data-tooltip', 'Below')
      // event.target.classList.remove('top', 'left', 'right')
      // event.target.classList.add('bottom')
    } else if (left > 120) {
      event.target.setAttribute('data-tooltip', 'Left')
      // event.target.classList.remove('top', 'bottom', 'right')
      // event.target.classList.add('left')
    }
    // console.log(`${top} px from the top of the window`)
    // console.log(`${window.innerHeight - bottom}px from the bottom of the window`)
    // console.log(`${left}px from the left of the window`)
    // console.log(`${window.innerWidth - right} from the right of the window`)
  })
})
