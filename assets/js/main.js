function validateForm() {
  const name = document.getElementById('name').value;
  const subject = document.getElementById('subject').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (
    name === '' ||
    subject === '' ||
    phone === '' ||
    email === '' ||
    message === ''
  ) {
    alert('All fields are required.');
    return false;
  }

  const phonePattern = /^[0-9]{10}$/;
  if (!phonePattern.test(phone)) {
    alert('Please enter a valid 10-digit phone number.');
    return false;
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }
  alert('Form submitted successfully!');

  return true;
}
