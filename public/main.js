const $tooltipped = document.querySelectorAll('.tooltipped')

$tooltipped.forEach($tooltip => {
  $tooltip.addEventListener('mouseenter', event => {
    const { top, bottom, left, right } = $tooltip.getBoundingClientRect()

    if (top > 20 && window.innerWidth - right > 120) {
      event.target.setAttribute('data-tooltip', 'Above')
    } else if (bottom > 20 && window.innerWidth - right > 120) {
      event.target.setAttribute('data-tooltip', 'Below')
    } else if (left > 120) {
      event.target.setAttribute('data-tooltip', 'Left')
    }
  })
})
