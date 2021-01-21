// Add active class to the current nav icon (highlight it) *******************
let header = document.getElementById("navbar-tail");
let icons = header.getElementsByClassName("nav");
for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

//More-Less text for Blog-Article *********************
let message = document.getElementsByClassName("change-link-text");
for (let i = 0; i < message.length; i++) {
  message[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("show-text");
    for (let j = i; j < current.length; j++){
      if (message[i].textContent == 'More'){
        current[j].style.cssText = "display: block;";
        message[i].innerText = "Less";
        break;
      } else if (message[i].textContent == 'Less'){
        // current[j].classList += 'max-lines'
        current[j].style.cssText = "overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;"
        message[i].innerText = "More";
        break;
      }
    }
  });
}
//More Less text for Blog-Articles
// function displayMoreText() {
//   document.getElementsByClassName("show-text").style.display = "block";
//   document.getElementsByClassName("change-link-text").innerHTML = "<a href='javascript:displayLessText()' class='change-link-text'>Less</a>";
// }
// function displayLessText() {
//   document.getElementsByClassName("show-text").style.cssText = "overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;"
//   document.getElementsByClassName("change-link-text").innerHTML = "<a href='javascript:displayMoreText()' class='change-link-text'>More</a>";
// }

// Ask Beroe side bar *************************
function openRightMenu() {
    document.getElementById("right-menu").style.display = "block";
}
  
function closeRightMenu() {
  document.getElementById("right-menu").style.display = "none";
}

window.onload = function(){
  document.onclick = function(e){
    if((e.target.parentNode.id === 'ask-beroe') || (e.target.className === 'side-bar-open')
     || (e.target.id === 'right-menu') && (e.target.id !== 'side-bar-close')) {
      openRightMenu();
    }else {
      closeRightMenu();
    }
  };
}

//toggle notification *******************************
function openNoti() {
  let elem = document.getElementById("noti-toggle");
  if(elem.style.display == 'block')
    elem.style.display = 'none';
  else
    elem.style.display = 'block';  
}

function closeNoti() {
  document.getElementById("noti-toggle").style.display = "none";
}