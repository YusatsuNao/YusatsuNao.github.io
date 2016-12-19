$(function(){
  var menuwidth  = 240; // pixel value for sliding menu width
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
    }
    
    if(tog == 'close') {
      $bdy.removeClass('sidebaractive');
      $sidebar.animate({width: "0"}, menuspeed);
      $("#menu-list-head").show();
      $("#menu-sub-works").hide();
      $("#menu-sub-about").hide();
    }
  }
});