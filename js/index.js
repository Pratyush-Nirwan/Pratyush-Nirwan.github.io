import { output } from "/js/console.js";
const quote = document.getElementById("quote");
  function fetchRandomQuote() {
    fetch('assets/quotes.txt')
      .then((response) => response.json())
      .then((data) => {
        const filteredQuotes = data.filter((quote) => quote.text.length <= 30);
        if (filteredQuotes.length > 0) {
          const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
          const formattedQuote = `"${filteredQuotes[randomIndex].text}"`;
          const finalHtml = `${formattedQuote}<br>`;
          document.getElementById('quote-text').innerHTML = finalHtml;
        } else {
          document.getElementById('quote-text').innerHTML = 'No quotes found.';
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

  const colorChange = document.getElementById("photo");
  colorChange.addEventListener("click", () => {
    let hue = 0;
    let timerId;
    clearInterval(timerId);
    timerId = setInterval(() => {
      document.documentElement.style.setProperty('--blue', `hsl(${hue}, 100%, 50%)`);
      document.documentElement.style.setProperty('--red', `hsl(${hue+100}, 100%, 50%)`);
      hue++;
    }, 1); 
    setTimeout(() => {
      clearInterval(timerId);
      document.documentElement.style.setProperty('--blue', `#0aefff`);
      document.documentElement.style.setProperty('--red', `#ff0000`);
    }, 3000);
  })

  const loadingCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('loaded='));
  const isLoaded = loadingCookie ? loadingCookie.split('=')[1] : false;
  if (!isLoaded) {
    const terminal = document.querySelector(".load");
    terminal.style.display = 'block'
    var textarea = document.querySelector('.term')
    var text = ' ./pcoder_me.sh';
    
    var i = 0;
    
    runner();
    
    function runner() {
      textarea.append(text.charAt(i));
      i++;
      setTimeout(
        function() {
          if (i < text.length)
            runner();
          else {
            textarea.innerHTML += "<br>"
            i = 0;
            setTimeout(function() {feedbacker();}, 1000);
          }
        }, Math.floor(Math.random() * 220) + 50);
    }
    
    var i = 0;
    
    function feedbacker() {
      function output_log(i) {
        textarea.innerHTML += output[i] + '<br>';
      }
    
      function runInterval() {
        if (i < output.length) {
          output_log(i);
          i++;
          var time = Math.floor(Math.random() * 300); // Generate a new random time interval
          setTimeout(runInterval, time); // Set a new timeout with the new time interval
        }else{
          setTimeout(() => {
            terminal.style.animation = 'fadeOut 1.5s ease'
            setTimeout(() => {
            terminal.style.display = 'none'
            }, 1000);
          }, 2500);
        }
      }
    
      runInterval();
    }
    function output_log(i){
      textarea.innerHTML += output[i] + '<br>'
    }
    const expirationTime = new Date();
      expirationTime.setTime(expirationTime.getTime() + 60 * 60 * 1000); 
      document.cookie = 'loaded=true; expires=' + expirationTime.toUTCString() + '; path=/';
  }