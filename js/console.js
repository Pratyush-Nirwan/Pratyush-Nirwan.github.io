const currentDate = new Date();

const year = currentDate.getFullYear();
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const day = currentDate.getDate().toString().padStart(2, '0');
const date = `${year}-${month}-${day} LOG`;
const output =[
    `[${date}] Initiating 'pcoder.me' website loading process`,
    `[${date}] Establishing a network connection to 'pcoder.me'`,
    `[${date}] DNS resolution for 'pcoder.me' completed, IP: 192.168.1.100`,
    `[${date}] Establishing a secure HTTPS connection to 'pcoder.me'`,
    `[${date}] Connected to 'pcoder.me' server (TLS 1.2)`,
    `[${date}] Requesting the HTML content from 'pcoder.me'`,
    `[${date}] Received HTML content (200 OK)`,
    `[${date}] Parsing HTML and loading resources`,
    `[${date}] Initiating the retrieval of 'styles.css' from 'pcoder.me'`,
    `[${date}] CSS file 'styles.css' loaded successfully`,
    `[${date}] Applying CSS styles to the webpage`,
    `<br>`,
    `[${date}] Executing JavaScript code on 'pcoder.me'`,
    `[${date}] Loading images and media resources`,
    `[${date}] Downloading image files' from 'pcoder.me'`,
    `[${date}] image files loaded successfully`,
    `[${date}] Created by Pratyush with ♡ ©2023`,
    `<br>`,
    `[${date}] Finalizing rendering and layout`,
    `[${date}] Building the DOM tree and applying styles`,
    `[${date}] Interactive elements initialized`,
    `[${date}] Page layout adjusted for responsive design`,
    `[${date}] Website 'pcoder.me' is fully loaded and interactive`,
    `<br><hr>`,
    `
    ██████╗░░█████╗░░█████╗░██████╗░███████╗██████╗░░░░███╗░░░███╗███████╗  ██████╗░░░░░█████╗░<br>
    ██╔══██╗██╔══██╗██╔══██╗██╔══██╗██╔════╝██╔══██╗░░░████╗░████║██╔════╝  ╚════██╗░░░██╔══██╗<br>
    ██████╔╝██║░░╚═╝██║░░██║██║░░██║█████╗░░██████╔╝░░░██╔████╔██║█████╗░░  ░█████╔╝░░░██║░░██║<br>
    ██╔═══╝░██║░░██╗██║░░██║██║░░██║██╔══╝░░██╔══██╗░░░██║╚██╔╝██║██╔══╝░░  ░╚═══██╗░░░██║░░██║<br>
    ██║░░░░░╚█████╔╝╚█████╔╝██████╔╝███████╗██║░░██║██╗██║░╚═╝░██║███████╗  ██████╔╝██╗╚█████╔╝<br>
    ╚═╝░░░░░░╚════╝░░╚════╝░╚═════╝░╚══════╝╚═╝░░╚═╝╚═╝╚═╝░░░░░╚═╝╚══════╝  ╚═════╝░╚═╝░╚════╝░`,
    `<br>Welcome!`,
  ]
export{output}