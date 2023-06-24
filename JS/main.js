$(document).ready(function () {
  console.log('jQuery ready');

  //validation form
  (function () {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation');
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      },false)
    })
  })();

  $('#phoneNumber').mask('(00)00000-0000')
}); 
