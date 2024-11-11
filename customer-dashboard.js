 // JavaScript function to handle customer login and redirection
 function customerLogin() {
    // Basic validation check (in a real scenario, you'd validate this with backend)
    const email = document.getElementById('customer-email').value;
    const password = document.getElementById('customer-password').value;

    if (email && password) {
      // Redirect to the customer dashboard
      window.location.href = 'customer-dashboard.html';
    } else {
      alert('Please enter valid email and password.');
    }
  }