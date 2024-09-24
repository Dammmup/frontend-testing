$(document).ready(function() {
  $('#userForm').on('submit', function(event) {
      event.preventDefault();

      const name = $('#name').val().trim();
      const phone = $('#phone').val().trim();
      const email = $('#email').val().trim();

      const isValid = validateForm(name, phone, email);
      if (!isValid) return;

      $('#userForm button').attr('disabled', true);

      $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://requestcatcher.com/amoconnect-test-fr',
        method: 'POST',
        data: {
            name: name,
            phone: phone,
            email: email
        },
        success: function(response) {
            showMessage('Form successfully submitted!', 'success');
        },
        error: function(error) {
            showMessage('Error submitting form. Please try again.', 'error');
        }
    });
    
  });

  function validateForm(name, phone, email) {
      let isValid = true;

      if (name.length < 2) {
          showMessage('Name must be at least 2 characters long.', 'error');
          isValid = false;
      }

      if (!/^\d{6,}$/.test(phone)) {
          showMessage('Phone must contain at least 6 digits.', 'error');
          isValid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
          showMessage('Please enter a valid email address.', 'error');
          isValid = false;
      }

      return isValid;
  }

  function showMessage(message, type) {
      const messageDiv = $('#message');
      messageDiv.text(message);

      if (type === 'success') {
          messageDiv.css('color', 'green');
      } else if (type === 'error') {
          messageDiv.css('color', 'red');
      }

      messageDiv.removeClass('hidden');
  }
});
