// getting HTML elements
const shoppingButton = document.querySelector('.basket')
const modal = document.querySelector('.modal')
const exit = document.querySelector('.exit-icon')
const cancel = document.querySelector('.cancel-button')

// utils
const toggleModal = () => {
    modal.classList.toggle('show')
}
const clickTarget = (target) => {
    target.addEventListener('click', toggleModal)
}

clickTarget(shoppingButton)
clickTarget(exit)
clickTarget(cancel)
// shoppingButton.addEventListener('click', toggleModal)
// exit.addEventListener('click', toggleModal)
// cancel.addEventListener('click', toggleModal)
