(function ($) {
    'use strict';

    $(document).ready(function () {
        console.log("Document ready");

        /* Preloader */
        $(window).on('load', function() {
            console.log("Window loaded");
            $('body').addClass('loaded');

            /* Typed.js */
            console.log("Initializing typed.js");
            $(".typing").typed({
                strings: ["I am Assil Tekaya", "A computer Science student", "Welcome to my Portfolio !"],    
                typeSpeed: 50
            });
        });

        // Ensure the preloader is removed after a timeout, as a fallback
        setTimeout(function() {
            if (!$('body').hasClass('loaded')) {
                console.log("Fallback: Forcing loaded state");
                $('body').addClass('loaded');
                $(".typing").typed({
                    strings: ["I am A Freelancer.", "I Design Websites.", "I Live in New York."],    
                    typeSpeed: 50
                });
            }
        }, 5000); // 5 seconds fallback
    });

})(jQuery);
