/**
 * Making the cards of equal height
 */
$(".card").matchHeight();


/**
 * Resizing of the page header
 **/
$(window).scroll(function() {
  if ($(window).scrollTop() > 2 && !($("#page-header").hasClass("wn-header--collapsed"))) {
    $("#page-header").addClass("wn-header--collapsed");
  } else if (($(window).scrollTop() < 2 && $("#page-header").hasClass("wn-header--collapsed"))) {
    $("#page-header").removeClass("wn-header--collapsed");
  }
});

/**
 * Scrollto
 **/
$(".wn-nav-link").click(function() {
  var offset = $($.attr(this, "href")).offset().top - 180;
  $("html, body").animate({
    scrollTop: offset
  }, 2000);
  return false;
});

/**
 * Navigation Scrollspy
 */
$('.scrollspy').scrollSpy();


/**
 * Toast message
 */
Materialize.toast('Je kan nog inschrijven tot 6 juli, daarna terug vanaf 22 augustus.', 5000, "wn-info-toast");
