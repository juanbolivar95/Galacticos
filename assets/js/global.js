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
    var pathname = window.location.pathname;
    var filepath = pathname;
    var filenameWithExtension = filepath.replace(/^.*[\\\/]/, '');

    if (filenameWithExtension == 'players.html') {
        $(window).scroll(function() {
            if (window.matchMedia("(max-width: 767px)").matches) {
                var winTop = $(window).scrollTop();
                if (winTop >= 500) {
                    $("div.nav-player").removeClass("sticky-top-players");
                }
            } else {
                var winTop = $(window).scrollTop();
                if (winTop >= 500) {
                    $("div.nav-player").addClass("sticky-top-players");
                } else {
                    $("div.nav-player").removeClass("sticky-top-players");
                }
            }
        });
    } else {
        $(window).scroll(function() {
            if (window.matchMedia("(max-width: 767px)").matches) {
                var winTop = $(window).scrollTop();
                if (winTop >= 500) {
                    $("nav").removeClass("sticky-top");
                }
            } else {
                var winTop = $(window).scrollTop();
                if (winTop >= 500) {
                    $("nav").addClass("sticky-top");
                } else {
                    $("nav").removeClass("sticky-top");
                }
            }
        });
    }

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
            scrollTop: destino.offset().top - 80
        }, 2000);
        return false;
    });


    /*===============================================================
    numeros en movimientos statistics
    =================================================================*/

    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
    });

    if (jQuery().counterUp) {
        $('[data-counter-up]').counterUp({
            delay: 20,
        });
    }
});