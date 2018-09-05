/**************************************/
/*      clikable toggle        */
/**************************************/
var navToggle = document.getElementById('navToggle');
var mobileNav = document.getElementById('mobileNav');

navToggle.addEventListener('click', function() {
  if(mobileNav.classList.contains('open')) {
    mobileNav.classList.remove('open');
  } else {
    mobileNav.classList.add('open');
  }
});

/**************************************/
/*      search box functions       */
/**************************************/
var searchToggle = document.getElementById('searchToggle');
var searchBox = document.getElementById('searchBox');

searchToggle.addEventListener('click', function() {
  if(searchBox.classList.contains('open')) {
    searchBox.classList.remove('open');
  } else {
    searchBox.classList.add('open');
  }
});

// hide search box if clicked outside
document.addEventListener("click", function(event) {
  console.log()
  if (!event.target.closest("#searchBox") && event.target.id != "searchToggle") {
    console.log('clicked outside')
    searchBox.classList.remove('open');
  }
});

function myfunction(x) {
  x.classList.toggle("change");
}

/**************************************/
/*      accordion effectr        */
/**************************************/
var acc = document.getElementsByClassName("accordion");
for(var i = 0; i < acc.length ; i ++) {
  acc[i].addEventListener("click", function(){

    this.classList.toggle("active");

    var panel = this.nextElementSibling ;
    if(panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/**************************************/
/*      main visual slider        */
/**************************************/
var images = [
  'main_visual.jpg',
  'main_visual1.jpg',
  'main_visual2.jpg',
]
var mainVisual = document.getElementsByClassName('main-visual')[0];
var img = 1;

function updateSlider() {
  mainVisual.style.backgroundImage = 'url(img/'+images[img]+')'
  img++;
  if(img > images.length-1) {
    img = 0;
  }
}
setInterval(function() {
  updateSlider();
}, 2000)

/**************************************/
/*      SMOOTH SCROLL FUNCTION        */
/**************************************/
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 41+'px'
        }, 1000);
        return false;
      }
    }
  });
});
