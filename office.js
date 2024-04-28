const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navClose = document.querySelector('.nav-close');

navToggle.addEventListener('click', () => {
    navLinks.classList.add('show');
});

navClose.addEventListener('click', () => {
    navLinks.classList.remove('show');
});






// for trans bar //

// document.addEventListener("DOMContentLoaded", function() {
//   var links = document.querySelectorAll('.link');
//   links.forEach(function(link) {
//       link.addEventListener('click', function(event) {
//           // Prevent default link behavior
//           event.preventDefault();

//           // Remove 'clicked' class from all links
//           links.forEach(function(link) {
//               link.classList.remove('clicked');
//           });

//           // Add 'clicked' class to the clicked link
//           link.classList.add('clicked');
//       });
//   });
// });











document.querySelectorAll('.faq-item').forEach(item => {
  const question = item.querySelector('.question');
  const answer = item.querySelector('.answer');
  const toggleBtn = question.querySelector('.toggle-btn');

  question.addEventListener('click', () => {
    const isExpanded = item.classList.toggle('expanded');
    answer.style.display = isExpanded ? 'block' : 'none';
    toggleBtn.querySelector('i').classList.toggle('fa-plus', !isExpanded);
    toggleBtn.querySelector('i').classList.toggle('fa-minus', isExpanded);
    toggleBtn.setAttribute('aria-expanded', isExpanded);
  });
});







 // Show the button when user scrolls down
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("scrollToTop").style.display = "block";
  } else {
      document.getElementById("scrollToTop").style.display = "none";
  }
};

// Scroll to top when button is clicked
document.getElementById("scrollToTop").addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, Opera
});


