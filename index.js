
$(document).ready(function(){

$nav=$('.nav');
$toggleCollapse=$('.toggle-collapse');

// creating the on click event
$toggleCollapse.click( function(){
$nav.toggleClass('collapse');
})

//calling Owl carousel

$('.owl-carousel').owlCarousel({
  loop:true,
  autoplay:false,
  autoplayTimeout:3000,
  navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
  responsive:{
    0:{
      items:1
    },
    320:{
      items:1
    },
    560:{
      items:2
    },
    960:{
      items:3
    }
  }
});


// click to go up
$('.move-up span').click(function(){
  $('html,body').animate({
    scrollTop:0
  },1000);
})

// Aos instance
AOS.init();

}); // end of ready function
