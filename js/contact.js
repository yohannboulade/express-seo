form = document.getElementById('formContact');

form.addEventListener('submit', e=>{
    e.preventDefault();
    alert('Contact');
    return false;
})