$( document ).ready(function() {

  // define effects 
  $(window).scroll( function(){
    $('.fadein').each( function(i){
        var bottom_of_element = $(this).offset().top + ($(this).outerHeight()/2);
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_element ){
            $(this).animate({'opacity':'1'},1500);
        }
    }); 
  });

  $(window).scroll( function(){
    $('.slideinleft').each( function(i){
        var bottom_of_element = $(this).offset().top + ($(this).outerHeight()/2);
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_element ){
            $(this).animate({'margin-left':'0'},1500);
        }
    }); 
  });

  $(window).scroll( function(){
    $('.slideinright').each( function(i){
        var bottom_of_element = $(this).offset().top + ($(this).outerHeight()/2);
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_element ){
            $(this).animate({'margin-left':'0'},1500);
        }
    }); 
  });

  // get current date and time
  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours();

  if (time < 12){
      $("body").css("background-color", "thistle");
        console.log('morning');
  } else if (time >= 12 && time <= 17){
      $("body").css("background-color", "skyblue");
        console.log('afternoon');
  } else if (time >= 17 && time <= 24){
      $("body").css("background-color", "#030F33");
      $("body").addClass("starry-background");
        console.log('evening');
  }

});