
/* NAVIGATION start */
$('.menu').click(function() {
    $(this).toggleClass("active");
    $(".nav-link").removeClass("active");
    $(".subLink").removeClass("active");
    $(".subLink").removeAttr('style');
    $('nav ul > li').first().children(".nav-link").addClass("active");
    $('nav ul > li').first().children(".subLink").addClass("active");
    $('nav > ul').slideToggle(500);
    $('body').toggleClass('overflowHide');
    $('.nav-link').click(function(e) {
        if ($(this).hasClass("active")) {
            $("nav ul .subLink").not('.active').fadeOut();
        } else {
            $("nav ul .subLink").fadeOut();
            $(this).siblings(".subLink").fadeIn(200);
        }
        $(".nav-link").siblings('.subLink').removeClass('active');
        $(this).siblings('.subLink').addClass("active");
        $(".nav-link").removeClass('active');
        $(this).addClass("active");

    });
});
/* NAVIGATION end */
/* ----- SEARCH start ----- */
$('.searchIcon').click(function() {
    $('.searchContent').slideDown(500);
    $('body').addClass('overflowHide');
});
$('.searchContent .close').click(function() {
    $('.searchContent').slideUp(300);
    $('body').removeClass('overflowHide');
});
/* ----- SEARCH end ----- */

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js').then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
/*  ga events start by Sarfraz 20-07-2018 */
$(document).ready(function() {

    $(".gtm-submit-btn").click(function() {
        ga('send', 'event', 'config lead submit', $(this).data('button-id'), 'submit', $(this).text());
    });

    $(".gtm-lead-click").click(function() {
        var text = $.trim($(this).text());
        pushTextInDataLayer(text);

        ga('send', 'event', 'button config click', $(this).attr('id'), 'click', $(this).text());
    });

});
/*  ga events end */


function pushToGA(event, category, leadSubmitResponse, form_id, label) {
    ga('send', event, leadSubmitResponse + '_' + form_id, label);
}

$(".items").click(function() {
    window.location.href = $(this).find("h5 a").attr('href');
});
$(".trendingBlock ul li").click(function() {
    window.location.href = $(this).find("h3 a").attr('href');
});
// Move from common.js as there are conflict on College Details Page
var owl = $('.home-owl');
owl.owlCarousel({
    items: 1,
    merge: true,
    loop: true,
    margin: 10,
    video: true,
    lazyLoad: true,
    center: true,
    responsive: {
        640: {
            items: 1
        },
        1024: {
            items: 1
        }
    }
});


$('.owl-widget-1').owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    dots: false,
    autoplayTimeout: 2000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 3,
            nav: true
        },
        1000: {
            items: 4,
            nav: true,
            loop: false
        }
    }
});

$('.owl-video-testimonial').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: false,
    dots: false,
    autoplayTimeout: 2000,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },

        600: {
            items: 3,
            nav: true
        },
        1000: {
            items: 3,
            nav: true,
            loop: false
        }
    }
});

$('.playvideo').click(function(e) {

    var video = $(this).data("video");

    //video = "https://www.youtube.com/embed/XJcN9kTc-zM?autoplay=1";
    var height = $(this).data("height");
    var width = $(this).data("width");
    //var allow = $(this).data("allow")
    var iframe = '<iframe width="' + width + '" height="' + height + '" src="' + video + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

    $(this).html(iframe);

});
