const instagram = document.querySelector('#instagram');
const linkedin = document.querySelector('#linkedin');
const github = document.querySelector('#github');
const body = document.querySelector('body');
var favicon = document.getElementById("favicon");

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

const API_ENDPOINT="https://dev.to/api/articles?username=pratyushnirwan&per_page=5";

async function fetchBlogPosts(){
    const response = await fetch(API_ENDPOINT);
    const posts = await response.json();
    const blogsGrid = document.getElementById('blogs-grid');
    for(let post of posts){
        const blog = document.createElement('div');
        blog.id = 'blog-card';
        const link = document.createElement('a');
        const coverImg = document.createElement('img');
        const title = document.createElement('h2');
        const description = document.createElement('p');
        coverImg.src = post.cover_image;
        title.textContent = post.title;
        description.textContent = post.description;
        link.href = post.url;
        link.target = "_blank";
        blog.appendChild(coverImg);
        blog.appendChild(title);
        blog.appendChild(description);
        link.appendChild(blog);
        blogsGrid.appendChild(link);
    }
}
fetchBlogPosts();
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