$(document).ready(function() {

    /* ===========================================================
     main scroll
    =============================================================*/

    $(window).scroll(function() {
        var winTop = $(window).scrollTop();
        if (winTop >= 500) {
            $("nav").addClass("sticky-top");
        } else {
            $("nav").removeClass("sticky-top");
        }
    });


    /* ===========================================================
     carousel
    =============================================================*/
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 3,
                nav: true,
                loop: false
            }
        }
    });
})
