jQuery(document).ready(function($){
  
	$('.slickDefault').slick({
  infinite: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
});

	$('.close a').click(function(e){
		$('.error-wrapper, .villkor-wrapper').addClass("not-visible");
		e.preventDefault();
	});
	$('a.villkor').click(function(e){
		$('.error-wrapper, .villkor-wrapper').removeClass("not-visible");
		e.preventDefault();
	});

	  var $header = $('.page-head'),
		headerHeight = 100,
		$document = $(document),
		fade = false,
		cachedFade = fade;
  
  
	$(window).load(function(){
		$('body').addClass('loaded');
	});
	
	$(window).on('scroll', function(){
		if ($document.scrollTop() > headerHeight) {
			fade = true;
			
			if (fade !== cachedFade) {
				$header.addClass('fade');
			}
		} else {
			fade = false;
			if (fade !== cachedFade) {
				$header.removeClass('fade');
			}
		}
		cachedFade = fade;
	});

});