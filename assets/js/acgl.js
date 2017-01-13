$(document).ready(function() {

	// set heights on window load //
	$('#welcome').height($(window).height() + 40);
	$('#main-text').height($(window).height() - 120);
	$('#about-content').height($('#about-acgl').height() - $('#about-header').height());


	setTimeout(function() {
		$('#sub-text').css('opacity',0).animate({opacity:1}, 1000);
	}, 1250);


	$('#nav').affix({
        offset: { top: $('#nav').offset().top }
    }).on('affix.bs.affix', function () {
        $('#navLinks-logo').fadeIn();
        $('#logo').removeClass('logo-hidden');
    }).on('affix-top.bs.affix', function () {
        $('#navLinks-logo').fadeOut();
        $('#logo').addClass('logo-hidden');
    });


    $(".navLinks").click(function() {
    	var name = $(this).attr('name');
	    $('html, body').animate({
	        scrollTop: $("#" + name).offset().top - 80
	    }, 1500);
	    return false;
	});


    if ($('#nav').hasClass('affix')) {
    	$('#navLinks-logo').show();
    	$('#logo').removeClass('logo-hidden');
    }

    if ($(this).scrollTop() > $('#about').position().top - 120) {
		$('.about-underline').css('width',0).animate({width:"40%"}, 1000, 'swing');
        return false;
    }


	$(window).scroll(function(){
        if ($(this).scrollTop() > ($('#about').position().top - 120)) {
    		$('.about-underline').css('width',0).animate({width:"40%"}, 1000, 'swing');
    		$('#linkabout').addClass('active');
            return false;
        }
        else {
    		$('#linkabout').removeClass('active');        	
        }
    });


});