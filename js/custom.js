function randomNumber(min, max) {
    let randomNumber = Math.floor((Math.random() * max) + min);
    return randomNumber;
}

$(document).ready(function () {
    let uncollected = 9;

    function allClean(){
        if (uncollected == 0) {
            $(".framed-box").removeClass("no-c");
        }
    }

    $('.framed-box button').on('click', function () {
        $('.framed-box').addClass("no-c");
    });

    $('.changeable-image').on('click', function () {
        $(this).children('img').toggleClass('hidden');
    });

    var classes = ["pattern1", "pattern2", "pattern3", "pattern4", "pattern7"];
    $(".beach-wrapper").not(".night .beach-wrapper").addClass(classes.splice(~~(Math.random() * classes.length), 1)[0]);

    $(".tree-now").on("click", function () {
        for (let index = 0; index < 1000; index++) {
            $(".treemodal .modal-body").append('<img class="tree" src="assets/images/tree.svg" />')
        }
    })

    $(".plastic").on("click", function () {
        $(this).css({
            visibility: 'hidden',
            opacity: 1
        });
        $(this).removeClass("uncollected");
        $(".message").addClass("see").delay(1600).queue(function (n) {
            $(".message").removeClass("see"); n();
        });
        uncollected = uncollected - 1;
        allClean();
    })

    $(".crab").on("click", function () {
        $(".message-crab").addClass("see").delay(1600).queue(function (n) {
            $(".message-crab").removeClass("see"); n();
        });
    })

    $(".pile-img").on("click", function () {
        $(".message-pile").addClass("see").delay(1600).queue(function (n) {
            $(".message-pile").removeClass("see"); n();
        });
    })


    function fade() {
        var animation_height = $(window).innerHeight() * 0.25;
        var ratio = Math.round((1 / animation_height) * 10000) / 10000;

        $('img, .box, .infobox').not(".modal img").each(function () {

            var objectTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).innerHeight();

            if (objectTop < windowBottom) {
                if (objectTop < windowBottom - animation_height) {
                    $(this).css({
                        transition: 'opacity 0.1s linear',
                        opacity: 1
                    });

                } else {
                    $(this).css({
                        transition: 'opacity 0.25s linear',
                        opacity: (windowBottom - objectTop) * ratio
                    });
                }
            } else {
                $(this).css('opacity', 0);
            }
        });
    }
    $('.fade').css('opacity', 0);
    fade();
    $(window).scroll(function () { fade(); });

    $(".toggle-info").on("click", function () {
        $(this).siblings(".infobox").toggleClass("view")
    })

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


    // slider
    $(".slidercontent").hide();
    $(".slidercontent:nth-child(1)").fadeIn("slow");

    var current = 1;
    var max = $("li").length + 1;

    function changeUp() {
        $(".slidercontent").hide();
        current += 1;
        if (current === max) {
            current = 1;
        }
        $(".slidercontent:nth-child(" + current + ")").fadeIn("slow");
    }

    function changeDown() {
        $(".slidercontent").hide();
        current -= 1;
        if (current === 0) {
            current = max - 1;
        }
        $(".slidercontent:nth-child(" + current + ")").fadeIn("slow");
    }

    $(".sliderspot2").click(function () { changeUp(); });
    $(".sliderspot").click(function () { changeDown(); });

    function startChange() { changeIt = setInterval(function () { changeUp(); }, 10000); };
    startChange();

    function stopChange() { clearInterval(changeIt); }

    $(".sliderspot2").click(function() { stopChange(); changeUp(); startChange(); });
    $(".sliderspot").click(function() { stopChange(); changeDown(); startChange(); });

});