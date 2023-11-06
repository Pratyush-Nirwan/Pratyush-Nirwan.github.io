const menuOpen = document.getElementById("menu-open");
const menuClose = document.getElementById("menu-close");
const menu = document.getElementById("menu")
const socialsBtn = document.getElementById("socials-btn")
const socials = document.getElementById("socials")
const body = document.body;
const cursor = document.querySelector(".cursor");
const cursorInner = document.querySelector(".cursor-inner");
const dot = document.querySelector(".dot");

let dotX = window.innerWidth / 2;
let dotY = window.innerHeight / 2;
let isMouseInside = true;


function updateAuraPosition(e) {
  dotX = e.clientX - 250;
  dotY = e.clientY - 230;
}

function animateElements() {
  if (!isMouseInside) {

    dot.style.visibility = "hidden";
  } else {

    dot.style.visibility = "visible";
    
    const easeFactor = 0.2; // Adjust for desired smoothness
    
    const dotDx = dotX - parseInt(dot.style.left || 0);
    const dotDy = dotY - parseInt(dot.style.top || 0);
    
    dot.style.left = `${parseInt(dot.style.left || 0) + dotDx * easeFactor}px`;
    dot.style.top = `${parseInt(dot.style.top || 0) + dotDy * easeFactor}px`;
  }

  requestAnimationFrame(animateElements);
}

window.addEventListener("mousemove", (e) => {
  updateAuraPosition(e);
});

window.addEventListener("mouseout", () => {
  isMouseInside = false;
});

window.addEventListener("mouseover", () => {
  isMouseInside = true;
});

requestAnimationFrame(animateElements);
const links = document.querySelectorAll('a');

function updateTime() {
    var datetime = new Date().toLocaleTimeString();
    document.getElementById("time").textContent = datetime;
    const options = {
      year: 'numeric',
      day: 'numeric',
      month: 'long',
    };
    const date = new Date().toLocaleString('en-IN', options);
    document.getElementById("date").textContent = date;
  }

  updateTime();
  setInterval(updateTime, 1000);

  menuOpen.addEventListener("click", () => {
    body.classList.add("stop-scrolling")
    menu.style.animation = "fadeIn 0.5s ease"
    menu.style.display = "flex";
    menu.style.zIndex = "100"
  })
  menuClose.addEventListener("click", () => {
    body.classList.remove("stop-scrolling")
    menu.style.animation="fadeOut 0.5s ease";
    setTimeout(() => {
      menu.style.removeProperty("display")  
      menu.style.zIndex = ""  
    }, 500);
  })
  let displayingSocials = false;
  socialsBtn.addEventListener('click', () => {
    if(displayingSocials){
      socials.style.left = "-10em"
      socialsBtn.style.removeProperty('transform');
      displayingSocials=false;
    }else{
      socials.style.left="-10px"
      socialsBtn.style.transform = "rotate(-180deg)"
      displayingSocials=true;
    }
  })