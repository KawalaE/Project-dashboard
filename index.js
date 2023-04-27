let project = document.getElementById('project');
let cardsList = document.querySelectorAll('.card');
let educationIcon = document.getElementById('edu-info');
let educationInfo = document.querySelector('.education');
let contactIcon = document.getElementById('contact-info');
let contactInfo = document.querySelector('.contact');
let emailInfo = document.querySelector('#email');
let copyFlag = document.querySelector('.copy');

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

emailInfo.addEventListener('click', ()=>{
    let originalEmail = "edyta.wer.kawala@gmail.com";
    navigator.clipboard.writeText(originalEmail);
    copyFlag.textContent = "Copied!";
})
emailInfo.addEventListener('mouseout', ()=>{
    setTimeout(()=>{

    copyFlag.textContent = "";
    }, 1250)
})