import Game from './gameClass.js';

const historic = JSON.parse(localStorage.getItem('historic')) || [];
const levelNow = historic.length + 1;
const phaseDiv = document.querySelector(".game_top__phase span");
const nextButton = document.querySelector(".game_top__next");
phaseDiv.innerHTML = levelNow;
const words = [
  "API", "CSS", "CPU", "SQL", "VPN", "SDK", "GIT", "PUT",
  "CLI", "RAM", "XML", "LAN", "DNS", "NPM", "FTP", "GET",
  "HTML", "CSS3", "REST", "JSON", "SOAP", "AJAX", "POST",
  "WiFi", "Auth", "SMTP", "IMAP", "HTTP",
  "SOLID"
];

const word = words[historic.length];

if(!!word){
  const wordLength = word.length;
  const divLength = document.querySelector(".game_bottom__clue--length strong");
  const input = document.querySelector(".game_middle__board--input");
  divLength.innerHTML = wordLength;
  input.setAttribute("maxlength", wordLength);
  const term = new Game(word).start();
} else {
  console.log("zerou o game")
}

nextButton.addEventListener("click", () => { location.reload(); })

