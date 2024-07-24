(function ($) {
    'use strict';

    $(document).ready(function () {
        console.log("Document ready");

        /* Preloader */
        $(window).on('load', function () {
            console.log("Window loaded");
            $('body').addClass('loaded');



            /* Scroll Naviagation Background Change with Sticky Navigation */

            $(window).on('scroll', function () {
                if ($(window).scrollTop() > 100) {
                    $('.header-top-area').addClass('navigation-background');
                } else {
                    $('.header-top-area').removeClass('navigation-background');
                }
            });



            /* Typed.js */
            console.log("Initializing typed.js");
            $(".typing").typed({
                strings: ["", "", "I am Assil Tekaya", "A computer Science student", "Welcome to my Portfolio !"],
                typeSpeed: 50
            });
        });

    });

})(jQuery);