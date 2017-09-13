(function($) {
    $(window).load(function () {
        $('.slider').slick({
            infinite: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 5000,
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
    (()=>{
        let $ = c.getContext("2d"),
        h = c.height = window.innerHeight,
        w = c.width = window.innerWidth,
        random = (n)=>Math.random()*n,
        stars = new Array(1000).fill().map(()=>{
                return {r: random(w),	s: random(0.01), a: random(Math.PI*2)};
});
    function loop(){
        $.fillStyle="rgba(0,0,0,.1)";
        $.fillRect(0,0,w,0.3);
        stars.forEach(e=>{
            e.a+=e.s;
        $.save();
        $.beginPath();
        $.translate(w/2, h/2);
        $.rotate(e.a);
        $.arc(e.r,e.r,1,0,Math.PI*2);
        //$.arc(Math.cos(e.a)*e.r + w/2, Math.sin(e.a)*e.r + h/2,1,0,Math.PI*2);
        $.closePath();
        $.fillStyle = "white";
        $.fill();
        $.restore()
    })
        requestAnimationFrame(loop)
    }
    loop();
    window.addEventListener("resize", (e)=>{
        w=c.width=window.innerWidth;
    h=c.height=window.innerHeight;
});
})()

})(jQuery);