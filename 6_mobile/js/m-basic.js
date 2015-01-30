$(function(){
	$('.search-area').hide();
	$('#search-btn').click(function() {
		$('.search-area').removeClass('fadeOut').addClass('fadeIn').show()
		.animate({right:'0px'}, 300);
		$('#search-bar').addClass('bounceInRight');
		$('body').append('<div id="sidenav-overlay"></div>');
		$(this).hide(100);
		
		$('#search-btn2, #sidenav-overlay').click(function(){
			$('#sidenav-overlay').remove();
			$('.search-area').removeClass('fadeIn').addClass('fadeOut')
			.animate({right:'-230px'}, 300).hide(300);
			$('#search-bar').removeClass('bounceInRight');
			$('#search-btn').show(750);
		});
	});
});
