function randomNumber(min, max) {
    let randomNumber = Math.floor((Math.random() * max) + min);
    return randomNumber;
}

$(document).ready(function () {

    $(window).scroll(function () {
        $('.tank-2').each(function (i) {
            var bottom_of_element = $(this).offset().top + ($(this).outerHeight() / 2);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_element) {
                $("#whale").animate({ 'margin-right': '100%' }, 1500);
            }
        });
    });

    // define effects 
    $(window).scroll(function () {
        $('.fadein').each(function (i) {
            var bottom_of_element = $(this).offset().top + ($(this).outerHeight() / 2);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'opacity': '1' }, 1500);
            }
        });
    });

    $(window).scroll(function () {
        $('.slideinleft.mediumspeed').each(function (i) {
            var bottom_of_element = $(this).offset().top + ($(this).outerHeight() / 2);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'margin-left': '0' }, 1500);
            }
        });
        $('.slideinleft.slowspeed').each(function (i) {
            var bottom_of_element = $(this).offset().top + ($(this).outerHeight() / 2);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'margin-left': '0' }, 1750);
            }
        });
        $('.slideinleft.fastspeed').each(function (i) {
            var bottom_of_element = $(this).offset().top + ($(this).outerHeight() / 2);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'margin-left': '0' }, 1250);
            }
        });
    });

    $(window).scroll(function () {
        $('.left-to-right.randomspeed').each(function (i) {
            var bottom_of_element = $(this).offset().top + ($(this).outerHeight() / 2);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'right': '-100%' }, randomNumber(9000, 14000));
            }
        });
        $('.right-to-left.randomspeed').each(function (i) {
            var bottom_of_element = $(this).offset().top + ($(this).outerHeight() / 2);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'left': '-100%' }, randomNumber(9000, 14000));
            }
        });
    });

    $(window).scroll(function () {
        $('.slideinright.mediumspeed').each(function (i) {
            var bottom_of_element = $(this).offset().top + ($(this).outerHeight() / 2);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'margin-right': '0' }, 1500);
            }
        });
        $('.slideinright.slowspeed').each(function (i) {
            var bottom_of_element = $(this).offset().top + ($(this).outerHeight() / 2);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'margin-right': '0' }, 1750);
            }
        });
        $('.slideinright.fastspeed').each(function (i) {
            var bottom_of_element = $(this).offset().top + ($(this).outerHeight() / 2);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'margin-right': '0' }, 1250);
            }
        });
    });

    // get current date and time
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours();

    if (time < 6) {
        $("body").addClass("night");
    } else if (time >= 6 && time <= 12) {
        $("body").addClass("morning");
    } else if (time >= 12 && time <= 17) {
        $("body").addClass("afternoon");
    } else if (time >= 17 && time <= 24) {
        $("body").addClass("evening");
    }

});
