$(function(){

	 $('[data-toggle="popover"]').popover()

// slide usando plugin slick
	
	$('.slide-head').slick({
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
  		autoplaySpeed: 4000
	});

	$('.comentarios').slick({
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		autoplay: true,
  		autoplaySpeed: 4000
	});


	//Menu mobile

	$('.img-menu').click(function(){
		$('.menu-mobile').slideToggle()
	});

	/*deslizamento menu*/	
		$('.seletor-ancora').click(function () {
	        var alvo = $(this).attr('href').split('#').pop();
	        $('html, body').animate({scrollTop: $('#' + alvo).offset().top}, 1200);
	        $('.menu-mobile').slideUp();
	        return false;
    	});

		$nav = $('nav.menu-desktop ul a')
    $(window).scroll(function() {
    	var windowOffY = $(window).scrollTop();
		var windowHeight = $(window).height(); 

			$('section').each(function(){
				var elOffY = $(this).offset().top; 
			if(elOffY < 300){
					
					console.log(elOffY);
					return;
				}
			});

    });

  

});