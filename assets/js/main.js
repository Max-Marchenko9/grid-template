
$(document).ready(function(){
	$('.header-navbar__btn').on('click', function(){
		$(this).toggleClass('open');
    $('.header-navbar__list').stop(true, true).slideToggle(500);
	});
});