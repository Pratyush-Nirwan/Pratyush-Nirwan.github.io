const instagram = document.querySelector('#instagram');
const linkedin = document.querySelector('#linkedin');
const github = document.querySelector('#github');
const body = document.querySelector('body');
const aboutMePhoto = document.getElementById("about-me-photo");
var favicon = document.getElementById("favicon");
function isMobileDevice() {
  if(window.innerWidth<=768){
    return true;
  }
}
if (isMobileDevice()) {
  var element = document.getElementById("about-me-details");
  element.innerHTML = `I'm Pratyush,
  <br>a tech student at Yeshwantrao Chavan College of Engineering in Nagpur. I'm passionate about coding and its ability to create positive change. I've gained experience in various programming languages and have worked on exciting projects, including the development of this website. Technology has transformed my life, and I'm eager to share my knowledge with fellow coders. Let's learn and grow together in this exciting field!`;
}
function updateTime() {
  const hour = new Date().getHours();
  var greeting;
  if (hour < 12) {
    greeting = `Good Morning! <i class="fa-solid fa-mug-saucer"></i>`
  } else if (hour < 18) {
    greeting = `Good Afternoon! <i class="fa-solid fa-sun-plant-wilt"></i>`
  } else {
    greeting = `Good Evening! <i class="fa-solid fa-cloud-moon"></i>`
  }

  var datetime = new Date().toLocaleTimeString();
  document.getElementById("time").textContent = datetime;
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const date = new Date().toLocaleString('en-IN', options);
  document.getElementById("date").textContent = date;
  document.getElementById("greeting").innerHTML = greeting;
}
updateTime();
setInterval(updateTime, 1000);
const progressBars = document.querySelectorAll('.progress-bar');

function progressBarAnimate(){
  progressBars.forEach((progressBar) => {
    const value = progressBar.getAttribute('data-value');
    let progress = 0;

    function updateProgress() {
      progress += 1;
      progressBar.style.width = progress + '%';

      if (progress < value) {
        setTimeout(updateProgress, 10);
      }
    }
    updateProgress();
  });
}

const ob_Progress = document.querySelector('#observe-me');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      progressBarAnimate();
    }
  });
});
observer.observe(ob_Progress);
function typerWriter(id) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ~`@#$%^&*_+-=<>!{}[]()";
  const element = document.getElementById(id);
  const text = element.getAttribute("data-value");
  let iterations = 0;
  const letterInter = setInterval(() => {
    element.innerHTML = text.split("").map((letter, index) => {
      if (index < iterations) {
        return text[index];
      }
      return letters[Math.floor(Math.random() * letters.length)];
    }).join("");
    if (iterations >= text.length) clearInterval(letterInter);
    iterations += 1 / 3;
  }, 30);
}

const hamburgerIcon = document.getElementById('hamburger-icon');
const menuPage = document.getElementById('menu-page');
const hamburgerIconClose = document.getElementById('hamburger-icon-close');
hamburgerIcon.addEventListener('click', function() {
    menuPage.style.display = 'flex';
});

hamburgerIconClose.addEventListener('click', function() {
    menuPage.style.display = 'none';
});

const mHome = document.getElementById('m-home');
mHome.addEventListener('click', function(){
  typerWriter('m-home')
  setTimeout(() => {
    console.log('pass')
    window.location.href = "./index.html";
  }, 500);
})
const mAboutMe = document.getElementById('m-about-me');
mAboutMe.addEventListener('click', function(){
  typerWriter('m-about-me')
  setTimeout(() => {
    window.location.href = "./about-me.html";
  }, 500);
})
const mBlogs = document.getElementById('m-blogs');
mBlogs.addEventListener('click', function(){
  typerWriter('m-blogs')
  setTimeout(() => {
    window.location.href = "./blogs.html";
  }, 500);
})
const mProjects = document.getElementById('m-projects');
mProjects.addEventListener('click', function(){
  typerWriter('m-projects')
  setTimeout(() => {
    window.location.href = "./projects.html";
  }, 500);
})
const mContact = document.getElementById('m-contact');
mContact.addEventListener('click', function(){
  typerWriter('m-contact')
  setTimeout(() => {
    window.location.href = "./contact.html";
  }, 500);
})
console.log(` 
█▀█ █▀█ ▄▀█ ▀█▀ █▄█ █░█ █▀ █░█
█▀▀ █▀▄ █▀█ ░█░ ░█░ █▄█ ▄█ █▀█
          ▀█▀ █▀▀ █▀█ █▀▄▀█ █ █▄░█ ▄▀█ █░░
          ░█░ ██▄ █▀▄ █░▀░█ █ █░▀█ █▀█ █▄▄ v2.08]
Welcome!!❤️`)

//created by Pratyush with ❤️