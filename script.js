// Function to toggle navigation menu for mobile devices
function toggleMenu() {
    const nav = document.querySelector('header nav ul');
    nav.classList.toggle('active');
  }
  
  // Event listener for menu toggle button
  document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);
  