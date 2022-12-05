$(document).ready(function(){
  $("#header").load("header.html"); 
  $("#footer").load("footer.html");
  $('.basket__main .items__main__item__menu__tab__text__count > button:nth-child(2)').addClass('add__to__card');
  $('.add__to__card').text("Buy");
  $('.first__block').slick({
      infinite: true,
      dots: true,
      speed: 1200,
      arrows: false,
      // autoplay: true, 
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll:1,
      // adaptiveHeight: true,
      draggable: false,
      swipe: false,
      // touchThreshold: 10,
      swipe: true,
      variableWidth: false,
      responsive: [
        {
            breakpoint: 850,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        },
    ]
  });
  $('.items__main__item__menu__tab__img').slick({
      infinite: true,
      dots: false,
      speed: 1200,
      arrows: true,
      // autoplay: true, 
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll:1,
      // adaptiveHeight: true,
      draggable: false,
      swipe: false,
      // touchThreshold: 10,
      prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
      swipe: true,
      variableWidth: false,
      responsive: [
        {
            breakpoint: 584,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                adaptiveHeight: true,
                dots: true,
            }
        },
    ]
  });
  $('.comm_blocks').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay:true,
    infinite: true,
    speed: 20000,
    fade: false,
    autoplaySpeed: 0,
    // pauseOnHover: true,
    // pauseOnFocus:true,
    draggable: false,
    cssEase: 'linear',
    variableWidth: true,
    responsive: [
        {
            breakpoint: 584,
            settings: {
                variableWidth: false,
                speed: 5000,
            }
        },
        {
          breakpoint: 690,
          settings: {
              speed: 10000,
          }
      },
    ]
  });
});


const cookieBox = document.querySelector(".wrapper"),
acceptBtn = cookieBox.querySelector("button");
acceptBtn.onclick = ()=>{
  //setting cookie for 1 month, after one month it'll be expired automatically
  document.cookie = "CookieBy=CodingNepal; max-age="+60*60*24*30;
  if(document.cookie){ //if cookie is set
    cookieBox.classList.add("hide"); //hide cookie box
  }else{ //if cookie not set then alert an error
    alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
  }
}
let checkCookie = document.cookie.indexOf("CookieBy=CodingNepal"); //checking our cookie
//if cookie is set then hide the cookie box else show it
checkCookie != -1 ? cookieBox.classList.add("hide") : cookieBox.classList.remove("hide");



// function inc(element) {
//   let el = document.querySelector(`[name="${element}"]`);
//   el.value = parseInt(el.value) + 1;
// }
// function dec(element) {
//   let el = document.querySelector(`[name="${element}"]`);
// 	if (parseInt(el.value) > 0) {
// 	  el.value = parseInt(el.value) - 1;
//   }
// }

$( ".items__main__item__menu__tab__text__count__plus" ).click(function() {
  let el = $(this).parent().children('input').attr('value');
  $(this).parent().children('input').attr('value', parseInt(el) + 1)
});
$( ".items__main__item__menu__tab__text__count__minus" ).click(function() {
  let el = $(this).parent().children('input').attr('value');
  if (parseInt(el) > 0) {
    $(this).parent().children('input').attr('value', parseInt(el) - 1)
  }
});


$( ".item___button" ).click(function() {
  $(this).toggleClass('item___button__active');
  $(this).parent().parent().children("p").toggleClass('item___button__p');
});

$( ".items__main__item__menu__eye" ).click(function() {
  $('body').addClass('body__toggle');
  $('body').append("<div class='epmty'></div");;
  $(this).parent().parent().parent().parent().toggleClass('HELLO');
  $('.HELLO').children('.items__main__item__menu__tab').toggleClass('items__main__item__menu__tab__active');
});
$( ".items__main__item__menu__tab__close" ).click(function() {
  $('.HELLO').children('.items__main__item__menu__tab').removeClass('items__main__item__menu__tab__active');
  $('.HELLO').removeClass('HELLO');
  $( ".epmty" ).remove();
  $('body').removeClass('body__toggle');
})
// $( ".items__main__item__menu__eye" ).click(function() {
//   $(body).html('')
// })

$( ".basket__close" ).click(function() {
  $('body').removeClass('body__toggle');
  $('.epmty').remove();
  $('.basket').removeClass('basket__active');
  $('.basket').addClass('basket__active__no');
});
// $("p").clone().appendTo("body");
$('.items__main__item__menu__cart').click(function() {
  alert("FA")
  $(this).parent().parent().parent().parent().children('.items__main__item__menu__tab').addClass('Please');
  $('.Please').clone().appendTo('.basket__main');
  $(this).parent().parent().parent().parent().children('.items__main__item__menu__tab').remove();
})


// 2 parent