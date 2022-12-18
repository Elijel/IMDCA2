let scrollSpy = new bootstrap.ScrollSpy(document.body, { target: '#navbar-main' })

const contactModal = document.getElementById('contactModal')
contactModal.addEventListener('show.bs.modal', event => {

  const button = event.relatedTarget
  const recipient = button.getAttribute('data-bs-whatever')
  const modalTitle = contactModal.querySelector('.modal-title')
  const modalBodyInput = contactModal.querySelector('.modal-body input')

  modalTitle.textContent = `New message to ${recipient}`
  modalBodyInput.value = recipient
})

