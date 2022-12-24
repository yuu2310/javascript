$(function(){
  $('#back a').on('click', function(e){
    $('body, html').animate({
      scrollTop:0
    }, 600);
    e.preventDefault();
  });
});