$(function(){
// slide usando plugin slick
	
	$('.slide-head').slick({
		arrows: false,
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
  		autoplaySpeed: 2000
	});


	//Menu mobile

	$('.img-menu').click(function(){
		$('.menu-mobile').slideToggle()
	});

});