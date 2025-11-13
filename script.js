const contactForm = document.getElementById("contact-form");
const emailField = document.getElementById("email");
const msg = document.getElementById("msg");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!emailField.validity.valid) {
    msg.textContent = "Error, please check your email";
  } else {
    emailField.value = "";
  }
});
