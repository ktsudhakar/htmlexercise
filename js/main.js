$(document).ready(function() {

    $('.change-country').click(function () {
        $(this).parent().next().toggle();
    });
    
    $('.share-icon').click(function () {
        $('.search-container').slideUp();
        $('.search-icon').removeClass('expand-search');
        $('.social-links').toggleClass('show-social');
    });

    $('.search-icon').click(function () {
        $('.social-links').removeClass('show-social');
        $(this).toggleClass('expand-search');
        $('.search-container').slideToggle();
    });

    $('#menubar').click(function(){
        $(this).toggleClass('open');
        $('section').toggleClass('small-menu');
        $('header').toggleClass('mobile-menu');

        if ($(window).innerWidth() < 768 ) {
            $('.language-container').appendTo('.navigation');
        }
    });
    
    $('#owl-carousel-1').owlCarousel({
        dots:false,
        animateOut: 'fadeOut',
        mouseDrag: false,
        responsive:{
            0:{
                items:1,
            }
        }
        
    });
    
    $('#owl-carousel-2').owlCarousel({
        dots:false,
        smartSpeed: 750,
        mouseDrag: false,
        responsive:{
            0:{
                items:1,
            }
        }
    });
    
    $('#owl-carousel-3').owlCarousel({
        dots:true,
        smartSpeed: 1500,
        mouseDrag: true,
        responsive:{
            0:{
                items:1,
            }
        }
    });

    $('#owl-carousel-3').on('changed.owl.carousel', function(event) {
        $('#owl-carousel-1').trigger('to.owl.carousel', event.page.index);
        $('#owl-carousel-2').trigger('to.owl.carousel', event.page.index);
    });

});

$(window).resize(function() {
    if ($(window).innerWidth() > 768) {
        $('.language-container').appendTo('.location');
    }
    else {
        $('.language-container').appendTo('.navigation');
    }
});

$(window).scroll(function() {
    if ($('header').offset().top > 150) {
        $('body').addClass('header-small');
    } else {
        $('body').removeClass('header-small');
    }

    if ($(window).innerWidth() > 768) {
        $('section').removeClass('small-menu');
        $('header').removeClass('mobile-menu');
        $('#menubar').removeClass('open');
    }
});