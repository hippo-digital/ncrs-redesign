jQuery(document).ready(function($) {

  var visible = false;
  var topofDiv = $(".nhsuk-header").offset().top; //gets offset of header
  var height = $(".patient-banner").outerHeight() + $(".nhsuk-header").outerHeight(); //gets height of header
  //Check to see if the window is top if not then display button
  $(window).scroll(function() {
    if ($(this).scrollTop()) {
      $(".scrollToTop").fadeIn();
    } else {
      $(".scrollToTop").fadeOut();
    }
    if ($(window).scrollTop() + $(window).height() < $(document).height() - $("#nhsuk-footer").height() - 92) {
      $('.scrollToTop').css("position", "fixed"); //resetting it
      $('.scrollToTop').css("bottom", "20px"); //resetting it
      $('.scrollToTop').css("right", "20px"); //resetting it
    }
    if ($(window).scrollTop() + $(window).height() > $(document).height() - $("#nhsuk-footer").height() - 92) {
      $('.scrollToTop').css("position", "relative"); // make it related
      $('.scrollToTop').css("bottom", "42px"); // 60 px, height of #toTop
    }

    if($(window).scrollTop() > (topofDiv + height)){
       $(".name-dob-floater").fadeIn();
    }
    else{
       $(".name-dob-floater").fadeOut();
    }

  });

  //Click event to scroll to top
  $(".scrollToTop").click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
  });


});
