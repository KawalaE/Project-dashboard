const project = document.getElementById("project");
const cardsList = document.querySelectorAll(".card");
const educationIcon = document.getElementById("edu-info");
const educationInfo = document.querySelector(".education");
const email = document.querySelector(".contact-email");
const copyStatus = document.querySelector(".copy-status");

project.addEventListener("mouseover", () => {
  cardsList.forEach((card) => {
    card.classList.add("transform");
  });
});

project.addEventListener("mouseleave", () => {
  cardsList.forEach((card) => {
    card.classList.remove("transform");
  });
});

educationIcon.addEventListener("mouseover", () => {
  educationInfo.classList.add("transform");
});

educationIcon.addEventListener("mouseleave", () => {
  educationInfo.classList.remove("transform");
});

email.addEventListener("click", () => {
  navigator.clipboard.writeText("edyta.wer.kawala@gmail.com");
  copyStatus.textContent = "Copied!";
  setTimeout(() => {
    copyStatus.textContent = "";
  }, "1500");
});
