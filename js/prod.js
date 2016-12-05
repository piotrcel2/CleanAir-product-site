$(document).ready(function () {
    
    var productmobile = $('.productmobile');
    var productmain = $('.productmain');
    var productlist = $('.productlist');
    var caticons = $('.caticon');
    var catcontents = $('.catcontent');
    var cat1 = $('.cat1');
    var cat2 = $('.cat2');
    var cat3 = $('.cat3');
    var cat4 = $('.cat4');
    var cat5 = $('.cat5');
    
    
    function match_media_with_listener() {

        var mq = window.matchMedia("(max-width: 768px)");

        mq.addListener(WidthChange);
        WidthChange(mq);

        function WidthChange(mediaQuery) {

            if (mediaQuery.matches) {
                
                // MAŁE OKNO
                console.log(productmobile);
                productmobile.removeClass('setdisnone');
                productmain.addClass('setdisnone');
                productlist.addClass('setdisnone');
                
            } else {
                
                // DUŻE OKNO!!!!!
                console.log(productmobile);
                productmobile.addClass('setdisnone');
                productmain.removeClass('setdisnone');
                productlist.removeClass('setdisnone');
            }
        }
    }


    match_media_with_listener();
    
    caticons.on('click', function(){
        
        caticons.removeClass('chosencat');
        $(this).addClass('chosencat');
        catcontents.addClass('setdisnone');
        if ($(this).data('cat') == 1){
            cat1.removeClass('setdisnone');
        } else if ($(this).data('cat') == 2){
            cat2.removeClass('setdisnone');
        } else if ($(this).data('cat') == 3){
            cat3.removeClass('setdisnone');
        } else if ($(this).data('cat') == 4){
            cat4.removeClass('setdisnone');
        } else if ($(this).data('cat') == 5){
            cat5.removeClass('setdisnone');
        }
        
    })
    
    
})