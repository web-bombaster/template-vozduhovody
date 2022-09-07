// прилипающее меню с помощью jquery.sticky.js
function fixation_top() {
	var screen_width = $(window).width();

	console.log('screen_width = ' + screen_width);

	if (screen_width > 992) {
		$('.top-panel').addClass('fixed').removeAttr('style');
		$('.header-menu').removeClass('fixed').removeAttr('style');
		// if ($('.header-menu').parent().hasClass('sticky-wrapper')) {
		// 	$('.header-menu').unwrap();
		// }
	} else {
		$('.top-panel').removeClass('fixed').removeAttr('style');
		// $('.top-panel').removeClass('fixed').unwrap('').removeAttr('style');
		$('.header-menu').addClass('fixed').removeAttr('style');
	}
}

fixation_top();

$(window).resize(function() {
	fixation_top();
});

$(window).load(function() {
	$('.fixed').sticky({ topSpacing: 0 });
	$(window).resize(function() {
		$('.fixed').sticky({ topSpacing: 0 });
	});
});
