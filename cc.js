function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function openCategory(page) {
  window.location.href = page;
}

// Forms
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for reaching out, " + document.getElementById("name").value + "!");
      contactForm.reset();
    });
  }

  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("You’ve subscribed successfully!");
      newsletterForm.reset();
    });
  }
});