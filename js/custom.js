function randomNumber(min, max) {
    let randomNumber = Math.floor((Math.random() * max) + min);
    return randomNumber;
}

$(document).ready(function () {

    // define scroll animations reactive to scroll behavior

    // slow speed
    $(document).on("scroll", function () {
        var pixels = $(document).scrollTop();
        var pageHeight = $(document).height() - $(window).height();
        var progress = 100 * pixels / pageHeight;
        progress = progress / 5;
        $(".from-left-to-right.slow").css("left", progress + "%");
    })
    $(document).on("scroll", function () {
        var pixels = $(document).scrollTop();
        var pageHeight = $(document).height() - $(window).height();
        var progress = 100 * pixels / pageHeight;
        progress = progress / 5;
        $(".from-right-to-left.slow").css("right", progress + "%");
    })
    // medium speed
    $(document).on("scroll", function () {
        var pixels = $(document).scrollTop();
        var pageHeight = $(document).height() - $(window).height();
        var progress = 100 * pixels / pageHeight;
        progress = progress / 1.5;
        $(".from-left-to-right.medium").css("left", progress + "%");
    })
    $(document).on("scroll", function () {
        var pixels = $(document).scrollTop();
        var pageHeight = $(document).height() - $(window).height();
        var progress = 100 * pixels / pageHeight;
        progress = progress / 1.5;
        $(".from-right-to-left.medium").css("right", progress + "%");
    })
    // fast speed
    $(document).on("scroll", function () {
        var pixels = $(document).scrollTop();
        var pageHeight = $(document).height() - $(window).height();
        var progress = 100 * pixels / pageHeight;
        $(".from-left-to-right.fast").css("left", progress + "%");
    })
    $(document).on("scroll", function () {
        var pixels = $(document).scrollTop();
        var pageHeight = $(document).height() - $(window).height();
        var progress = 100 * pixels / pageHeight;
        $(".from-right-to-left.fast").css("right", progress + "%");
    })

    // define one-time effects triggered by scrolling past element
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
        $('.slideinleft.medium').each(function (i) {
            var bottom_of_element = $(this).offset().top + ($(this).outerHeight() / 2);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'margin-left': '0' }, 1500);
            }
        });
    });

    $(window).scroll(function () {
        $('.slideinright.medium').each(function (i) {
            var bottom_of_element = $(this).offset().top + ($(this).outerHeight() / 2);
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_element) {
                $(this).animate({ 'margin-right': '0' }, 1500);
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
