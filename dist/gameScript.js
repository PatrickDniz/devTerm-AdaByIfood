import Game from"./gameClass.js";const historic=JSON.parse(localStorage.getItem("historic"))||[],levelNow=historic.length+1,phaseDiv=document.querySelector(".game_top__phase span"),nextButton=document.querySelector(".game_top__next"),words=(phaseDiv.innerHTML=levelNow,["API","CSS","CPU","SQL","VPN","SDK","GIT","PUT","CLI","RAM","XML","LAN","DNS","NPM","FTP","GET","HTML","CSS3","REST","JSON","SOAP","AJAX","POST","WiFi","Auth","SMTP","IMAP","HTTP","SOLID"]),word=words[historic.length];if(word){const a=word.length,b=document.querySelector(".game_bottom__clue--length strong"),c=document.querySelector(".game_middle__board--input"),d=(b.innerHTML=a,c.setAttribute("maxlength",a),new Game(word).start())}else console.log("zerou o game");nextButton.addEventListener("click",()=>{location.reload()});