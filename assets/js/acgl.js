$(document).ready(function() {

	// set heights on window load //
	$('#welcome').height($(window).height() + 40);
	$('#main-text').height($(window).height() - 120);
	$('#about-content').height($('#about-acgl').height() - $('#about-header').height());
	$('#lead-content').height($('#about-leadership').height() - $('#lead-header').height());
	$('#music-content').height($('#music').height() - $('#music-header').height());

	setTimeout(function() {
		$('#sub-text').css('opacity',0).animate({opacity:1}, 1000);
	}, 750);


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

	var activeProfile = '';
	var innerMargins = $('.leadership-box-inner').css('margin');

	$('.leadership-box-inner').click(function() {
		var current = $(this).attr("name");
		var parent = $(this).parent();
		if (activeProfile === current) {
			$(this).animate({margin:innerMargins}, 500, 'swing');
			$(this).parent().animate({backgroundColor: "#FFA500"}, 500);
			$('.leadership-bio').fadeOut();
			//$(this).parent().css('backgroundColor', 'orange');
			activeProfile = '';
		}
		else {
			$("[name='"+activeProfile+"']").animate({margin:innerMargins}, 500, 'swing')
				.parent().animate({backgroundColor: "#FFA500"}, 500);
			$(this).animate({margin:"0"}, 500, 'swing');
			//$(this).parent().css('backgroundColor', 'blue')
			$(this).parent().animate({backgroundColor: "rgba(0,0,0,0.45)"}, 500);
			$('.leadership-bio').fadeOut();
			activeProfile = current;
		}
	})


    if ($('#nav').hasClass('affix')) {
    	$('#navLinks-logo').show();
    	$('#logo').removeClass('logo-hidden');
    }

    /* Homemade Scroll Spy */
    var aboutTop = ($('#about').position().top - 81);
    var aboutBot = (aboutTop + $('#about').height());
    var memberTop = ($('#membership').position().top - 81);
    var memberBot = (memberTop + $('#membership').height());
    var musicTop = ($('#music').position().top - 81);
    var musicBot = (musicTop + $('#music').height());
    var contactTop = ($('#contact').position().top - 81);
    var contactBot = (contactTop + $('#contact').height());


	$(window).scroll(function(){
        if ($(this).scrollTop() > aboutTop && $(this).scrollTop() < aboutBot) {
    		$('.about-underline').css('width',0).animate({width:"40%"}, 1000, 'swing');
    		$('#linkabout').addClass('active');
        }
        else {
    		$('#linkabout').removeClass('active');        	
        }
        if ($(this).scrollTop() > memberTop && $(this).scrollTop() < memberBot) {
    		$('#linkmembership').addClass('active');
        }
        else {
    		$('#linkmembership').removeClass('active');        	
        }
        if ($(this).scrollTop() > musicTop && $(this).scrollTop() < musicBot) {
    		$('#linkmusic').addClass('active');
        }
        else {
    		$('#linkmusic').removeClass('active');        	
        }
        if ($(this).scrollTop() > contactTop && $(this).scrollTop() < contactBot) {
    		$('#linkcontact').addClass('active');
        }
        else {
    		$('#linkcontact').removeClass('active');        	
        }
    });

    // for reloading the page //
    if ($(this).scrollTop() > aboutTop && $(this).scrollTop() < aboutBot) {
		$('.about-underline').css('width',0).animate({width:"40%"}, 1000, 'swing');
		$('#linkabout').addClass('active');
    }
    else if ($(this).scrollTop() > memberTop && $(this).scrollTop() < memberBot) {
		$('#linkmembership').addClass('active');
    }
    else if ($(this).scrollTop() > musicTop && $(this).scrollTop() < musicBot) {
		$('#linkmusic').addClass('active');
    }
    else if ($(this).scrollTop() > contactTop && $(this).scrollTop() < contactBot) {
		$('#linkcontact').addClass('active');
    }


});