$(function(){
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 
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

$(document).ready(function(){
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
          breakpoint: 768,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
          }
      },
  ]
});
