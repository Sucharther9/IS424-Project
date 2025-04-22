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
  important_links_page.classList.add("is-hidden");
  join_us_page.classList.add("is-hidden");
});

let event_site = document.getElementById("event_site");
let event_page = document.getElementById("event_page");
event_site.addEventListener("click", () => {
  event_page.classList.remove("is-hidden");
  home_page.classList.add("is-hidden");
  calendar_page.classList.add("is-hidden");
  contact_page.classList.add("is-hidden");
  important_links_page.classList.add("is-hidden");
  join_us_page.classList.add("is-hidden");
});

let calendar = document.getElementById("calendar");
let calendar_page = document.getElementById("calendar_page");
calendar.addEventListener("click", () => {
  calendar_page.classList.remove("is-hidden");
  home_page.classList.add("is-hidden");
  event_page.classList.add("is-hidden");
  contact_page.classList.add("is-hidden");
  important_links_page.classList.add("is-hidden");
  join_us_page.classList.add("is-hidden");
});

let logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  home_page.classList.remove("is-hidden");
  event_page.classList.add("is-hidden");
  calendar_page.classList.add("is-hidden");
  contact_page.classList.add("is-hidden");
  important_links_page.classList.add("is-hidden");
  join_us_page.classList.add("is-hidden");
});

let contact = document.getElementById("contact");
let contact_page = document.getElementById("contact_page");
contact.addEventListener("click", () => {
  contact_page.classList.remove("is-hidden");
  home_page.classList.add("is-hidden");
  event_page.classList.add("is-hidden");
  calendar_page.classList.add("is-hidden");
  important_links_page.classList.add("is-hidden");
  join_us_page.classList.add("is-hidden");
});

let contact_us = document.getElementById("contact_us");
contact_us.addEventListener("click", () => {
  contact_page.classList.remove("is-hidden");
  home_page.classList.add("is-hidden");
  event_page.classList.add("is-hidden");
  calendar_page.classList.add("is-hidden");
  important_links_page.classList.add("is-hidden");
  join_us_page.classList.add("is-hidden");
});

let about_us = document.getElementById("about");
let about_page = document.getElementById("about_us_page");
about_us.addEventListener("click", () => {
  about_page.classList.remove("is-hidden");
  home_page.classList.add("is-hidden");
  event_page.classList.add("is-hidden");
  calendar_page.classList.add("is-hidden");
  important_links_page.classList.add("is-hidden");
  join_us_page.classList.add("is-hidden");
});
let join_us = document.getElementById("joinus");
let join_us_page = document.getElementById("join_us_page");
join_us.addEventListener("click", () => {
  join_us_page.classList.remove("is-hidden");
  about_page.classList.add("is-hidden");
  home_page.classList.add("is-hidden");
  event_page.classList.add("is-hidden");
  calendar_page.classList.add("is-hidden");
  important_links_page.classList.add("is-hidden");
});
// important_link page
let important_links = document.getElementById("important_links"); // Link or button to show Important Links page
let important_links_page = document.getElementById("important_links_page");
important_links.addEventListener("click", () => {
  important_links_page.classList.remove("is-hidden"); // Show Important Links page
  home_page.classList.add("is-hidden"); // Hide other pages
  contact_page.classList.add("is-hidden");
  event_page.classList.add("is-hidden");
  calendar_page.classList.add("is-hidden");
  join_us_page.classList.add("is-hidden");
});

// student document

let student = {
  s_id: "0941471490",
  f_name: "John",
  l_name: "Hunt",
  w_email: "jhunt@wisc.edu",
  message: [
    {
      expected_graduation_year: "2026",
      expected_graduation_semester: "Spring",
    },
  ],
};

// client document

let client = {
  customer_id: "56781234",
  first_name: "Alice",
  last_name: "Nguyen",
  email: "alice.nguyen@example.com",
  message: "Looking forward to your response!",
};

db.collection("students")
  .set(student)
  .then(() => {
    console.log("Student added successfully!");
  })
  .catch((error) => {
    console.error("Error adding student: ", error);
  });
