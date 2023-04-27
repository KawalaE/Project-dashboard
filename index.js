let project = document.getElementById('project');
let cardsList = document.querySelectorAll('.card');
let educationIcon = document.getElementById('edu-info');
let educationInfo = document.querySelector('.education');
let contactIcon = document.getElementById('contact-info');
let contactInfo = document.querySelector('.contact');

project.addEventListener('mouseover', ()=>{
   cardsList.forEach(card =>{
    card.classList.add('transform');
   })
})
project.addEventListener('mouseleave', ()=>{
    cardsList.forEach(card =>{
     card.classList.remove('transform');
    })
 })

educationIcon.addEventListener('mouseover', ()=>{
    educationInfo.classList.add('transform');
})
educationIcon.addEventListener('mouseleave', ()=>{
    educationInfo.classList.remove('transform');
})

contactIcon.addEventListener('mouseover', ()=>{
    contactInfo.classList.add('transform');
})
contactIcon.addEventListener('mouseleave', ()=>{
    contactInfo.classList.remove('transform');
})