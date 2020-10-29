$(document).ready(function() {


    /* ===========================================================
        query preload
    =============================================================*/
    var container = document.getElementById('container-reload');
    setTimeout(function() {
        container.classList.add('cerrar');
    }, 2500);



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

    /* ===========================================================
     query para dar estilo al bajar los enlaces
    =============================================================*/
    $('a[href^="#"]').click(function() {
        var destino = $(this.hash);
        if (destino.length == 0) {
            destino = $('a[name="' + this.hash.substr(1) + '"]');
        }
        if (destino.length == 0) {
            destino = $('html');
        }
        $('html, body').animate({
            scrollTop: destino.offset().top
        }, 2000);
        return false;
    });
})