const menuIcon = document.getElementById("menu-icon");
const slideMenu = document.getElementById("slide-menu");





menuIcon.addEventListener('click', function () {
  if (slideMenu.style.width == "100%") {
    slideMenu.style.width = '0';

  } else {
    slideMenu.style.width = "100%";

  }
});

function myFuction() {
  var element = document.getElementById("slide-menu");
  element.style = "none";
}

var Typed = new Typed(".auto-type", {
  strings: [" ", "Web Designer", "Content Creator", "FrontEnd Developer"],
  typeSpeed: 150,
  backSpeed: 100,
  loop: true

});


var prevScrollpos = window.pageYOffset;
var slideLoad = document.getElementById("slide-menu");
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  var navBar = document.getElementById("navLog");
  if (prevScrollpos > currentScrollPos) {
    navBar.style.top = "-230px";
    slideLoad.style = "none";

  } else {
    navBar.style.display = "flex";
    navBar.style.top = "0";
    slideLoad.style.display = "block";
    slideLoad.style.top = "17%";
  }
  prevScrollpos = currentScrollPos;
}

var element = document.body;
const toggle = document.getElementById("mode");
let darkMode = localStorage.getItem("dark-mode");
const round = document.getElementById("round");
const contact = document.getElementById("contact-form");

let slider = document.getElementById("switch-container");

const enableDarkMode = () => {
  element.classList.add("dark-mode");
  round.style.left = "28px";
  slider.style.background = "#2196F3";
  contact.style.background = "#212529";
  contact.style.border = "none";
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  element.classList.remove("dark-mode");
  round.style.left = "4px";
  slider.style.background = "transparent";
  contact.style.background = "#dc7c1c";

  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
}

toggle.addEventListener("click", e => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  const isChecked = e.target.checked;
  if (darkMode === "disabled" || isChecked) {
    enableDarkMode();
  } else {
    disableDarkMode();

  }
});
/*================Portfolio=================*/

var indexValue = 1;
showContent(indexValue);

function currentSlide(e) {
  showContent(indexValue = e);
}

function plusSlides(e) {
  showContent(indexValue += e);
}

function showContent(e) {
  var i;
  const content = document.querySelectorAll(".portfolio-content");

  const sliders = document.querySelectorAll(".dot span");

  if (e > content.length) {
    indexValue = 1;
  }
  if (e < 1) {
    indexValue = content.length;
  }
  for (i = 0; i < content.length; i++) {
    content[i].style.display = "none";
  }
  for (i = 0; i < sliders.length; i++) {
    sliders[i].style.background = "rgb(228, 86, 86)";
  }
  content[indexValue - 1].style.display = "block";
  sliders[indexValue - 1].style.background = "rgb(204, 209, 246)";
}

/*=========closeTimes========*/
function closeIcon() {
  const close = document.getElementById("animate");
  close.style = "none";
}

// animation nav

const sections = document.querySelectorAll('section');
const nav = document.querySelector('nav');
const navList = document.querySelectorAll(".nav-list li");

const option = {
  threshold: "0.6" // 60% of the section
}
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      // changing nav style
      if (e.target.id !== "base") {
        nav.classList.add("visit");

      } else {
        nav.classList.remove("visit");
      }
      navList.forEach(link => {

        link.classList.remove('active');
        if (e.target.id === link.dataset.nav) {
          link.classList.add('active');

        }
      })
    }
  });

}, option);

sections.forEach(section => {
  observer.observe(section);
});


//contact form section

function validation(){
  var name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  message = document.getElementById("message").value;
  messageError = document.getElementById("messageError");
  var text;
  if(name.length <3){
    text = "Please enter valid name!";
    messageError.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 ||  email.length <6){
    text = "Please enter valid email address!";
    messageError.innerHTML = text;
    return false;
  }
  if(message.length <=5){
    text = "Message input can't be empty please fill out!";
    messageError.innerHTML = text;
    return false;
  }
  return false;
}


