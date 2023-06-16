var i = 0;
var txt = 'The Download Inspector  project is a web browser extension/application that intercepts download requests from the browser and checks the requested files for malicious software using an API and database. The goal of the Minimum Viable Product (MVP) is to provide basic functionality for users to safely download files without worrying about potential malware infections. '; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("one").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

var sidemenu = document.getElementById("sidemenu");
function openmenu(){
  sidemenu.style.right = "0";
};
function closemenu(){
  sidemenu.style.right = "-200px";
};
