$(window).on('beforeunload', function() {
  $(window).scrollTop(0);
});

$(document).ready(function() {
  document.getElementsByTagName('html')[0].style.visibility = "visible";
  document.getElementsByClassName('sidenav')[0].style.display = "none";
});


$(window).ready(function() {
  $(".fashion-link").click(function() {
    $(window).scrollTop(1550);
    $('.initial-ov').css('font-style', 'normal');
    $('.initial-ov').css('background-color', 'transparent');
    $('.initial-be').css('font-style', 'normal');
    $('.initial-be').css('background-color', 'transparent');
    $('.initial-co').css('font-style', 'normal');
    $('.initial-co').css('background-color', 'transparent');
    $('.initial-gi').css('font-style', 'normal');
    $('.initial-gi').css('background-color', 'transparent');
    $('.initial-mo').css('font-style', 'normal');
    $('.initial-mo').css('background-color', 'transparent');
    $('.initial-ab').css('font-style', 'normal');
    $('.initial-ab').css('background-color', 'transparent');
    $('.initial-fa').css('font-style', 'italic');
    $('.initial-fa').css('background-color', '#cccccc');
    $('.fashion').show();
    $('.overview').hide();
    $('.beauty').hide();
    $('.cinemagraphsgifs').hide();
    $('.commissioned').hide();
    $('.motion').hide();
    $('.about').hide();
  });

  $(".overview-link").click(function() {
    $(window).scrollTop(1550);
    $('.initial-fa').css('font-style', 'normal');
    $('.initial-fa').css('background-color', 'transparent');
    $('.initial-be').css('font-style', 'normal');
    $('.initial-be').css('background-color', 'transparent');
    $('.initial-co').css('font-style', 'normal');
    $('.initial-co').css('background-color', 'transparent');
    $('.initial-gi').css('font-style', 'normal');
    $('.initial-gi').css('background-color', 'transparent');
    $('.initial-mo').css('font-style', 'normal');
    $('.initial-mo').css('background-color', 'transparent');
    $('.initial-ab').css('font-style', 'normal');
    $('.initial-ab').css('background-color', 'transparent');
    $('.initial-ov').css('font-style', 'italic');
    $('.initial-ov').css('background-color', '#cccccc');
    $('.overview').show();
    $('.fashion').hide();
    $('.beauty').hide();
    $('.cinemagraphsgifs').hide();
    $('.commissioned').hide();
    $('.motion').hide();
    $('.about').hide();
  });

  $(".beauty-link").click(function() {
    $(window).scrollTop(1550);
    $('.initial-ov').css('font-style', 'normal');
    $('.initial-ov').css('background-color', 'transparent');
    $('.initial-fa').css('font-style', 'normal');
    $('.initial-fa').css('background-color', 'transparent');
    $('.initial-co').css('font-style', 'normal');
    $('.initial-co').css('background-color', 'transparent');
    $('.initial-gi').css('font-style', 'normal');
    $('.initial-gi').css('background-color', 'transparent');
    $('.initial-mo').css('font-style', 'normal');
    $('.initial-mo').css('background-color', 'transparent');
    $('.initial-ab').css('font-style', 'normal');
    $('.initial-ab').css('background-color', 'transparent');
    $('.initial-be').css('font-style', 'italic');
    $('.initial-be').css('background-color', '#cccccc');
    $('.fashion').hide();
    $('.overview').hide();
    $('.cinemagraphsgifs').hide();
    $('.commissioned').hide();
    $('.motion').hide();
    $('.about').hide();
    $('.beauty').show();

  });

  $(".commissioned-link").click(function() {
    $(window).scrollTop(1550);
    $('.initial-ov').css('font-style', 'normal');
    $('.initial-ov').css('background-color', 'transparent');
    $('.initial-fa').css('font-style', 'normal');
    $('.initial-fa').css('background-color', 'transparent');
    $('.initial-be').css('font-style', 'normal');
    $('.initial-be').css('background-color', 'transparent');
    $('.initial-gi').css('font-style', 'normal');
    $('.initial-gi').css('background-color', 'transparent');
    $('.initial-mo').css('font-style', 'normal');
    $('.initial-mo').css('background-color', 'transparent');
    $('.initial-ab').css('font-style', 'normal');
    $('.initial-ab').css('background-color', 'transparent');
    $('.initial-co').css('font-style', 'italic');
    $('.initial-co').css('background-color', '#cccccc');
    $('.commissioned').show();
    $('.fashion').hide();
    $('.overview').hide();
    $('.cinemagraphsgifs').hide();
    $('.beauty').hide();
    $('.motion').hide();
    $('.about').hide();
  });

  $(".cinemagraphsgifs-link").click(function() {
    $(window).scrollTop(1550);
    $('.initial-ov').css('font-style', 'normal');
    $('.initial-ov').css('background-color', 'transparent');
    $('.initial-fa').css('font-style', 'normal');
    $('.initial-fa').css('background-color', 'transparent');
    $('.initial-be').css('font-style', 'normal');
    $('.initial-be').css('background-color', 'transparent');
    $('.initial-co').css('font-style', 'normal');
    $('.initial-co').css('background-color', 'transparent');
    $('.initial-mo').css('font-style', 'normal');
    $('.initial-mo').css('background-color', 'transparent');
    $('.initial-ab').css('font-style', 'normal');
    $('.initial-ab').css('background-color', 'transparent');
    $('.initial-gi').css('font-style', 'italic');
    $('.initial-gi').css('background-color', '#cccccc');
    $('.cinemagraphsgifs').show();
    $('.fashion').hide();
    $('.overview').hide();
    $('.commissioned').hide();
    $('.beauty').hide();
    $('.motion').hide();
    $('.about').hide();
  });

  $(".motion-link").click(function() {
    $(window).scrollTop(1550);
    $('.initial-ov').css('font-style', 'normal');
    $('.initial-ov').css('background-color', 'transparent');
    $('.initial-fa').css('font-style', 'normal');
    $('.initial-fa').css('background-color', 'transparent');
    $('.initial-be').css('font-style', 'normal');
    $('.initial-be').css('background-color', 'transparent');
    $('.initial-co').css('font-style', 'normal');
    $('.initial-co').css('background-color', 'transparent');
    $('.initial-gi').css('font-style', 'normal');
    $('.initial-gi').css('background-color', 'transparent');
    $('.initial-ab').css('font-style', 'normal');
    $('.initial-ab').css('background-color', 'transparent');
    $('.initial-mo').css('font-style', 'italic');
    $('.initial-mo').css('background-color', '#cccccc');
    $('.motion').show();
    $('.fashion').hide();
    $('.overview').hide();
    $('.commissioned').hide();
    $('.beauty').hide();
    $('.cinemagraphsgifs').hide();
    $('.about').hide();
  });

  $(".about-link").click(function() {
    $(document).scrollTop(1550);
    $('.initial-ov').css('font-style', 'normal');
    $('.initial-ov').css('background-color', 'transparent');
    $('.initial-fa').css('font-style', 'normal');
    $('.initial-fa').css('background-color', 'transparent');
    $('.initial-be').css('font-style', 'normal');
    $('.initial-be').css('background-color', 'transparent');
    $('.initial-co').css('font-style', 'normal');
    $('.initial-co').css('background-color', 'transparent');
    $('.initial-gi').css('font-style', 'normal');
    $('.initial-gi').css('background-color', 'transparent');
    $('.initial-mo').css('font-style', 'normal');
    $('.initial-mo').css('background-color', 'transparent');
    $('.initial-ab').css('font-style', 'italic');
    $('.initial-ab').css('background-color', '#cccccc');
    $('.about').show();
    $('.fashion').hide();
    $('.overview').hide();
    $('.commissioned').hide();
    $('.beauty').hide();
    $('.cinemagraphsgifs').hide();
    $('.motion').hide();
  });

  $(".overview-link-m").click(function() {
      $(document).scrollTop(1000);
      $('#overview-m').show();
      $('#fashion-m').hide();
      $('#beauty-m').hide();
      $('#commissioned-m').hide();
      $('#gif-m').hide();
      $('#motion-m').hide();
      $('#about-m').hide();

      });

$(".fashion-link-m").click(function() {
    $(document).scrollTop(1000);
    $('#fashion-m').show();
    $('#overview-m').hide();
    $('#beauty-m').hide();
    $('#commissioned-m').hide();
    $('#gif-m').hide();
    $('#motion-m').hide();
    $('#about-m').hide();

    });


$(".beauty-link-m").click(function() {
    $(document).scrollTop(1000);
    $('#beauty-m').show();
    $('#overview-m').hide();
    $('#fashion-m').hide();
    $('#commissioned-m').hide();
    $('#gif-m').hide();
    $('#motion-m').hide();
    $('#about-m').hide();

    });

$(".commissioned-link-m").click(function() {
    $(document).scrollTop(1000);
    $('#commissioned-m').show();
    $('#overview-m').hide();
    $('#fashion-m').hide();
    $('#beauty-m').hide();
    $('#gif-m').hide();
    $('#motion-m').hide();
    $('#about-m').hide();

    });

$(".cinemagraphsgifs-link-m").click(function() {
    $(document).scrollTop(1000);
    $('#gif-m').show();
    $('#overview-m').hide();
    $('#fashion-m').hide();
    $('#beauty-m').hide();
    $('#commissioned-m').hide();
    $('#motion-m').hide();
    $('#about-m').hide();

    });

  $(".motion-link-m").click(function() {
    $(document).scrollTop(1000);
    $('#motion-m').show();
    $('#overview-m').hide();
    $('#fashion-m').hide();
    $('#beauty-m').hide();
    $('#commissioned-m').hide();
    $('#gif-m').hide();
    $('#about-m').hide();

      });

  $(".about-link-m").click(function() {
    $(document).scrollTop(750);
    $('#about-m').show();
    $('#overview-m').hide();
    $('#fashion-m').hide();
    $('#beauty-m').hide();
    $('#commissioned-m').hide();
    $('#gif-m').hide();
    $('#motion-m').hide();

    });

});


$(window).scroll(function() {
  if ($(window).width() > 768) {
    if ($(this).scrollTop() > 750) {
      $('.logopage').hide('slow');
      $('.sidenav').show('slow');

    } else {
      $('.logopage').show('slow');
      $('.sidenav').hide('slow');
    }
  }
});


(function($) {
  $.jInvertScroll(['.scroll'], // an array containing the selector(s) for the elements you want to animate
    { // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
      onScroll: function(percent) { //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
      }
    });
}(jQuery));
