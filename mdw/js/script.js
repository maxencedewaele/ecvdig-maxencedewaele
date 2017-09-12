(function($) {
    $(window).load(function () {
        $('.slider').slick({
            infinite: true,
            /*fade: true,*/
            arrows: false,
            next: false,
            prev: false,
            autoplay: true,
            autoplaySpeed: 5000,
            /*speed: 1000,*/
            pauseOnFocus: false,
            pauseOnHover: false
        });
    });
    $(document).ready(function() {
        // Effet section 1 home
        var fadeStart = 0 // 100px scroll or less will equiv to 1 opacity
            , fadeUntil = $(window).height() / 1.2 // 200px scroll or more will equiv to 0 opacity
            , fading = $('.calque')
            ;

        $(window).on('scroll', function () {
            if ($(window).height() > 550) {
                var offset = $(document).scrollTop()
                    , opacity = 0
                    ;
                if (offset <= fadeStart) {
                    opacity = 1;
                } else if (offset <= fadeUntil) {
                    opacity = 1 - offset / fadeUntil;
                }
                fading.css('background-color', 'rgba(0,0,0, '+Math.abs(opacity - 1) + ')');
                $('.slider .slide').css('background-color', 'rgba(0,0,0,' + Math.abs(opacity + 1) + ')');
                $('.slider .slide').css('transform', 'matrix(1, 0, 0, 1, 0, ' + Math.round(Math.abs((opacity * 100 - 100) * 2)) + ')');
            }
        });
    });

})(jQuery);