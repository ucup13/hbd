$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function () {
		var vw;
		$(window).resize(function () {
			 vw = $(window).width() / 2;
			$('#card *').hide();
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b1a,#b2a,#b3a,#b4a').stop();
		 	$('#b11').animate({top:350, left: vw-350},500);
			$('#b22').animate({top:350, left: vw-250},500);
			$('#b33').animate({top:350, left: vw-150},500);
			$('#b44').animate({top:350, left: vw-50},500);
			$('#b55').animate({top:350, left: vw+50},500);
			$('#b66').animate({top:350, left: vw+150},500);
			$('#b77').animate({top:350, left: vw+250},500);
		 	$('#b11a').animate({top:480, left: vw-350},500);
			$('#b22a').animate({top:480, left: vw-250},500);
			$('#b33a').animate({top:480, left: vw-150},500);
			$('#b44a').animate({top:480, left: vw-50},500);
		});


	$('#initial').click(function(){
		$(this).fadeOut('slow').delay(8000).promise().done(function(){
			$('#turn_on').fadeIn('slow');
		});
	});

	$('#play').click(function(){
		// changeColor();
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$("#welcome_dance").remove();
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('#banner').css("display", "block");
		$('.bannar').addClass('center');
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
				$('#ballons_flying').css("display", "block");
		});
	});

	function loopOne() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b1').animate({left:randleft,bottom:randtop},8000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b2').animate({left:randleft,bottom:randtop},8000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b3').animate({left:randleft,bottom:randtop},8000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b4').animate({left:randleft,bottom:randtop},8000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b5').animate({left:randleft,bottom:randtop},8000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b6').animate({left:randleft,bottom:randtop},8000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b7').animate({left:randleft,bottom:randtop},8000,function(){
			loopSeven();
		});
	}
	
	function loopEight() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b1a').animate({left:randleft,bottom:randtop},8000,function(){
			loopEight();
		});
	}
	
	function loopNine() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b2a').animate({left:randleft,bottom:randtop},8000,function(){
			loopNine();
		});
	}
	
	function loopTen() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b3a').animate({left:randleft,bottom:randtop},8000,function(){
			loopTen();
		});
	}
	
	function loopEleven() {
		var randleft = Math.floor((Math.random() * $(window).width()) + 1);
		var randtop =  Math.floor((Math.random() * $(window).height()) + 1);
		$('#b4a').animate({left:randleft,bottom:randtop},8000,function(){
			loopEleven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7,#b3a').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6,#b1a,#b2a,#b4a').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		loopEight();
		loopNine();
		loopTen();
		loopEleven();
		

		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});	

	$('#cake_fadein').click(function(){
		$('#cake_pink').fadeIn('slow');		
		
		      $(this).fadeOut('slow').delay(8000).promise().done(function () {
            $('#wish_message').fadeIn('slow');
        });
    });
    $('#wish_message').click(function () {

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b1a,#b2a,#b3a,#b4a').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')	
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b1a').attr('id','b11a')
		$('#b2a').attr('id','b22a')
		$('#b3a').attr('id','b33a')
		$('#b4a').attr('id','b44a')
	  $('#b11').animate({top:400, left: 10},500);
		$('#b22').animate({top:400, left: 60},500);
		$('#b33').animate({top:400, left: 110},500);
		$('#b44').animate({top:400, left: 160},500);
		$('#b55').animate({top:400, left: 210},500);
		$('#b66').animate({top:400, left: 260},500);
		$('#b77').animate({top:400, left: 310},500);
	 $('#b11a').animate({top:530, left: 90},500);
		$('#b22a').animate({top:530, left: 140},500);
		$('#b33a').animate({top:530, left: 190},500);
		$('#b44a').animate({top:530, left: 240},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		// var audio1 = $('.song1')[0];
  //       audio1.pause();

  //       var audio2 = $('.song')[0];
  //       audio2.play();
		$(this).fadeOut('slow');
		$('#card').css("display", "block");
		$('#card').show();
		$('#card').css('position', 'absolute');
		$('#card').css('z-index', 9999);
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		$('#card').fadeIn('slow');

		$(this).fadeOut('slow').delay(13000).promise().done(function(){
			$('#picture_time').fadeIn('slow');
		});
	
		
	});

	$('#picture_time').click(function(){
		window.location.replace("src/html/index.html")
		
	});
});





  
   
 


//alert('hello');
