// const buttons = document.querySelectorAll("[data-carousel-button]")

// buttons.forEach(button => {
//     button.addEventListener("click", () => {
//         const offset = button.dataset.carouselButton === "right" ? 1 : -1
//         const slides = button
//             .closest("[data-carousel]")
//             .querySelector("[data-slides]")

//         const activeSlide = slides.querySelector("[data-active]")
//         let newIndex = [...slides.children].indexOf(activeSlide) + offset
//         if (newIndex < 0) newIndex = slides.children.length - 1
//         if (newIndex >= slides.children.length) newIndex = 0

//         slides.children[newIndex].dataset.active = true
//         delete activeSlide.dataset.active

//         var event = new Event('carousel-nav-button-clicked');
//         document.dispatchEvent(event);
//     })
// })






// Index Submenu toggling
var allProjects = document.getElementById('all-projects')

function toggleProjects(shouldBeOpened) {
    if (typeof shouldBeOpened === 'undefined') {
        shouldBeOpened = !allProjects.classList.contains('nav-opened');
    }

    allProjects.classList.toggle('nav-opened', shouldBeOpened)
    document.body.classList.toggle('nav-opened', shouldBeOpened)
}

jQuery(function($) {
    $(document).on('click', '.index-subnav-toggle', function(e) {
        e.stopPropagation();
        toggleProjects();
    })

    $(document).on('click', function(e) {
        if (!$(e.target).closest('#all-projects').length) {
            toggleProjects(false)
        }
    })
})
