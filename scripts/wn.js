/**
 * Resizing of the page header
 **/
$(window).scroll(function() {
    if ($(window).scrollTop() > 2 && !($("#page-header").hasClass("wn-header--collapsed"))) {
        $("#page-header").addClass("wn-header--collapsed");
    }
});