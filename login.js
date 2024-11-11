function loginUser(role) {
    const emailField = document.getElementById(role + '-email');
    const passwordField = document.getElementById(role + '-password');
    const email = emailField.value;
    const password = passwordField.value;
    const errorMessage = document.getElementById(role + '-error');
  
    // Simple validation
    if (!email || !password) {
      errorMessage.textContent = "Email and Password cannot be empty.";
      return;
    }
  
    // Simple email validation pattern
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email)) {
      errorMessage.textContent = "Please enter a valid email address.";
      return;
    }
  
    // Simulate successful login (you can replace this with actual backend integration)
    alert(role.charAt(0).toUpperCase() + role.slice(1) + " logged in successfully!");
  
    // Redirect to respective dashboard after login
    if (role === 'customer') {
      window.location.href = 'customer-dashboard.html'; // Redirect to customer dashboard
    } else if (role === 'restaurant') {
      window.location.href = 'restaurant-dashboard.html'; // Redirect to restaurant dashboard
    } else if (role === 'driver') {
      window.location.href = 'driver-dashboard.html'; // Redirect to driver dashboard
    }
  }
  