function closeModal() {
  const body = document.querySelector('body')
  const modalWindow = document.querySelector('.card-modal')
  modalWindow.remove()
  body.classList.remove('lock')
}

export { closeModal }
