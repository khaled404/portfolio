$(window).load(function () {
    $(".loader-box").fadeOut(500,function () {
        $(this).remove();
        $('body').removeClass('over');
    });
});

$(function(){
    var win = $(window),
        htmlBody = $('html , body'),
        navbar = $(".navbar"),
        navbarToggler= $('.navbar-toggler');
    htmlBody.scrollspy({target:".navbar",offset:80})
    function navScrolled (){
        win.scrollTop()>12?
        navbar.addClass("scrolled"):navbar.removeClass("scrolled")
    }
    navScrolled ();
    navbarToggler.on('click',function(){
        navbar.toggleClass("active-click");
    });
    function progress(){
        $('.full').each(function(){
            $(this).delay($(this).attr('data-delay')).animate({
                width:$(this).attr('data-progress') +'%'
            })
        })
    }
    var a = 0,b=0;
    win.on("scroll",function(){
        navScrolled ();
        if (a==0 && $(this).scrollTop() >= $(".skills").offset().top - 200) {
            $('.timer').countTo();
            progress()
            a++
        }
        if (b==0 && $(this).scrollTop() >= $(".facts").offset().top - 250) {
            $('.fact-timer').countTo();
            b++
        }
    });
    new WOW().init();
    var mixer = mixitup('.mixitup-container');
    $(".portfolio-container ul li").on('click', function () {
        $(this).addClass('active').siblings("li").removeClass('active');
    });
    $(".testimonials .owl-carousel").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 500,
        margin: 30,
        loop: true,
        autoplayHoverPause: true,
        responsiveClass: true,
		responsive: {
            0: {
                items: 1
            },
            991: {
                items: 2
            }
        }
    });
    $(".mix-body .owl-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        smartSpeed: 500,
        margin: 30,
        autoplayHoverPause: true,
        responsiveClass: true
    });

});