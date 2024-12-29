"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
  console.log("hii");
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;
    console.log("hello");

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// Ensure the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Select the element (e.g., a button or a dropdown)
  const select = document.getElementById("mySelect"); // Replace 'mySelect' with your element's ID

  // Check if the element exists
  if (select) {
    // Add a click event listener
    select.addEventListener("click", function () {
      elementToggleFunc(this); // Ensure this function is defined
      console.log("Element clicked: ", this); // More descriptive console log
    });
  } else {
    console.error("Element with ID 'mySelect' not found.");
  }
});

// Example of the elementToggleFunc function
// function elementToggleFunc(element) {
//     // Toggle functionality (example)
//     element.classList.toggle('active'); // Toggle 'active' class
// }

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
    console.log("namesta");
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);
    console.log("teri");

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add the Resume button to the navigation links handling
const resumeButton = document.getElementById("mySelect");

// Function to handle page navigation
function navigateToPage(pageName) {
  for (let i = 0; i < pages.length; i++) {
    if (pageName.toLowerCase() === pages[i].dataset.page) {
      pages[i].classList.add("active");
      // Find and activate the corresponding nav link
      navigationLinks.forEach((link) => {
        if (link.innerHTML.toLowerCase() === pageName.toLowerCase()) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
      window.scrollTo(0, 0);
    } else {
      pages[i].classList.remove("active");
    }
  }
}

// Add event listeners to all nav links
navigationLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navigateToPage(this.innerHTML);
  });
});

// Add event listener for the Resume button
if (resumeButton) {
  resumeButton.addEventListener("click", function () {
    navigateToPage("resume");
    // Remove active class from other navigation links
    navigationLinks.forEach((link) => link.classList.remove("active"));
  });
}
