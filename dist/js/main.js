const shoppingButton = document.querySelector('.basket')
const modal = document.querySelector('.modal')
const exit = document.querySelector('.exit-icon')
const cancel = document.querySelector('.cancel-button')
const toggleModal = () => {
    modal.classList.toggle('show')
}

shoppingButton.addEventListener('click', toggleModal)
exit.addEventListener('click', toggleModal)
cancel.addEventListener('click', toggleModal)

