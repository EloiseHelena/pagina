const containImg = document.querySelector('.containImg');

const textContainer = document.querySelector('.text-container');

const containImgs = document.querySelectorAll('.containImg');

containImgs.forEach(containImg => {
  const textContainer = containImg.querySelector('.text-container');
  const p = textContainer.querySelector('p');

  containImg.addEventListener('mouseover', () => {
    textContainer.classList.add('hov-in');
  });

  containImg.addEventListener('mouseout', () => {
    textContainer.classList.remove('hov-in');
  });
});



document.addEventListener('DOMContentLoaded', function() {
  var buttonColors = {
    'box1': '#38b6e6',
    'box2': '#ed544c',
    'box3': '#eaa319',
    'box4': '#16b5a3',
    'box5': '#3f97c9'
  };

  var bodyColors = [
    '#38b4e69e',
    '#ed544c9e',
    '#eaa3199e',
    '#16b5a39e',
    '#457ec99e'
  ];

  var buttons = document.querySelectorAll('.buttonHeader');
  var body = document.querySelector('body');
  var sections = document.querySelectorAll('section');

  setInitialState();

  buttons.forEach(function(button, index) {
    button.addEventListener('click', function() {
      buttons.forEach(function(btn) {
        btn.classList.remove('select');
        btn.style.backgroundColor = 'transparent';
      });

      this.classList.add('select');
      this.style.backgroundColor = buttonColors[this.classList[0]];

      body.style.backgroundColor = bodyColors[index];
      sections.forEach(function(section, sectionIndex) {
        if (index === sectionIndex) {
          section.classList.remove('hide-off');
        } else {
          section.classList.add('hide-off');
        }
      });
    });
  });

  function setInitialState() {

    buttons[0].classList.add('select');
    buttons[0].style.backgroundColor = buttonColors['box1'];
    body.style.backgroundColor = bodyColors[0];

    sections[0].classList.remove('hide-off');
  }
});

let menu = document.querySelector('.menu');
let row = document.querySelector('.row');

menu.addEventListener('click', () => {
  if (row.style.display === 'flex') {
    row.style.display = 'none';
  } else {
    row.style.display = 'flex';
  }
});

const formInputs = document.getElementById("form");



formInputs.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameInput = e.target.name.value;
  const emailInput = e.target.email.value;
  const nameError = document.getElementById("nameError");
  const firstNameField = document.getElementsByClassName("inputName")
  const emailFild = document.getElementsByClassName("inputEmail")

  if(!nameInput){
    nameError.classList.add("visible");
    firstNameField.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
    nameError.setAttribute("aria-invalid", true);
  }else if(!emailInput) {
    nameError.classList.add("visible");
    emailFild.classList.add("invalid");
    nameError.setAttribute("aria-hidden", false);
    nameError.setAttribute("aria-invalid", true);
  } 
  else{
    nameError.classList.remove("visible");
    nameError.setAttribute("aria-hidden", true);
    nameError.setAttribute("aria-invalid", false);
    return alert("submit form succefuly")
  }

})