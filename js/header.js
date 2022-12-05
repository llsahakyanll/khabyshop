window.onscroll = ()=>{
    if(this.scrollY > 1) {
        $('header').addClass('sticky_header')
    }else{
        $('header').removeClass('sticky_header');
    }  
}

$( ".search" ).click(function() {
    $(".search").toggleClass('close');
    $(".input").toggleClass('square');
    function myFunction(x) {
        if (x.matches) { // If media query matches
            if (!($('.header_div_nav').hasClass('header_div_nav_none'))) {
                $('.header_div_nav').addClass('header_div_nav_none');
            } else {
                function show_popup(){
                    $('.header_div_nav').removeClass('header_div_nav_none');                
                };
                 window.setTimeout( show_popup, 800 );
            }
        } 
    }
    var x = window.matchMedia("(max-width: 1140px)")
    myFunction(x)
    x.addListener(myFunction)
});
$( ".basket__icon" ).click(function() {
    $('body').addClass('body__toggle');
    $('body').append("<div class='epmty'></div");
    $('.basket').removeClass('basket__active__no');
    $('.basket').addClass('basket__active');
});
