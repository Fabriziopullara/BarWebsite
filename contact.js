// script.js
function submitForm(event) {
  event.preventDefault(); // Prevents the form from submitting in the traditional way

  // Basic form validation
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var receipe = document.getElementById('select').value;
  var password = document.getElementById('pass').value;
  var message = document.getElementById('message').value;
  var checkbox = document.getElementById('cb').checked;

  if (name === '' || email === '' || receipe === '' || password === '' || message === '' || !checkbox) {
    alert('Please fill in all fields and accept the terms and conditions.');
    return;
  }
  

  // Your AJAX or form submission logic goes here
  console.log('Form submitted successfully!');
}
