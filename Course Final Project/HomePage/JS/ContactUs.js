const btns = document.querySelectorAll(".btn");
const line = document.getElementsByClassName("decLine");

const BlBtns = document.querySelectorAll("#BlueBtn");
const FcBtn = document.getElementById("footContact");

const SubmBtn = document.getElementById("submit");

const liList = document.querySelectorAll(".liContainer");
console.log(liList);

// Button hover effects
btns.forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    const line = btn.getElementsByClassName("decLine")[0];
    line.style.width = "118px";
  });
  btn.addEventListener("mouseleave", function () {
    const line = btn.getElementsByClassName("decLine")[0];
    line.style.width = "0px";
  });
});

// Blue buttons hover effects
BlBtns.forEach((BlBtn) => {
  BlBtn.addEventListener("mouseenter", function () {
    this.style.backgroundColor = "black";
  });
  BlBtn.addEventListener("mouseleave", function () {
    this.style.backgroundColor = "#2c3878";
  });
});

// Footer contact button hover effects
FcBtn.addEventListener("mouseenter", function () {
  this.style.backgroundColor = "black";
  this.style.color = "white";
});
FcBtn.addEventListener("mouseleave", function () {
  this.style.backgroundColor = "white";
  this.style.color = "black";
});

// Submit button arrow hover effects
SubmBtn.addEventListener("mouseenter", function () {
  const SubmArrow = document.getElementById("sbmArrow");
  SubmArrow.style.stroke = "cyan";
});
SubmBtn.addEventListener("mouseleave", function () {
  const SubmArrow = document.getElementById("sbmArrow");
  SubmArrow.style.stroke = "black";
});

// Accordion functionality
liList.forEach((li) => {
  const arrow = li.querySelector(".arrow");
  const hiddenContent = li.querySelector(".hidden");

  arrow.addEventListener("click", function (e) {
    e.stopPropagation();
    this.classList.toggle("active");

    if (hiddenContent) {
      hiddenContent.classList.toggle("show");
    }
  });

  const liContent = li.querySelector(".li-content");
  liContent.addEventListener("click", function () {
    arrow.classList.toggle("active");
    if (hiddenContent) {
      hiddenContent.classList.toggle("show");
    }
  });
});

// Mobile menu functionality
const createMobileMenu = () => {
  const header = document.querySelector('header');
  const menuBtns = document.querySelector('.menuBtns');
  const headDiv = document.querySelector('.head');
  const hamburgerBtn = document.querySelector('.mobile-menu-btn');
  
  // Toggle menu function
  const toggleMenu = () => {
    menuBtns.classList.toggle('mobile-open');
    hamburgerBtn.innerHTML = menuBtns.classList.contains('mobile-open') ? '✕' : '☰';
    
    // Prevent body scroll when menu is open
    if (menuBtns.classList.contains('mobile-open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  hamburgerBtn.addEventListener('click', toggleMenu);

  // Close menu when clicking on a link
  menuBtns.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
      menuBtns.classList.remove('mobile-open');
      hamburgerBtn.innerHTML = '☰';
      document.body.style.overflow = '';
    }
  });

  // Handle window resize
  const handleResize = () => {
    if (window.innerWidth > 921) {
      menuBtns.classList.remove('mobile-open');
      hamburgerBtn.innerHTML = '☰';
      document.body.style.overflow = '';
    }
  };

  window.addEventListener('resize', handleResize);
};

// Form validation
const enhanceFormValidation = () => {
  const form = document.querySelector('form');
  const inputs = form.querySelectorAll('input, textarea');
  
  inputs.forEach(input => {
    
    input.addEventListener('focus', function() {
      this.style.borderColor = '#2c3878';
      this.style.boxShadow = '0 0 0 2px rgba(44, 56, 120, 0.2)';
    });
    
    input.addEventListener('blur', function() {
      this.style.borderColor = 'lightgray';
      this.style.boxShadow = 'none';
    });
    
    
    input.addEventListener('input', function() {
      if (this.validity.valid) {
        this.style.borderColor = '#4CAF50';
      } else {
        this.style.borderColor = '#f44336';
      }
    });
  });
};

// Initialize mobile menu
document.addEventListener('DOMContentLoaded', function() {
  createMobileMenu();
  enhanceFormValidation();
});




