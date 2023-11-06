const progressBars = document.querySelectorAll('.progress-bar');

function progressBarAnimate() {
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

function isMobileDevice() {
  if(screen.width<=600){
    console.log("pass")
    return true;
  }else{
    console.log("fail")
  }
}
if (isMobileDevice()) {
  var element = document.getElementById("about-me-details");
  element.innerHTML = `I'm Pratyush,
  <br>a tech student at Yeshwantrao Chavan College of Engineering in Nagpur. I'm passionate about coding and its ability to create positive change. I've gained experience in various programming languages and have worked on exciting projects, including the development of this website. Technology has transformed my life, and I'm eager to share my knowledge with fellow coders. Let's learn and grow together in this exciting field!`;
}