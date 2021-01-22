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
  let current = document.getElementsByClassName(" show-text");
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

// carousel *******************************************
$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
    {
      loop:false,
      margin:10,
      nav:true,
      navText: ["<img src='images/chevron-left.png' style='height:13px'>","<img src='images/chevron.png' style='height:13px'>"],
      autoplay:true,
      autoplayTimeout:3000,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:3
          }
      }
    }
  );
});

function clickedElips(e) {
  let parentNode = e.target.parentNode.parentNode.parentNode.parentNode
  parentNode.classList.add('Delete')
  document.getElementById('id02').style.display='block'
}

function noDel(){
  let nodel = document.querySelectorAll(".Delete");
  nodel.forEach(el=>{
    el.classList.remove('Delete')
  })
  document.getElementById('id02').style.display='none'
}

$('#click-del').click(function(e){ 
  let i = 0
  e.preventDefault(); //-- prevent form submit
  let item = document.getElementsByClassName('item')
  for(i=0; i < item.length; i++){
    if(item[i].classList.contains('Delete')) 
    break;
  }
  document.getElementById('id02').style.display='none'
  $(".owl-carousel").trigger('remove.owl.carousel', [i]).trigger('refresh.owl.carousel');
});

function addCarousel(e) {
  e.preventDefault(); //-- prevent form submit

  let dataToAdd = '<div class="item"> <div class="blog-article"> <div class="card white-card"> <div class="align-icons"> <p>100 Facilities Management - Market Size Estimate - Europe, North America and MEA</p> <img onclick="clickedElips(event)" src="images/ellipsis.png" alt="ellipsis"> </div> <div class="img-resize"><img src="https://source.unsplash.com/random.PNG" alt="Avatar"></div> </div> </div> </div>'

  let items = document.getElementsByClassName('item')
  console.log(items.length);

  $('.owl-carousel').trigger('add.owl.carousel',  [$(dataToAdd),items.length-1])
      .trigger('refresh.owl.carousel');
  document.getElementById('id01').style.display='none'
}