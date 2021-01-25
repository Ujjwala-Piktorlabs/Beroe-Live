// Active nav item
function navActive(id){
  let el = document.getElementById(id)
  let current = document.querySelectorAll(".nav-active");
  current.forEach((ele) => {
    ele.classList.remove('nav-active')
  })
  el.classList.add("nav-active")
}

//More-Less text for Blog-Article
function displayText(id){
  let elem = document.getElementById(id)
  let cardHeader = elem.parentNode.parentNode.previousElementSibling.querySelector('.blog-content.show-text')
  if(cardHeader.classList.toggle('max-lines')){
    elem.innerText = "More";
  }else{
    elem.innerText = "Less";
  }
}

//toggle display notification and side bar
function toggleHiddenItems(event,param) {
  let x = document.getElementById(param)
  if(x.classList.contains('shown')){
    if(param === 'right-menu'){
      x.classList.add('animate-close')
      x.classList.remove('animate-right')
    }
  }else{
    if(param === 'right-menu'){
      console.log(param);
      x.classList.add('animate-right')
      x.classList.remove('animate-close')
    }
  }
  x.classList.toggle('shown')
  event.stopPropagation()
}

//Body click close notification & side bar
document.onclick = function(){
  let shownElements  = document.querySelectorAll('.shown');
  shownElements.forEach((el)=>{
    if(el.classList.contains("shown"))
    el.classList.remove("shown")
  })
};

// carousel 
$(document).ready(function(){
  $(".owl-carousel").owlCarousel(
    {
      loop:false,
      margin:10,
      nav:true,
      navText: ["<img src='images/chevron-left.png' style='height:13px'>","<img src='images/chevron.png' style='height:13px'>"],
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
  document.getElementById('id02').classList.toggle('hidden')
}

function noDel(){
  let nodel = document.querySelectorAll(".Delete");
  nodel.forEach(el=>{
    el.classList.remove('Delete')
  })
  document.getElementById('id02').classList.toggle('hidden')
}

$('#click-del').click(function(e){ 
  let i = 0
  e.preventDefault();
  let item = document.getElementsByClassName('item')
  for(i=0; i < item.length; i++){
    if(item[i].classList.contains('Delete')) 
    break;
  }
  document.getElementById('id02').classList.toggle('hidden')
  $(".owl-carousel").trigger('remove.owl.carousel', [i]).trigger('refresh.owl.carousel');
});

function addCarousel(e) {
  e.preventDefault();
  let dataToAdd = '<div class="item"> <div class="blog-article"> <div class="card white-card"> <div class="align-icons"> <p>100 Facilities Management - Market Size Estimate - Europe, North America and MEA</p> <img onclick="clickedElips(event)" src="images/ellipsis.png" alt="ellipsis"> </div> <div class="img-resize"><img src="https://source.unsplash.com/random.PNG" alt="Avatar"></div> </div> </div> </div>'
  let items = document.getElementsByClassName('item')
  $('.owl-carousel').trigger('add.owl.carousel', [$(dataToAdd),items.length-1])
    .trigger('refresh.owl.carousel');
  document.getElementById('id01').classList.toggle('hidden')
}