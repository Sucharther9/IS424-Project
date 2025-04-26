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
  about_us_page.classList.add("is-hidden");
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

// navbar-burger menu can be opened
// Bulma navbar burger toggle
document.addEventListener("DOMContentLoaded", () => {
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active"); 
      });
    });
  }
});



//sign in / up stuff
let currentAction = "signin"; // Default

// sign up and in form
function openModal(action) {
  currentAction = action;
  document.getElementById("authModal").style.display = "flex";
  document.getElementById("modalTitle").textContent =
    action === "signup" ? "Sign Up" : "Sign In";

  const signupFields = document.querySelectorAll(".signup-only");
  signupFields.forEach(field => {
    field.style.display = action === "signup" ? "block" : "none";
  });
}

function closeModal() {
  document.getElementById("authModal").style.display = "none";
}

// sign up and collect data
function submitAuth() {
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;

  if (!email || !password) {
    alert("Please fill out both Email and Password.");
    return;
  }

  if (currentAction === "signup") {
    // ===== Get additional Sign Up info =====
    const firstName = document.getElementById("firstNameInput").value;
    const lastName = document.getElementById("lastNameInput").value;
    const gradYear = document.getElementById("gradYearInput").value;      // Optional
    const gradSeason = document.getElementById("gradSeasonInput").value;  // Optional
    const statusElement = document.querySelector('input[name="status"]:checked');

    // ===== Check required fields =====
    if (!firstName || !lastName || !statusElement) {
      alert("Please fill out First Name, Last Name, and select Student or Other.");
      return;
    }

    const status = statusElement.value;
    const collectionName = status === "Student" ? "student" : "client";

    // ===== Create user with Firebase Authentication =====
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // ===== Save user info into Firestore =====
        db.collection(collectionName).doc(user.email).set({
          email: user.email,
          firstName: firstName,
          lastName: lastName,
          gradYear: gradYear || null,               // Optional (null if empty)
          gradSeason: gradSeason || null,           // Optional (null if empty)
          status: status,
          admin: 0,                                // default as not admin
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        .then(() => {
          alert("Sign Up successful and your information has been saved!");
          closeModal();
        })
        .catch((error) => {
          alert(`Failed to save user data: ${error.message}`);
        });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          alert("This email is already registered. Switching to Sign In mode.");
          openModal('signin');                                 // Switch to Sign In mode
          document.getElementById("emailInput").value = email;  // Keep email
          document.getElementById("passwordInput").value = "";  // Clear password
        } else {
          alert(`Sign Up failed: ${error.message}`);
        }
      });

  } else {
    // ===== Sign In process =====
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        alert("Welcome back!");
        closeModal();
      })
      .catch((error) => {
        alert(`Sign In failed: ${error.message}`);
      });
  }
}


//
// Change navbar status when sign in and sign out
function checkLoginStatus() {
  const authButtons = document.getElementById("authButtons");  // Sign Up / Sign In
  const logoutButton = document.getElementById("logoutButtonContainer");  // Log Out

  auth.onAuthStateChanged((user) => {
    if (user) {
      // Logged in → hide Sign Up / Sign In, show Log Out
      authButtons.classList.add("is-hidden");
      logoutButton.classList.remove("is-hidden");

      // Attach the logout function here to avoid duplication
      logoutButton.querySelector("button").onclick = function() {
        auth.signOut()
          .then(() => {
            alert("You have been logged out.");
          })
          .catch((error) => {
            alert(`Logout failed: ${error.message}`);
          });
      };

    } else {
      // Not logged in, then show Sign Up / Sign In, hide Log Out
      authButtons.classList.remove("is-hidden");
      logoutButton.classList.add("is-hidden");
    }
  });
}


// load submissions and allow to delete it only by admin
function loadSubmissions(collection, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  db.collection(collection)
    .orderBy("timestamp", "desc")
    .get()
    .then((querySnapshot) => {
      container.innerHTML = ""; // Clear previous submissions
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const card = document.createElement("div");
        card.className = "box has-background-light mb-4";  // Bulma box + light background

        card.innerHTML = `
          <header class="level">
            <div class="level-left">
              <p class="has-text-weight-semibold">
                ${data.email || "No Email"}
              </p>
            </div>
            <div class="level-right">
              <button class="delete" aria-label="delete"></button>
            </div>
          </header>
          <div class="content mt-2">
            <p>${data.message || "No message provided"}</p>
            <p class="is-size-7 has-text-grey">
              ${data.timestamp?.toDate().toLocaleString() || ""}
            </p>
          </div>
        `;

        // Delete logic for admin
        card.querySelector(".delete").addEventListener("click", () => {
          if (confirm("Are you sure you want to delete this submission?")) {
            db.collection(collection)
              .doc(doc.id)
              .delete()
              .then(() => {
                card.remove();
              });
          }
        });

        container.appendChild(card);
      });
    });
}



// Contact Us page is different based on the status
function checkContactUsPage() {
  const form = document.getElementById("feedback_form");
  const notLoggedInMessage = document.getElementById("notLoggedInMessage");
  const submissionsContainer = document.getElementById("contact_submissions_container");

  auth.onAuthStateChanged((user) => {
    if (!user) {
      // Not logged in → show login message, hide form and submissions
      notLoggedInMessage.classList.remove("is-hidden");
      form.classList.add("is-hidden");
      submissionsContainer.classList.add("is-hidden");
    } else {
      // Logged in → hide login message
      notLoggedInMessage.classList.add("is-hidden");

      // Check in student first
      db.collection("student").doc(user.email).get().then((doc) => {
        if (doc.exists) {
          const userData = doc.data();
          handleAdminView(userData);
        } else {
          // Check in client if not found in student
          db.collection("client").doc(user.email).get().then((doc) => {
            const userData = doc.data();
            handleAdminView(userData);
          });
        }
      });
    }
  });

  function handleAdminView(userData) {
    if (userData && userData.admin === 1) {
      // Admin → show submissions, hide form
      form.classList.add("is-hidden");
      submissionsContainer.classList.remove("is-hidden");
      loadSubmissions("contact_submissions", "contact_submissions_container");
    } else {
      // Regular user → show form, hide submissions
      form.classList.remove("is-hidden");
      submissionsContainer.classList.add("is-hidden");
    }
  }
}






// 
document.addEventListener("DOMContentLoaded", () => {
  checkLoginStatus();
  checkContactUsPage();
});


// store feedback forms in the firebase
document.querySelector("#feedback_form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("f_email").value;
  const message = document.getElementById("feedback").value;

  db.collection("contact_submissions")
    .add({
      email: email,
      message: message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      alert("Thank you for reaching out!");
    });
});

