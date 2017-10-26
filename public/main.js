const $tooltipped = document.querySelectorAll('.tooltipped')

$tooltipped.forEach($tooltip => {
  $tooltipped.addEventListener('mouseenter', event => {
    const { top, bottom, left, right } = $tooltipped.getBoundingClientRect()

    console.log(`${top} px from the top of the window`)
    console.log(
      `${window.innerHeight - bottom}px from the bottom of the window`
    )
    console.log(`${left}px from the left of the window`)
    console.log(`${window.innerWidth - right} from the right of the window`)
  })
})
