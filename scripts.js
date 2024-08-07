(function ($) {
    'use strict';

    $(document).ready(function () {
        console.log("Document ready");

        /* Preloader */
        $(window).on('load', function () {
            console.log("Window loaded");
            $('body').addClass('loaded');

            /* Scroll Navigation Background Change with Sticky Navigation */
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
                strings: ["", "", "I am Assil Tekaya", "A computer Science student", "Welcome to my Portfolio!"],
                typeSpeed: 50,
                callback: function () {
                    showIcons();
                }
            });
        });

        function showIcons() {
            var icons = $(".icons .icon");
            icons.each(function (index, icon) {
                setTimeout(function () {
                    $(icon).removeClass('hidden');
                }, index * 1000); // Show each icon one by one with a delay of 1 second
            });
        }
        $(document).ready(function () {
            $('.filter').click(function () {
                var filterValue = $(this).attr('data-filter');

                // Remove 'active' class from all filter buttons and add to the clicked one
                $('.filter').removeClass('active');
                $(this).addClass('active');

                if (filterValue === 'all') {
                    $('.portfolio-item').show('slow');
                } else {
                    $('.portfolio-item').each(function () {
                        if ($(this).hasClass(filterValue)) {
                            $(this).show('slow');
                        } else {
                            $(this).hide('slow');
                        }
                    });
                }
            });
        });



    });

})(jQuery);
