
//Animacija main background-a
$(document).ready(function animateBacks() {
    $('.coverphoto').animate({ opacity: '0' }, 5000, function () {
        $('.coverphoto').css('background-image', 'url("./img/homeCover/background-2.jpg")')
    }).animate({ opacity: '1' }, 5000, function () {
        $('.coverphoto').animate({ opacity: '0' }, 5000, function () {
            $('.coverphoto').css('background-image', 'url("./img/homeCover/background-3.jpg")')
        }).animate({ opacity: '1' }, 5000, function () {
            $('.coverphoto').animate({ opacity: '0' }, 5000, function () {
                $('.coverphoto').css('background-image', 'url("./img/homeCover/background-5.jpg")')
            }).animate({ opacity: '1' }, 5000, function () {
                $('.coverphoto').animate({ opacity: '0' }, 5000, function () {
                    $('.coverphoto').css('background-image', 'url("./img/homeCover/background-1.jpg")')
                }).animate({ opacity: '1' }, 5000)
            })
        })

    })


    setTimeout(animateBacks, 47000)
})


