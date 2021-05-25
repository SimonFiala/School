
// galerie

function openModal() {
    document.getElementById("section-gallery-lightbox").style.display = "flex";
  }
  
  function closeLightbox(){
      document.getElementById("section-gallery-lightbox").style.display = "none";
  }
  
  var lighboxIndex = 1;
  showSlidesGallery(lighboxIndex);
  
  function plusSlidesGallery(n) {
    showSlidesGallery(lighboxIndex += n);
  }
  
  function currentSlideGallery(n) {
    showSlidesGallery(lighboxIndex = n);
  }
  
  function showSlidesGallery(n) {
    var i;
    var photos = document.getElementsByClassName("mySlides");
    var caption = document.getElementsByClassName("caption");
    if (n > photos.length) {lighboxIndex = 1}
    if (n < 1) {lighboxIndex = photos.length}
    for (i = 0; i < photos.length; i++) {
      photos[i].style.display = "none";
        caption[i].style.display = "none";
    }
  
    photos[lighboxIndex-1].style.display = "block";
    caption[lighboxIndex-1].style.display = "block";
  }
  