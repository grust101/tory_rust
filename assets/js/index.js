$(document).ready(function() {
  document.getElementsByTagName('html')[0].style.visibility = "visible";
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 700)
     {
       $('.overviewpage').show('slow');
     }
    else
     {
       $('.overviewpage').hide();     }
 });

  $(window).scroll(function() {
      if ($(this).scrollTop() > 750)
       {
         $('.logopage').hide('slow');
         $('.sidenav').show('slow');
       }
      else
       {
         $('.logopage').show('slow');
         $('.sidenav').hide('slow');     }
   });

   function myFunction() {
     var x = document.getElementByClassName("overviewpage");
     if (x.style.display === "none") {
       x.style.display = "block";
     } else {
       x.style.display = "none";
     }
   }

(function($) {
  $.jInvertScroll(['.scroll'], // an array containing the selector(s) for the elements you want to animate
    {
      height: 6000, // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
      onScroll: function(percent) { //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
      }
    });

}(jQuery));
