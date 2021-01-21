/*
    Website Name: Sam Norton | Full Stack Developer / Virtual Assistant
	Author: Sam Norton
    Author URI: https://www.niconorton.com
    
*/

(function ($) {
    "use strict";


    /* header sticky */
    let stickyHeader = $(".sticky-header");
    windows.on('scroll', function () {
        var winPosition = windows.scrollTop();
        if (winPosition > 0) {
            stickyHeader.addClass("fixed-top");
        } else {
            stickyHeader.removeClass("fixed-top");
        }
    });

    /* tesimonial slider */
    $(".testimonial-slider").owlCarousel({
        autoplayHoverPause: true,
        loop: true,
        smartSpeed: 500,
        autoplay: false,
        animateIn: 'fadeInUp',
        center: true,
        dots: false,
        navigation: false,
        items: 1,
    });

    /* blog slider */
    $(".blog-slider").owlCarousel({
        autoplayHoverPause: true,
        loop: false,
        smartSpeed: 500,
        autoplay: false,
        dots: false,
        nav: false,
        items: 3,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
        },
    });


    /*  nav scroll */
    $('.main-nav').on('click', '.mobile-nav-toggle', function (e) {
        e.preventDefault();
        $('.main-nav ul').slideToggle('fast');
    });
    

    $('.main-nav').navScroll({
        mobileDropdown: true,
        mobileBreakpoint: 991,
        scrollSpy: true,
        navHeight: 82
    });


})(jQuery);
