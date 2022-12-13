$(document).ready(function(){
    $('.credit__card').hide();
})
$('.button').click(function() {
    $('.container').hide();
    $('.credit__card').show();
})
$('.return').click(function() {
    $('.container').show();
    $('.credit__card').hide();
})