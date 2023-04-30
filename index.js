const project = document.getElementById('project');
const cardsList = document.querySelectorAll('.card');
const educationIcon = document.getElementById('edu-info');
const educationInfo = document.querySelector('.education');
const contactIcon = document.getElementById('contact-info');
const contactInfo = document.querySelector('.contact');
const emailInfo = document.querySelector('#email');

project.addEventListener('mouseover', () => {
  cardsList.forEach((card) => {
    card.classList.add('transform');
  });
});

project.addEventListener('mouseleave', () => {
  cardsList.forEach((card) => {
    card.classList.remove('transform');
  });
});

educationIcon.addEventListener('mouseover', () => {
  educationInfo.classList.add('transform');
});

educationIcon.addEventListener('mouseleave', () => {
  educationInfo.classList.remove('transform');
});

contactIcon.addEventListener('mouseover', () => {
  contactInfo.classList.add('transform');
});

contactIcon.addEventListener('mouseleave', () => {
  contactInfo.classList.remove('transform');
});

emailInfo.addEventListener('click', () => {
  emailInfo.textContent = 'edyta.wer.kawala@gmail.com';
});
