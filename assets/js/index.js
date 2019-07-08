$(document).ready(function() {
  document.getElementsByClassName('intropage')[0].style.visibility = "visible";
  document.getElementsByClassName('overviewpage')[0].style.visibility = "hidden";

});

$(document).scroll(function() {

    if ($(this).scrollTop() > 10)
     {
       $('.overviewpage').style.visibility = "visible"
     }
    else
     {
       $('.elements').hide();     }
 });
(function($) {
  $.jInvertScroll(['.scroll'], // an array containing the selector(s) for the elements you want to animate
    {
      height: 6000, // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
      onScroll: function(percent) { //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
      }
    });

  // $('.menu a').on('click', function(e) {
  //   e.preventDefault();
  //   var target = '.' + $(this).data('target');
  //   var left = $(target).position().left;
  //   var total = $('.front.scroll').width();
  //   var perc = left / (total - $(window).width()) * 100;
  //
  //   var height = $('html').height();
  //   var final = ((height - $(window).height()) / 100 * perc);
  //
  //   $('html, body').animate({
  //     scrollTop: final
  //   }, 500);
  // });


}(jQuery));
