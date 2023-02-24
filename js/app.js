// Formulaire de contact
form = document.getElementById('formContact');

form.addEventListener('submit', e=>{
    e.preventDefault();
    alert('Contact');
    return false;
})

// Annimation fade
const pElements = document.querySelectorAll('div');
const windowHeight = window.innerHeight;

function fadeIn(elements) {
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight) {
      element.style.opacity = 1;
      element.style.transform = 'translateY(0)';
    } else {
      element.style.opacity = 0;
      element.style.transform = 'translateY(50px)';
    }
  });
}

fadeIn(pElements);

window.addEventListener('scroll', () => {
  fadeIn(pElements);
});