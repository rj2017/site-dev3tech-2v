$(function(){

	 $('[data-toggle="popover"]').popover();

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
		$('.menu-mobile').slideToggle();
	});

	/*deslizamento menu*/	
		$('.seletor-ancora').click(function () {
	        var alvo = $(this).attr('href').split('#').pop();
	        $('html, body').animate({scrollTop: $('#' + alvo).offset().top}, 1200);
	        $('.menu-mobile').slideUp();
	        return false;
    	});

    	$(window).resize(function(){
    		$resize = $('body').width();

    		if ($resize > 1200) {
    			$('.menu-mobile').slideUp();
    		}
    	});

  

});