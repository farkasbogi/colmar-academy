const header = document.querySelector('header');

window.addEventListener('scroll', function() {
  const currentPosition = window.pageYOffset;
  
  if (currentPosition > 0) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

});