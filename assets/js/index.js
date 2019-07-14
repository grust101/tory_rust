$(document).ready(function() {
  document.getElementsByTagName('html')[0].style.visibility = "visible";
  document.getElementsByClassName('sidenav')[0].style.display = "none";
});

$(window).ready(function() {
  $(this).scrollTop(0);

  $(".fashion-link").click(function() {
    $('.fashion').show('slow');
    $('.overview').hide();
    $('.beauty').hide();
    $('.cinemagraphsgifs').hide();
    $('.commissioned').hide();
    $('.motion').hide();
    $('.about').hide();
  });

  $(".overview-link").click(function() {
    $('.overview').show('slow');
    $('.fashion').hide();
    $('.beauty').hide();
    $('.cinemagraphsgifs').hide();
    $('.commissioned').hide();
    $('.motion').hide();
    $('.about').hide();
  });

  $(".beauty-link").click(function() {
    $('.fashion').hide();
    $('.overview').hide();
    $('.cinemagraphsgifs').hide();
    $('.commissioned').hide();
    $('.motion').hide();
    $('.about').hide();
    $('.beauty').show('slow');

  });
});

$(window).ready(function() {
  $(".overview-link").click(function() {
    $('.overview').show();
    $('.fashion').hide();
    $('.beauty').hide();
    $('.cinemagraphsgifs').hide();
    $('.commissioned').hide();
    $('.motion').hide();
    $('.about').hide();
  });
});

$(window).ready(function() {
  $(".beauty-link").click(function() {
    $('.fashion').hide();
    $('.overview').hide();
    $('.cinemagraphsgifs').hide();
    $('.commissioned').hide();
    $('.motion').hide();
    $('.about').hide();
    $('.beauty').show('slow');

  });
});

$(window).ready(function() {
  $(".commissioned-link").click(function() {
    $('.commissioned').show('slow');
    $('.fashion').hide();
    $('.overview').hide();
    $('.cinemagraphsgifs').hide();
    $('.beauty').hide();
    $('.motion').hide();
    $('.about').hide();
  });
});

$(window).ready(function() {
  $(".cinemagraphsgifs-link").click(function() {
    $('.cinemagraphsgifs').show('slow');
    $('.fashion').hide();
    $('.overview').hide();
    $('.commissioned').hide();
    $('.beauty').hide();
    $('.motion').hide();
    $('.about').hide();
  });
});
$(window).ready(function() {
  $(".motion-link").click(function() {
    $('.motion').show('slow');
    $('.fashion').hide();
    $('.overview').hide();
    $('.commissioned').hide();
    $('.beauty').hide();
    $('.cinemagraphsgifs').hide();
    $('.about').hide();
  });
});

$(window).ready(function() {
  $(".about-link").click(function() {
    $('.motion').show('slow');
    $('.fashion').hide();
    $('.overview').hide();
    $('.commissioned').hide();
    $('.beauty').hide();
    $('.cinemagraphsgifs').hide();
    $('.motion').hide();
  });
});

$(window).scroll(function() {
  if ($(this).scrollTop() > 750) {
    $('.logopage').hide('slow');
    $('.sidenav').show('slow');

  } else {
    $('.logopage').show('slow');
    $('.sidenav').hide('slow');
  }
});

(function($) {
  $.jInvertScroll(['.scroll'], // an array containing the selector(s) for the elements you want to animate
    {
      height: 6000, // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
      onScroll: function(percent) { //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
      }
    });

}(jQuery));
