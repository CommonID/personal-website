jQuery(document).ready(function(){
    var counter = 0;
    $('#mobileButton').click(function(){
        if (counter == 0) {
            $('.mobileNav').slideDown(600);
            $('#otherWrapper').animate({'margin-top': '60%'}, 600);
            /*setTimeout(function(){
                $('footer').css({display: 'block'});
            }, 500);*/

            counter +=1;
        } else if (counter == 1){
            $('.mobileNav').slideUp(600);
            $('#otherWrapper').animate({'margin-top': '0%'}, 600);
            /*$('footer').css({display: 'none'});*/
            counter = 0;
        }
    });


});