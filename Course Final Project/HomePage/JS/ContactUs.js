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

// Image scaling for MATERIAL section pictures
const materialPictures = document.querySelectorAll('#MATERIALS .picture img');

materialPictures.forEach((img) => {
  img.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.08)';
    this.style.transition = 'all 0.3s ease';
    this.style.cursor = 'pointer';
    this.style.filter = 'brightness(1.1)';
    this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
  });
  
  img.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.transition = 'all 0.3s ease';
    this.style.filter = 'brightness(1)';
    this.style.boxShadow = 'none';
  });
});

// Mobile menu functionality
const createMobileMenu = () => {
  const header = document.querySelector('header');
  const menuBtns = document.querySelector('.menuBtns');
  const headDiv = document.querySelector('.head');
  
  // Create hamburger button
  const hamburgerBtn = document.createElement('button');
  hamburgerBtn.innerHTML = '☰';
  hamburgerBtn.className = 'mobile-menu-btn';
  hamburgerBtn.style.cssText = `
    display: none;
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    padding: 10px;
    z-index: 400;
  `;

  // Insert hamburger button
  headDiv.appendChild(hamburgerBtn);

  // Toggle menu function
  const toggleMenu = () => {
    menuBtns.classList.toggle('mobile-open');
    hamburgerBtn.innerHTML = menuBtns.classList.contains('mobile-open') ? '✕' : '☰';
  };

  hamburgerBtn.addEventListener('click', toggleMenu);

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!header.contains(e.target) && menuBtns.classList.contains('mobile-open')) {
      menuBtns.classList.remove('mobile-open');
      hamburgerBtn.innerHTML = '☰';
    }
  });

  // Show/hide hamburger based on screen size
  const checkScreenSize = () => {
    if (window.innerWidth <= 767) {
      hamburgerBtn.style.display = 'block';
      menuBtns.style.display = 'none';
    } else {
      hamburgerBtn.style.display = 'none';
      menuBtns.style.display = 'flex';
      menuBtns.classList.remove('mobile-open');
      hamburgerBtn.innerHTML = '☰';
    }
  };

  // Close menu on link click
  menuBtns.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' && window.innerWidth <= 767) {
      menuBtns.classList.remove('mobile-open');
      hamburgerBtn.innerHTML = '☰';
    }
  });

  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
};

// Initialize mobile menu when DOM is loaded
document.addEventListener('DOMContentLoaded', createMobileMenu);