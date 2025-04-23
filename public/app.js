// function r_e(id) {
//   return document.querySelector(`#${id}`);
// }

// const navLinks = document.querySelectorAll(".navbar-item");
// const pages = document.querySelectorAll(".section"); // This will target the main sections directly

// const hiddenPages = document.querySelectorAll("#about, #contact, #calendar");
// hiddenPages.forEach((page) => page.classList.add("is-hidden"));

// navLinks.forEach((link) => {
//   link.addEventListener("click", function (event) {
//     event.preventDefault();

//     const targetPageId = this.getAttribute("data-target");

//     pages.forEach((page) => page.classList.add("is-hidden")); // Hide all pages

//     const targetPage = document.getElementById(targetPageId);
//     if (targetPage) {
//       targetPage.classList.remove("is-hidden"); // Show the selected page
//     }
//   });
// });

let home = document.getElementById("home");
let home_page = document.getElementById("home_page");
home.addEventListener("click", () => {
  home_page.classList.remove("is-hidden");
  calendar_page.classList.add("is-hidden");
  contact_page.classList.add("is-hidden");
  important_links_page.classList.add("is-hidden");
  join_us_page.classList.add("is-hidden");
  about_us_page.classList.add("is-hidden");
});

let calendar = document.getElementById("calendar");
let calendar_page = document.getElementById("calendar_page");
calendar.addEventListener("click", () => {
  calendar_page.classList.remove("is-hidden");
  home_page.classList.add("is-hidden");
  contact_page.classList.add("is-hidden");
  important_links_page.classList.add("is-hidden");
  join_us_page.classList.add("is-hidden");
  about_us_page.classList.add("is-hidden");
});

let logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  home_page.classList.remove("is-hidden");
  calendar_page.classList.add("is-hidden");
  contact_page.classList.add("is-hidden");
  important_links_page.classList.add("is-hidden");
  join_us_page.classList.add("is-hidden");
  about_us_page.classList.add("is-hidden");
});

let contact = document.getElementById("contact");
let contact_page = document.getElementById("contact_page");
contact.addEventListener("click", () => {
  contact_page.classList.remove("is-hidden");
  home_page.classList.add("is-hidden");
  calendar_page.classList.add("is-hidden");
  important_links_page.classList.add("is-hidden");
  join_us_page.classList.add("is-hidden");
  about_us_page.classList.add("is-hidden");
});

let contact_us = document.getElementById("contact_us");
contact_us.addEventListener("click", () => {
  contact_page.classList.remove("is-hidden");
  home_page.classList.add("is-hidden");
  calendar_page.classList.add("is-hidden");
  important_links_page.classList.add("is-hidden");
  join_us_page.classList.add("is-hidden");
  about_us_page.classList.add("is-hidden");
});

let about_us = document.getElementById("about");
let about_us_page = document.getElementById("about_us_page");
about_us.addEventListener("click", () => {
  about_us_page.classList.remove("is-hidden");
  home_page.classList.add("is-hidden");
  calendar_page.classList.add("is-hidden");
  important_links_page.classList.add("is-hidden");
  join_us_page.classList.add("is-hidden");
  contact_page.classList.add("is-hidden");
});
let join_us = document.getElementById("joinus");
let join_us_page = document.getElementById("join_us_page");
join_us.addEventListener("click", () => {
  join_us_page.classList.remove("is-hidden");
  about_us_page.classList.add("is-hidden");
  home_page.classList.add("is-hidden");
  calendar_page.classList.add("is-hidden");
  important_links_page.classList.add("is-hidden");
  contact_page.classList.add("is-hidden");
});
// important_link page added later
let important_links = document.getElementById("important_links");
let important_links_page = document.getElementById("important_links_page");
important_links.addEventListener("click", () => {
  important_links_page.classList.remove("is-hidden");
  home_page.classList.add("is-hidden");
  contact_page.classList.add("is-hidden");
  calendar_page.classList.add("is-hidden");
  join_us_page.classList.add("is-hidden");
  about_us_page.classList.classList.add("is-hidden");
});
//Slide show on about page
let slideIndex = 0;
const slides = document.getElementsByClassName("slideshow-image");
function showSlide(index) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[index].style.display = "block";
}
function plusSlides(n) {
  slideIndex = (slideIndex + n + slides.length) % slides.length;
  showSlide(slideIndex);
}
document.addEventListener("DOMContentLoaded", function () {
  showSlide(slideIndex);
});
//sign in / up stuff
let currentAction = "signin"; // Default

function openModal(action) {
  currentAction = action;
  document.getElementById("authModal").style.display = "flex";
  document.getElementById("modalTitle").textContent =
    action === "signup" ? "Sign Up" : "Sign In";
}

function closeModal() {
  document.getElementById("authModal").style.display = "none";
}

function submitAuth() {
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;

  if (email && password) {
    if (currentAction === "signup") {
      alert("You have signed up!");
    } else {
      alert("Welcome back!");
    }
    closeModal();
  } else {
    alert("Please fill out both fields.");
  }
}
