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

});