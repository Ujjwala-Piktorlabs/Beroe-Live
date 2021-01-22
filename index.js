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
    //  } else if (e.target.parentNode.id === 'noti-toggle') || (e.target.className === 'show-noti'){
    //     let elem = document.getElementById("noti-toggle");
    //     if(elem.style.display == 'block')
    //       elem.style.display = 'none';
    //     else
    //       elem.style.display = 'block';       
    // } else if ((e.target.className === 'show-noti') && (e.target.className !== 'close-noti')){
    //   openNoti();
    } else {
      closeRightMenu();
      // closeNoti();
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


// carousel 
!(function(d){
var itemClassName = "carousel-photo";
items = d.getElementsByClassName(itemClassName),
totalItems = items.length,
slide = 0,
moving = true;

// Set classes
function setInitialClasses() {
  // Targets the previous, current, and next items
  // This assumes there are at least three items.
  items[totalItems - 1].classList.add("prev");
  items[0].classList.add("active");
  items[1].classList.add("next");
}
// Set event listeners
function setEventListeners() {
  var next = d.getElementsByClassName('carousel-button-next')[0],
      prev = d.getElementsByClassName('carousel-button-prev')[0];
  next.addEventListener('click', moveNext);
  prev.addEventListener('click', movePrev);
}

// Next navigation handler
function moveNext() {
  // Check if moving
  if (!moving) {
    // If it's the last slide, reset to 0, else +1
    if (slide === (totalItems - 1)) {
      slide = 0;
    } else {
      slide++;
    }
    // Move carousel to updated slide
    moveCarouselTo(slide);
  }
}
// Previous navigation handler
function movePrev() {
  // Check if moving
  if (!moving) {
    // If it's the first slide, set as the last slide, else -1
    if (slide === 0) {
      slide = (totalItems - 1);
    } else {
      slide--;
    }
    // Move carousel to updated slide
    moveCarouselTo(slide);
  }
}

function disableInteraction() {
  // Set 'moving' to true for the same duration as our transition.
  // (0.5s = 500ms)
  moving = true;
  // setTimeout runs its function once after the given time
  setTimeout(function(){
    moving = false
  }, 500);
}

function moveCarouselTo(slide) {
  // Check if carousel is moving, if not, allow interaction
  if(!moving) {
    // temporarily disable interactivity
    disableInteraction();
    // Update the "old" adjacent slides with "new" ones
    var newPrevious = slide - 1,
        newNext = slide + 1,
        oldPrevious = slide - 2,
        oldNext = slide + 2;
    // Test if carousel has more than three items
    if ((totalItems - 1) > 3) {
      // Checks and updates if the new slides are out of bounds
      if (newPrevious <= 0) {
        oldPrevious = (totalItems - 1);
      } else if (newNext >= (totalItems - 1)){
        oldNext = 0;
      }
      // Checks and updates if slide is at the beginning/end
      if (slide === 0) {
        newPrevious = (totalItems - 1);
        oldPrevious = (totalItems - 2);
        oldNext = (slide + 1);
      } else if (slide === (totalItems -1)) {
        newPrevious = (slide - 1);
        newNext = 0;
        oldNext = 1;
      }
      // Now we've worked out where we are and where we're going, 
      // by adding/removing classes we'll trigger the transitions.
      // Reset old next/prev elements to default classes
      items[oldPrevious].className = itemClassName;
      items[oldNext].className = itemClassName;
      // Add new classes
      items[newPrevious].className = itemClassName + " prev";
      items[slide].className = itemClassName + " active";
      items[newNext].className = itemClassName + " next";
    }
  }
}

function initCarousel() {
  setInitialClasses();
  setEventListeners();
  // Set moving to false so that the carousel becomes interactive
  moving = false;
}
initCarousel();

}(document));