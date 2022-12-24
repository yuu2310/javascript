// $(function(){
//   $('.box1').show();
//   $('.box1').css({
//     'background-color':'#0000FF'
//   });
// });

// $(function(){
//   $('.box1').slideDown(2000,function(){
//     $('.box1').css({
//       'background-color':'#0000FF',
//       'height':'100px',
//       'width':'200px'
//     }).slideUp(2000);
//   });
// });

// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// $(function(){
//   $('.box1').on('click',function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// $(function(){
//   $('.bg1').on('click', function(){
//     $('.bg1').slideUp();
//   });
// });

// $(function(){
//   $('.bg2').on('click', function(){
//     $('.bg2').slideUp();
//   });
// });

// $(function(){
//   $('.bg3').on('click', function(){
//     $('.bg3').slideUp();
//   });
// });

// $(function(){
//   $('.bg4').on('click', function(){
//     $('.bg4').slideUp();
//   });
// });


// thisによる記述
// thisは、イベントが発生した要素のみ変化させたいときに使う
// $(function(){
//   $('.box1').on('click', function(){
//     $(this).slideUp();
//   });
// });

// childrenによる記述
// childrenは、HTML要素直下のすべての子要素を取得するときに使う
$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color', 'red');
  });
});