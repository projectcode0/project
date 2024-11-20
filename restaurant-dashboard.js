document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.getElementById("home-btn");
    const logoutBtn = document.getElementById("logout-btn");
  
    // Redirect to Restaurant Dashboard when Home is clicked
    homeBtn.addEventListener("click", () => {
      window.location.href = "restaurant-dashboard.html";
    });
  
    // Logout and redirect to login page
    logoutBtn.addEventListener("click", () => {
      // Clear session or local storage
      localStorage.removeItem("restaurantLoggedIn");
      sessionStorage.removeItem("restaurantLoggedIn");
  
      // Redirect to the index page
      window.location.href = "index.html";
    });
  });
  