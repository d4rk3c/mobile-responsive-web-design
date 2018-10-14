
$(document).ready(function animateCovers() {

    $('.coverPhoto').animate({ opacity: '0' }, 2000, function () {
        $('.coverPhoto').css('background-image', 'url("./img/service/cover-2.jpg")')
    }).animate({ opacity: '1' }, 4000, function () {
        $('.coverPhoto').animate({ opacity: '0' }, 2000, function () {
            $('.coverPhoto').css('background-image', 'url("./img/service/cover-3.jpg")')
        }).animate({ opacity: '1' }, 4000, function () {
            $('.coverPhoto').animate({ opacity: '0' }, 2000, function () {
                $('.coverPhoto').css('background-image', 'url("./img/service/cover-1.jpg")')
            }).animate({opacity:'1'},4000)
        })
    })
    setTimeout(animateCovers, 18000)

})
