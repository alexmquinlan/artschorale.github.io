$(document).ready(function() {

    var windowWidth = $(window).width();

	// set heights on window load //
	$('#welcome').height($(window).height() + 40);
	$('#main-text').height($(window).height() - 120);
	$('#about-content').height($('#about-blur').height() - $('#about-header').height());
	$('#lead-content').css('min-height',$('#about-leadership').height() - $('#lead-header').height());
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


    $(".navLinks, #footerLogoLink").click(function() {
    	var name = $(this).attr('name');
	    $('html, body').animate({
	        scrollTop: $("#" + name).offset().top - 80
	    }, 1500);
	    return false;
	});

	var activeProfile = '';
	var innerMargins = $('.leadership-box-inner').css('margin');
	var currentBG = '#CAEBF2';

	$('.leadership-box-inner').click(function() {
		var current = $(this).attr("name");
		var parent = $(this).parent();
		if (activeProfile === current) {
			$(this).animate({margin:innerMargins}, 500, 'swing');
			$(this).parent().animate({backgroundColor: currentBG}, 500);
			$('.leadership-bio').fadeOut();
			//$(this).parent().css('backgroundColor', 'orange');
			activeProfile = '';
		}
		else {
			$("[name='"+activeProfile+"']").animate({margin:innerMargins}, 500, 'swing')
				.parent().animate({backgroundColor: currentBG}, 500);
			$(this).animate({margin:"0"}, 500, 'swing');
			//$(this).parent().css('backgroundColor', 'blue')
			$(this).parent().animate({backgroundColor: "rgba(0,0,0,0.45)"}, 500);
			$('.leadership-bio').fadeOut();
			activeProfile = current;
		}
	});

    var activeSection = "sopranos";
    var caret = '   <span class="caret"></span>';
    $('.section-select').click(function() {
        var selected = $(this);
        var section = selected.html();
        if (section != activeSection) {

            $('#'+activeSection).removeClass('active-section');
            $('#'+section).addClass('active-section');
            $('#section-btn').html(section.toUpperCase() + caret);
            activeSection = section;
        }
        $('#section-btn').dropdown('toggle');
        return false;
    });

    if (windowWidth <= 768) {
        $('.leadership-bio').removeClass('in');
    }

    var activeBio = '';
    $('.bio-collapse').click(function() {
        var id = $(this).attr('data-target');
        $(id).collapse();
        var arrow = $(this).find('span');
        if (arrow.hasClass('glyphicon-menu-down')) {
            arrow.removeClass('glyphicon-menu-down').addClass('glyphicon-menu-up');
        }
        else {
            arrow.removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down');
        }
    });

    var currentAudio = "AM";
    $('.audio-tracks').click(function() {

        if ($(this).attr("id") !== currentAudio) {
            var audio = $("#music-player");
            var url = $(this).attr("name");
            $("#music-source").attr("src", url);

            $('#current-song').html($(this).html());

            audio[0].pause();
            audio[0].load();
            audio[0].oncanplaythrough = audio[0].play();

            $('#'+currentAudio).removeClass('active-song');
            $(this).addClass('active-song');
            currentAudio = $(this).attr("id");
        }

    });


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



    /* Color Selection */

    $('.color-links').click(function() {
    	var scheme;
    	if ($(this).attr('name') == "orig") {
    		scheme = {
    			"#welcome~f~color":"#fd8c00",
    			"#welcome~f~background-color":"#FDFFFC",
    			"#welcome-center~f~color":"#003F8D",
    			"#nav~f~background-color":"#FDFFFC",
    			"#navLinks-logo~f~color":"#003F8D",
    			".navLinks:link~f~color":"#2B2D38",
    			".navLinks:hover~hover~color":"#FF6700",
    			".active~f~color":"#FF6700",
    			"#about~f~background-color":"orange",
    			".leadership-box1~f~background-color":"orange",
    			".leadership-box-inner1~f~background-color":"orange"
    		}
    		currentBG = "#FFA500";
    	}
    	else if ($(this).attr('name') == 'red') {
    		scheme = {
    			"#welcome~f~color":"#A9A9A9",
    			"#welcome~f~background-color":"#EFEFEF",
    			"#welcome-center~f~color":"#3E3E3E",
    			"#nav~f~background-color":"#EFEFEF",
    			"#navLinks-logo~f~color":"#3E3E3E",
    			".navLinks:link~f~color":"#FB3B3F",
    			".navLinks:hover~hover~color":"#A9A9A9",
    			".active~f~color":"#A9A9A9",
    			"#about~f~background-color":"#CAEBF2",
    			".leadership-box1~f~background-color":"#CAEBF2",
    			".leadership-box-inner1~f~background-color":"#CAEBF2"
    		} 
    		currentBG = "#CAEBF2";
    	}
    	var name = "";
    	var id = "";
    	var prop = "";
    	for (var x in scheme) {
    		var arr = x.split("~");
    		name 	= arr[0];
    		id 		= arr[1];
    		prop	= arr[2];
    		$(name).css(prop,scheme[x]);
    	}	
    	return false;
    });


});