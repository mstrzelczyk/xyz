$(function(){

	//resize	
	wH = $(window).height(); 
	tH = $('section#top').height();
	$('.mainSection').css('height', wH-tH);

	//scroll	
	$('#leftMenu .leftNavigation').click(function(){		
		$('.leftNavigation').removeClass('active');		
		$(this).addClass('active');
		anchorId = $(this).attr('href');						
		position =  (anchorId != '#theGoodBadGirls') ? $(anchorId).offset().top : 0;
		$('html,body').animate({
			scrollTop: position
		}, 1000);	
		return false;
	});
	

		 
	

	function changeJoinUs(){
		$("#joinUs").css({
			height: $("#joinUs img").height()
		})
	}

	function bootstrap(){
		changeJoinUs();
	}

	$(window).resize(function(){		
		resizeTimeout = setTimeout(function(){
			 bootstrap();
			clearTimeout(resizeTimeout);
		}, 20);
	});

	setTimeout(function(){
		bootstrap();
	}, 100);
	

})