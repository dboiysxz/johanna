function h (el, className, content) {
  const element = document.createElement(el)
  element.classList.add(className)
  element.innerHTML = content || ''
  return element
}

document.querySelectorAll('.lightbox').forEach((lightbox) => {
  // Create the lightbox
  const lightboxContent = h('div', 'lightbox-content')
  const lightboxClose = h('a', 'lightbox-close', '<img src="./buttons/close.png" alt="Close">')
  const lightboxPrev = h('a', 'lightbox-prev', '<img src="./buttons/leftarrow.png" alt="Previous">')
  const lightboxNext = h('a', 'lightbox-next', '<img src="./buttons/rightarrow.png" alt="Next">')
  const lightboxImage = h('img', 'lightbox-image')
  const lightboxCaption = h('div', 'lightbox-caption')
  const lightboxImageContainer = h('div', 'lightbox-image-container')
  lightboxImageContainer.appendChild(lightboxImage)
  lightboxImageContainer.appendChild(lightboxCaption)
  lightboxContent.appendChild(lightboxImageContainer)
  lightboxContent.appendChild(lightboxClose)
  document.body.appendChild(lightboxContent)

  const state = {
    target: null,
    images: [],
    index: 0
  }

  lightbox.addEventListener('click', (event) => {
    event.preventDefault()

    // Search for the target image
    if (event.target.nodeName === 'IMG') {
      state.target = event.target
    } else if (event.target.nodeName === 'A') {
      state.target = event.target.querySelector('img')
    }

    // Couldn't find an image
    if (!state.target) return

    // Get all other images in the lightbox
    state.images = Array.from(lightbox.querySelectorAll('img'))

    // If there's more than one image, show the next/prev buttons
    if (state.images.length > 1) {
      lightboxContent.appendChild(lightboxPrev)
      lightboxContent.appendChild(lightboxNext)
    }

    // Get the index of the clicked image
    state.index = state.images.indexOf(state.target)

    lightboxContent.style.display = 'flex'
    document.body.classList.add('--lightbox-open')
    lightboxImage.src = state.target.getAttribute('src')
    lightboxCaption.innerHTML = state.images[state.index].getAttribute('alt')
  })

  // Close when clicking the background
  lightboxContent.addEventListener('click', (event) => {
    const target = event.target
    if (/lightbox-content|lightbox-image-container/.test(target.classList)) {
      lightboxCloseModal()
    }
  })

  // Close when clicking the close button
  lightboxClose.addEventListener('click', () => {
    lightboxCloseModal()
  })

  // Previous and next buttons
  function lightboxShowPrev() {
    state.index--
    if (state.index < 0) {
      state.index = state.images.length - 1
    }
    lightboxImage.src = state.images[state.index].getAttribute('src')
    lightboxCaption.innerHTML = state.images[state.index].getAttribute('alt')
  }

  function lightboxShowNext() {
    state.index++
    if (state.index >= state.images.length) {
      state.index = 0
    }
    lightboxImage.src = state.images[state.index].getAttribute('src')
    lightboxCaption.innerHTML = state.images[state.index].getAttribute('alt')
  }

  // Close the lightbox
  function lightboxCloseModal() {
    lightboxContent.style.display = 'none'
    document.body.classList.remove('--lightbox-open')
  }

  lightboxPrev.addEventListener('click', lightboxShowPrev)
  lightboxNext.addEventListener('click', lightboxShowNext)

  // Keyboard navigation
  document.addEventListener('keydown', (event) => {
    if (lightboxContent.style.display === 'flex') {
      if (event.key === 'ArrowLeft') {
        lightboxShowPrev()
      } else if (event.key === 'ArrowRight') {
        lightboxShowNext()
      } else if (event.key === 'Escape') {
        lightboxCloseModal()
      }
    }
  })
})
