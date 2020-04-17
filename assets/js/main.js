// scroll

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".header").hide();
    } else {
        $(".header").show();
    }
});

// Search

$("#open-search").click(function(){
  $(".web-search").addClass("show");
});

$("#close-search").click(function(){
  $(".web-search").removeClass("show");
});

// Slider

$('.carousel').carousel({
    interval: 4000
})

// Menu

$("#open-menu").click(function(){
  $(".mobile-menu").addClass("show");
});

$("#close-menu").click(function(){
  $(".mobile-menu").removeClass("show");
});

