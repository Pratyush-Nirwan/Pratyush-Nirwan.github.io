const instagram = document.querySelector('#instagram');
const linkedin = document.querySelector('#linkedin');
const github = document.querySelector('#github');
const body = document.querySelector('body');
function updateTime() {
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
}
updateTime();
setInterval(updateTime, 1000);

console.log(` 
█▀█ █▀█ ▄▀█ ▀█▀ █▄█ █░█ █▀ █░█
█▀▀ █▀▄ █▀█ ░█░ ░█░ █▄█ ▄█ █▀█
          ▀█▀ █▀▀ █▀█ █▀▄▀█ █ █▄░█ ▄▀█ █░░
          ░█░ ██▄ █▀▄ █░▀░█ █ █░▀█ █▀█ █▄▄ v2.08]
Welcome!!❤️`)

//created by Pratyush with ❤️