// Smooth scrolling via animate()
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash) {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 40
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
});

// Navigation change on scroll
$(document).ready(function(){
  var maxOffset = $('header').outerHeight() - $('.nav-parent').outerHeight();
  $(window).scroll(function() {
    if ($(window).scrollTop() >= maxOffset) {
      $('.navbar-default').addClass('navbar-shrink');
    }
    else {
      $('.navbar-default').removeClass('navbar-shrink');
    }
  });

  if ($(window).scrollTop() >= maxOffset) {
    $('.navbar-default').addClass('navbar-shrink');
  }
  else {
    $('.navbar-default').removeClass('navbar-shrink');
  }
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-collapse'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Async contact form
$('#contactForm').submit(function() {
  $('#contactForm #success').hide();
  $('#contactForm #error').hide();
  $.post($(this).attr('action'), $(this).serialize(), function(res) {
    $('#contactForm #success').show();
  }).error(function () {
    $('#contactForm #error').show();
  });
  return false;
});

// Contact form validation
$.validate({
  modules : 'html5, toggleDisabled'
});


var isElementInViewport = (elem) => {
    var $elem = $(elem);

    // Get the scroll position of the page.
    var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
    var viewportTop = $(scrollElem).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    // Get the position of the element on the page.
    var elemTop = Math.round( $elem.offset().top );
    var elemBottom = elemTop + $elem.height();

    return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
}

// Check if it's time to start the animation.
var checkAnimation = () => {
    var $elem = $('.flexContainerSub');

    // If the animation has already been started
    if ($elem.hasClass('fadeInUp')) return;

    if (isElementInViewport($elem)) {
        // Start the animation
        $elem.addClass('fadeInUp');
    }
}

// Capture scroll events
$(window).scroll(function(){
    checkAnimation();
});

$('.view-first').mouseleave(function() {
  $('.view-first').find('.content').animate({ scrollTop: 0 });
});

$('.img-box').click(function() {
  switch ($(this).index()) {
    case 0:
      window.open('http://bylined.me', '_blank');
      break;
    case 1:
      window.open('http://care.ly', '_blank');
      break;
    case 2:
      window.open('http://circablack.com', '_blank');
      break;
    case 3:
      window.open('http://mycollegeease.com', '_blank');
      break;
    case 4:
      window.open('http://hotchickentakeover.com')
      break;
    case 5:
      window.open('http://eliteaviationproducts.com', '_blank');
      break;
    case 6:
      window.open('http://circularwavedrive.com', '_blank');
      break;
    case 7:
      window.open('http://hansya.com', '_blank');
      break;
    case 8:
      window.open('http://knowwake.com', '_blank');
      break;
    case 9:
      window.open('http://moveeasy.com', '_blank');
      break;
    case 10:
      window.open('http://nikola.tech', '_blank');
      break;
    case 11:
      window.open('http://rekovo.com', '_blank');
      break;
    case 12:
      window.open('http://genetesis.com/', '_blank');
      break;
    case 13:
      window.open('http://www.seamless.ai/', '_blank');
      break;
    case 14:
      window.open('http://aveautomedia.co/', '_blank');
      break;
  }
});