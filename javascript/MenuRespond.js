jQuery(document).ready(function(){

    if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        $('#navWrapper').hoverIntent(
            function () {
                clearTimeout($(this).data('timeout'));
                if ($(window).width() > 800) {

                    if($(window).width() < 1200) {
                        $(this).animate({width: '25%'}, 700);
                    } else {
                        $(this).animate({width: '12.5%'}, 700);
                    }
                    $("img").animate({'margin-left': '5%'}, 700);
                    $("#otherWrapper").animate({'margin-left': '20%'}, 500);

                    setTimeout(function () {

                        //Menu Text
                        var homeText = $('#homeText').css({
                            display: 'none',
                            'padding-top': '0.25em'
                        }).text("home.");
                        $('#homeText').append(homeText);
                        homeText.fadeIn(1000);

                        var aboutText = $('#aboutText').css({
                            display: 'none',
                            'padding-top': '0.25em'
                        }).text("about.");
                        $('#aboutText').append(aboutText);
                        aboutText.fadeIn(1000);

                        var workText = $('#workText').css({
                            display: 'none',
                            'padding-top': '0.25em'
                        }).text("work.");
                        $('#workText').append(workText);
                        workText.fadeIn(1000);

                        var contactText = $('#contactText').css({
                            display: 'none',
                            'padding-top': '0.25em'
                        }).text("contact.");
                        $('#contactText').append(contactText);
                        contactText.fadeIn(1000);

                        //Social Text
                        var socialText = $('.socialText').css({
                            display: 'none'
                        }).text('social.');
                        $('.socialText').append(socialText);
                        socialText.fadeIn(1000);

                        var facebookText = $('#facebookText').css({
                            display: 'none',
                            'padding-top': '0.5em'
                        }).text("facebook.");
                        $('#facebookText').append(facebookText);
                        facebookText.fadeIn(1000);

                        var twitterText = $('#twitterText').css({
                            display: 'none',
                            'padding-top': '0.5em'
                        }).text("twitter.");
                        $('#twitterText').append(twitterText);
                        twitterText.fadeIn(1000);

                        var instagramText = $('#instagramText').css({
                            display: 'none',
                            'padding-top': '0.5em'
                        }).text("instagram.");
                        $('#instagramText').append(instagramText);
                        instagramText.fadeIn(1000);

                        var githubText = $('#githubText').css({
                            display: 'none',
                            'padding-top': '0.5em'
                        }).text("github.");
                        $('#githubText').append(githubText);
                        githubText.fadeIn(1000);
                    }, 400);
                    clearTimeout($(this).data('timeout'));
                }
                clearTimeout($(this).data('timeout'));
            },
            function () {
                clearTimeout($(this).data('timeout'));
                var t = setTimeout(function(){
                    if($(window).width() > 800) {
                        $(this).animate({width: '6%'}, 800);
                        $("#otherWrapper").animate({'margin-left': '10%'}, 800);
                        $("img").animate({'margin-left': '12.5%'}, 800);
                        $('#homeText').empty();
                        $('#aboutText').empty();
                        $('#workText').empty();
                        $('#contactText').empty();
                        $('.socialText').empty();
                        $('#facebookText').empty();
                        $('#twitterText').empty();
                        $('#instagramText').empty();
                        $('#githubText').empty();
                    }
                }, 400);
                $(this).data('timeout', t);
            }
        );

    }
});