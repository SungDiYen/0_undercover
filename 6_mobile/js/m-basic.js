$(function(){
	$('.search-area').hide();
	$('#search-btn').click(function() {
		$('.search-area').show().animate({width:'100%'}, 500);
		$('#search-bar').addClass('bounceInRight');
		$('body').append('<div id="sidenav-overlay"></div>');
		$(this).hide(100);
		
		$('#search-btn2, #sidenav-overlay').click(function(){
			$('#sidenav-overlay').remove();
			$('.search-area').animate({width:'0px'}, 500).hide(300);
			$('#search-bar').removeClass('bounceInRight');
			$('#search-btn').show(500);
		});
	});
});
