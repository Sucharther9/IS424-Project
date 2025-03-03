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
  event_page.classList.add("is-hidden");
  calendar_page.classList.add("is-hidden");
  contact_page.classList.add("is-hidden");
});

let event_site = document.getElementById("event_site");
let event_page = document.getElementById("event_page");
event_site.addEventListener("click", () => {
  event_page.classList.remove("is-hidden");
  home_page.classList.add("is-hidden");
  calendar_page.classList.add("is-hidden");
  contact_page.classList.add("is-hidden");
});

let calendar = document.getElementById("calendar");
let calendar_page = document.getElementById("calendar_page");
calendar.addEventListener("click", () => {
  calendar_page.classList.remove("is-hidden");
  home_page.classList.add("is-hidden");
  event_page.classList.add("is-hidden");
  contact_page.classList.add("is-hidden");
});

let logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  home_page.classList.remove("is-hidden");
  event_page.classList.add("is-hidden");
  calendar_page.classList.add("is-hidden");
  contact_page.classList.add("is-hidden");
});

let contact = document.getElementById("contact");
let contact_page = document.getElementById("contact_page");
contact.addEventListener("click", () => {
  contact_page.classList.remove("is-hidden");
  home_page.classList.add("is-hidden");
  event_page.classList.add("is-hidden");
  calendar_page.classList.add("is-hidden");
});

let contact_us = document.getElementById("contact_us");
contact_us.addEventListener("click", () => {
  contact_page.classList.remove("is-hidden");
  home_page.classList.add("is-hidden");
  event_page.classList.add("is-hidden");
  calendar_page.classList.add("is-hidden");
});
