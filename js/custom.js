function randomNumber(min, max) {
    let randomNumber = Math.floor((Math.random() * max) + min);
    return randomNumber;
}

$(document).ready(function () {
    var classes = ["pattern1", "pattern2", "pattern3", "pattern4", "pattern5", "pattern6", "pattern7", "pattern8", "pattern9", "pattern10", "pattern11", "pattern12"];
    $(".beach-wrapper").addClass( classes.splice( ~~(Math.random()*classes.length), 1 )[0] );

    $(".tree-now").on("click", function () {
        for (let index = 0; index < 1000; index++) {
            $(".treemodal .modal-body").append('<img class="tree" src="assets/images/tree.svg" />')
        }
    })

    $(".tree-now").on("click", function () {
        for (let index = 0; index < 1000; index++) {
            $(".treemodal .modal-body").append('<img class="tree" src="assets/images/tree.svg" />')
        }
    })

    function fade() {
        var animation_height = $(window).innerHeight() * 0.25;
        var ratio = Math.round((1 / animation_height) * 10000) / 10000;
    
        $('img, .box, .infobox').each(function () {
    
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


    // define scroll animations reactive to scroll behavior

    // slow speed
    $(document).on("scroll", function () {
        var pixels = $(document).scrollTop();
        var pageHeight = $(document).height() - $(window).height();
        var progress = 100 * pixels / pageHeight;
        progress = progress / 5;
        $(".from-left-to-right.slow").css("margin-left", progress + "%");
    })
    $(document).on("scroll", function () {
        var pixels = $(document).scrollTop();
        var pageHeight = $(document).height() - $(window).height();
        var progress = 100 * pixels / pageHeight;
        progress = progress / 5;
        $(".from-right-to-left.slow").css("margin-right", progress + "%");
    })
    // medium speed
    $(document).on("scroll", function () {
        var pixels = $(document).scrollTop();
        var pageHeight = $(document).height() - $(window).height();
        var progress = 100 * pixels / pageHeight;
        progress = progress / 1.5;
        $(".from-left-to-right.medium").css("margin-left", progress + "%");
    })
    $(document).on("scroll", function () {
        var pixels = $(document).scrollTop();
        var pageHeight = $(document).height() - $(window).height();
        var progress = 100 * pixels / pageHeight;
        progress = progress / 1.5;
        $(".from-right-to-left.medium").css("margin-right", progress + "%");
    })
    // fast speed
    $(document).on("scroll", function () {
        var pixels = $(document).scrollTop();
        var pageHeight = $(document).height() - $(window).height();
        var progress = 100 * pixels / pageHeight;
        $(".from-left-to-right.fast").css("margin-left", progress + "%");
    })
    $(document).on("scroll", function () {
        var pixels = $(document).scrollTop();
        var pageHeight = $(document).height() - $(window).height();
        var progress = 100 * pixels / pageHeight;
        $(".from-right-to-left.fast").css("margin-right", progress + "%");
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
