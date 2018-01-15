$(function(){
  var menuwidth  = 260; // pixel value for sliding menu width
  var menuspeed  = 0; // milliseconds for sliding menu animation time
  
  var $bdy       = $('body');
  var $sidebar    = $('#sidebarmenu');
  var poswidth   = menuwidth+"px";
  
  $('.menu').on('click',function(e){
    if($bdy.hasClass('sidebaractive')) {
      jsAnimateMenu('close');
    } else {
      jsAnimateMenu('open');
    }
  });
  
  $('.overlay').on('click', function(e){
    if($bdy.hasClass('sidebaractive')) {
      jsAnimateMenu('close');
    }
  });
  
  $('a[href$="#menu"]').on('click', function(e){
    e.preventDefault();
  });
  
  function jsAnimateMenu(tog) {
    if(tog == 'open') {
      $bdy.addClass('sidebaractive');
      $sidebar.animate({width: poswidth}, menuspeed);
      $(".overlay").show();
    }
    
    if(tog == 'close') {
      $bdy.removeClass('sidebaractive');
      $sidebar.animate({width: "0"}, menuspeed);
      $("#challenge-sub").hide();
      $("#blog-sub").hide();
      $("#works-sub").hide();
      $("#about-sub").hide();
      $("#story-sub-1").hide();
      $("#story-sub-2").hide();
      $(".overlay").hide();
    }
  }
});