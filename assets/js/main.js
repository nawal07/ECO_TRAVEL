function validateForm(event) {
  event.preventDefault(); // Prevent the form from submitting and reloading the page

  const userName = document.getElementById('name');
  const subject = document.getElementById('subject');
  const phone = document.getElementById('phone');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  let isValid = true;

  clearError(userName);
  clearError(subject);
  clearError(phone);
  clearError(email);
  clearError(message);

  // Validate each field and show error messages
  if (userName.value === '') {
    showError(nameError, 'Name is required');
    isValid = false;
  }
  if (subject.value === '') {
    showError(subjectError, 'Subject is required');
    isValid = false;
  }
  if (phone.value === '') {
    showError(phoneError, 'Phone number is required');
    isValid = false;
  } else {
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone.value)) {
      showError(phoneError, 'Enter a valid 10-digit phone number');
      isValid = false;
    }
  }
  if (email.value === '') {
    showError(emailError, 'Email is required');
    isValid = false;
  } else {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value)) {
      showError(emailError, 'Enter a valid email address');
      isValid = false;
    }
  }
  if (message.value === '') {
    showError(messageError, 'Message is required');
    isValid = false;
  }

  if (isValid) {
    showSuccessModal();
  }

  return isValid;
}

function showError(errorElement, message) {
  errorElement.textContent = message;
}

function clearError(errorElement) {
  errorElement.textContent = '';
}

function showSuccessModal() {
  const modal = document.getElementById('successModal');
  const closeButton = document.getElementById('closeButton');
  clearError(nameError);
  clearError(subjectError);
  clearError(phoneError);
  clearError(emailError);
  clearError(messageError);

  modal.style.display = 'block';

  closeButton.onclick = function () {
    modal.style.display = 'none';
    resetForm();
    console.log('Form fields cleared ');
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
      resetForm();
      console.log('Form fields cleared ');
    }
  };
}

function resetForm() {

  const userName = document.getElementById('name');

  userName.value = '';
  subject.value = '';
  phone.value = '';
  email.value = '';
  message.value = '';

  clearError(nameError);
  clearError(subjectError);
  clearError(phoneError);
  clearError(emailError);
  clearError(messageError);

  console.log('ResetForm executed');
}
