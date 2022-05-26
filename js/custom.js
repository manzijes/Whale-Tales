$( document ).ready(function() {

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

});