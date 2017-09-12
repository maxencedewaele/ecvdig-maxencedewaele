(function($) {
    $(window).load(function(){
        /*console.in/!**!/fo('dsdgds');*/
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
})(jQuery);