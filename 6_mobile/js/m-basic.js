$(function(){
	$('.search-area').hide();
	$('#search-btn').click(function() {
		$('.search-area').removeClass('slideInLeft').addClass('slideInRight');
		$('.search-area').show(300);
		$('body').append('<div id="sidenav-overlay"></div>');
		
		$('#search-btn2, #sidenav-overlay').click(function(){
			$('#sidenav-overlay').remove();
			$('.search-area').removeClass('slideInRight').addClass('slideInLeft').hide();
		});
	});
});
