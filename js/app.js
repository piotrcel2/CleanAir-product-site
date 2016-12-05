$(document).ready(function () {
    
    var headerinside = $('#headerinside');
    var navlarge = $('.navlarge');
    var boxovernav = $('#boxovernav');
    var boxovernavbar = $('#boxovernavbar');
    var hamburgerbutton = boxovernavbar.children();
    var oversmallnav = $('#oversmallnav');
    var navsmall = $('.navsmall');
    var mainlinks = navsmall.children().children();
    var sublinksall = $('.sublinks');
    
    function match_media_with_listener() {

        var mq = window.matchMedia("(max-width: 768px)");

        mq.addListener(WidthChange);
        WidthChange(mq);


        function WidthChange(mediaQuery) {

            if (mediaQuery.matches) {
                
                // MAŁE OKNO
                navlarge.addClass('setdisnone');
                boxovernav.addClass('setdisnone');
                boxovernavbar.removeClass('setdisnone');
                hamburgerbutton.removeClass('setdisnone');
                oversmallnav.removeClass('setdisnone');
                
            } else {
                
                // DUŻE OKNO!!!!!
                navlarge.removeClass('setdisnone');
                boxovernav.removeClass('setdisnone');
                boxovernavbar.addClass('setdisnone');
                hamburgerbutton.addClass('setdisnone');
                oversmallnav.addClass('setdisnone');
                navsmall.addClass('setdisnone');
            }
        }
    }


    match_media_with_listener();
    
    function hidesubmenus(){
        
        sublinksall.addClass('setdisnone');
        
    }
    
    hamburgerbutton.on('click', function(){
        
        if (navsmall.hasClass('setdisnone') == false){
            hidesubmenus();
        }
        navsmall.toggleClass('setdisnone');
        
        
    })
    
    
    
    mainlinks.on('click', function(){
                 
        if ($(this).children('ul').hasClass('setdisnone')){
            
            hidesubmenus();
            $(this).children('ul').removeClass('setdisnone');
            
        } else {
            $(this).children('ul').addClass('setdisnone');
        }
        
                 
    })
    
    
    
    
    
    
    
    
    
    // pop-upy
    
    function showPopup(imgSrc) {
    var theImg = '<div class="wrap"><img src="'+imgSrc+'"></div>';
    $(".popup").empty().append(theImg).fadeIn();
    }

    $(".gallery img").on('click',function (){
        var theSrc = $(this).attr('src');
        showPopup(theSrc);
    });
    
    $(".popup").on('click', ".wrap", function(){
        $(".popup").fadeOut();
    })

    
    
    
    
    
});