$(function(){
  $('.menu-toggle, .menu-close').on('click', function(e){
    e.preventDefault();
    $('.menu').toggleClass('min');
  });
});