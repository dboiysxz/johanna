jQuery(function ($) {
  function addMagnifyingGlass(zoomArea) {
      $('.zoomable').removeClass('active');
      var zoom = $('.magnifying-glass', zoomArea)[0];
      var img = $('img', zoomArea)[0];

      var fullSizeImage = new Image();
      fullSizeImage.src = $(img).attr('data-full');

      if (!img || !zoom) return;
      var boundingRect = zoomArea.closest('.zoomable-container');
      var Zw = zoom.offsetWidth;
      var Zh = zoom.offsetHeight;
      var timeout, ratio, Ix, Iy;

      function activate() {
          zoomArea[0].classList.add('active');
      }

      function deactivate() {
          zoomArea[0].classList.remove('active');
      }

      function updateMagnifier(x, y) {
          zoom.style.top = (y) + 'px'; // - 32 corrects mouse position for top padding
          zoom.style.left = (x) + 'px';
          zoom.style.backgroundPosition = ((Ix - x) * ratio + Zw / 2) + 'px ' + ((Iy - y) * ratio + Zh / 2) + 'px';
      }

      function setLensContent() {
          ratio = fullSizeImage.naturalWidth / img.width;
          zoom.style.backgroundImage = 'url(' + fullSizeImage.src + ')';
          Ix = img.offsetLeft;
          Iy = img.offsetTop;
      }

      function onMousemove(e) {
          clearTimeout(timeout);
          activate();
          updateMagnifier(e.x - (boundingRect ? boundingRect[0].offsetLeft : 0), e.offsetY);
          timeout = setTimeout(deactivate, 4000);
      }

      function onMouseleave() {
          deactivate();
      }

      img.addEventListener('mousemove', onMousemove);
      img.addEventListener('mouseleave', onMouseleave);
      fullSizeImage.addEventListener('load', setLensContent)
      setLensContent();
  }

  function registerLenses() {
      $('.zoomable').each(function (index, elem) {
          addMagnifyingGlass($(elem))
      })
  }

  // registerLenses();
  setTimeout(registerLenses, 1);
})

function getFullSizeImage(url) {

}
