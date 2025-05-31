// Get Slider Items
let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

// Get Number Of Slides
let slidesCount = sliderImages.length;

// Set Current Slide
let currentSlide = 1;

// Slide Number Element
let slideNumberElement = document.getElementById("slide-number");

// Previous and Next Buttons
let prevButton = document.getElementById("prev");
let nextButton = document.getElementById("next");

// Handle Click on Previous and Next Buttons
prevButton.onclick = pervSlide;
nextButton.onclick = nextSlide;

// Create The Main UL Element
let paginationElement = document.createElement("ul");

// Set ID On Created Ul Element
paginationElement.setAttribute("id", "pagination-ul");

// Create List Items Based On Slides Count
for (let i = 1; i <= slidesCount; i++) {
  // Create The LI
  let paginationItem = document.createElement("li");

  // Set Custom Attribute
  paginationItem.setAttribute("data-slide", i);

  // Set Item Content
  paginationItem.appendChild(document.createTextNode(i));

  // Append Items to The Main Ul List
  paginationElement.appendChild(paginationItem);
}

// Add The Created UL Element to The Page
document.getElementById("indicators").appendChild(paginationElement);

// Get The New Created UL
let paginationCreatedUl = document.getElementById("pagination-ul");

// Get Slider Items
let paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

// Loop Through All Bullets Items
for (let i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-slide"));
    theChecker();
  };
}

// Trigger The Checker Function
theChecker();

// Previous Slide Function
function pervSlide() {
  if (prevButton.classList.contains("disabled")) {
  } else {
    currentSlide--;
    theChecker();
  }
}

// Next Slide Function
function nextSlide() {
  if (nextButton.classList.contains("disabled")) {
  } else {
    currentSlide++;
    theChecker();
  }
}

// Create The Checker Function
function theChecker() {
  // Set The Slide Number
  slideNumberElement.textContent =
    "Slide # " + currentSlide + " of " + slidesCount;

  // Remove All Active Classes
  removeAllActive();

  // Set Active Class On Current Slide
  sliderImages[currentSlide - 1].classList.add("active");

  // Set Active Class On Current Pagination Item
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");

  // Check if Current Slide is The First
  if (currentSlide == 1) {
    // Add Disabled Class on Previous Button
    prevButton.classList.add("disabled");
  } else {
    // Remove Disabled Class From Previous Button
    prevButton.classList.remove("disabled");
  }

  // Check if Current Slide is The Last
  if (currentSlide == slidesCount) {
    // Add Disabled Class on Next Button
    nextButton.classList.add("disabled");
  } else {
    // Remove Disabled Class From Next Button
    nextButton.classList.remove("disabled");
  }
}

// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {
  // Loop Through Images
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });

  // Loop Through Pagination Bullets
  paginationBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
}