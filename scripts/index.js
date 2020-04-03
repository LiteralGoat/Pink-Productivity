/* Nav Links Style Change Based on y-axis Position */
$(document).ready(function(){
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if(scroll < 629){
            $(".nav-link").removeClass('active');
            $("#nav-link-1").addClass('active');
        }
        else if(scroll > 629 && scroll < 1000){
            $(".nav-link").removeClass('active');
            $("#nav-link-2").addClass('active');
        }
        else if(scroll > 1000 && scroll < 1320){
            $(".nav-link").removeClass('active');
            $("#nav-link-3").addClass('active');
        }
        else if(scroll >= 1320 && scroll < 2240){
            $(".nav-link").removeClass('active');
            $("#nav-link-4").addClass('active');
        }
        else if(scroll >= 3049 && scroll < 3703){
            $(".nav-link").removeClass('active');
            $("#nav-link-5").addClass('active');
        } 
        else if(scroll >= 3703){
            $(".nav-link").removeClass('active');
            $("#nav-link-6").addClass('active');
        }
    });
});


/* Navbar on Scroll Effect */
$(document).ready(function(){
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if(scroll < 10){
            $("#nav").removeClass('scrolled-nav');
            $(".nav-link").removeClass('scrolled-nav-link');
            $('.navbar-brand').removeClass('scrolled-nav-link')
        } 
        else {
        $("#nav").addClass('scrolled-nav');
        $(".nav-link").addClass('scrolled-nav-link');
        $('.navbar-brand').addClass('scrolled-nav-link')
        }
    });
});


/* Navigation to Specified y-Position */
function scrollPosition(y) {
    window.scrollTo(0, y)
};


/* Testimonial Carousel */
$('#carousel-example-generic').carousel({
    interval: 3000,
    pause: null,
    wrap: true
  })

var touchSensitivity = 5;
    $(".carousel").on("touchstart", function (event) {
        var xClick = event.originalEvent.touches[0].pageX;
        $(this).one("touchmove", function (event) {
            var xMove = event.originalEvent.touches[0].pageX;
            if (Math.floor(xClick - xMove) > touchSensitivity) {
                $(this).carousel('next');
            } else if (Math.floor(xClick - xMove) < -(touchSensitivity)) {
                $(this).carousel('prev');
            }
    });
        $(".carousel").on("touchend", function () {
            $(this).off("touchmove");
    });
});