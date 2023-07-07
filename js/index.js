const instagram = document.querySelector('#instagram');
const linkedin = document.querySelector('#linkedin');
const github = document.querySelector('#github');
const myPhotoIntro = document.querySelector('#my-photo-intro');
const body = document.querySelector('body');
const quote = document.querySelector('#quote');
const name = document.getElementById("name");
const meme1 = document.getElementById("meme1");
const loadingScreen = document.getElementById("loading-screen");
const loadingText = document.getElementById("loading-text");
const simulateServerStartup = () => {
  const loadingCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('loaded='));
  const isLoaded = loadingCookie ? loadingCookie.split('=')[1] : false;
  if (isLoaded) {
    loadingScreen.style.display = "none";
  } else {
    const randomNum = Math.floor(Math.random() * (5 - 3 + 1) + 3);
    setTimeout(() => {
      document.cookie
      loadingScreen.style.display = 'none';
      const expirationTime = new Date();
      expirationTime.setTime(expirationTime.getTime() + 60 * 60 * 1000); 
      document.cookie = 'loaded=true; expires=' + expirationTime.toUTCString() + '; path=/';
    }, randomNum * 1000);
  }
};
simulateServerStartup();
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

function fetchRandomQuote() {
  fetch('assets/quotes.txt')
    .then((response) => response.json())
    .then((data) => {
      const filteredQuotes = data.filter((quote) => quote.text.length <= 30);
      if (filteredQuotes.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
        const formattedQuote = `"${filteredQuotes[randomIndex].text}"`;
        const formattedAuthor = `- ${filteredQuotes[randomIndex].author}`;
        const finalHtml = `${formattedQuote}<br><span class="author"><br>${formattedAuthor}</span>`;
        document.getElementById('quote').innerHTML = finalHtml;
      } else {
        document.getElementById('quote').innerHTML = 'No quotes found.';
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

fetchRandomQuote();


quote.addEventListener("click", () => {
  fetchRandomQuote();
})
const colorChange = document.getElementById("my-photo-intro");
colorChange.addEventListener("click", () => {
  let hue = 0;
  let timerId;
  clearInterval(timerId);
  timerId = setInterval(() => {
    document.body.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
    hue++;
  }, 1);
  setTimeout(() => {
    clearInterval(timerId);
    document.body.removeAttribute("style");
  }, 3000);
});

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

window.onload = () => {
  typerWriter("name");
};
name.addEventListener("click", () => {
  typerWriter("name");
})

function typeThis(elementId, message, interval) {
  const cursor = document.createElement('span');
  const container = document.getElementById(elementId);
  container.textContent = ""
  container.appendChild(cursor);
  const lines = message.split('\n');
  let i = 0, j = 0;
  const typing = setInterval(() => {
    if (i < lines.length) {
      const line = lines[i];
      if (j <= line.length) {
        container.children[i].textContent = line.slice(0, j);
        j++;
      } else if (i < lines.length - 1) {
        const div = document.createElement('div');
        container.appendChild(div);
        const cursor = document.createElement('span');
        div.appendChild(cursor);
        i++;
        j = 0;
      } else {
        clearInterval(typing);
      }
    }
  }, interval);
}

function createButton(text, id, class_, parent) {
  const btn = document.createElement('button');
  btn.textContent = text;
  btn.id = id;
  btn.classList.add(class_);
  if (parent) {
    const par = document.getElementById(parent);
    par.appendChild(btn);
  }
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