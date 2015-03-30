$(function(){
	var screen_width='';
	function screenWidth(){
		/*$(window).resize(function() {
			screen_width=$(window).width();
		});*/
		screen_width=$(window).width();
		return screen_width;	//number
	}

	$('.search-area').hide();
	$('#search-btn').click(function() {
		$('.search-area').show().animate({width:'100%',opacity:'1'}, 400);
		$('#search-bar').addClass('bounceInRight');
		$('body').append('<div id="sidenav-overlay"></div>');
		$('#sidenav-overlay').animate({opacity:'.65'}, 400);
		$(this).hide(250);
		
		var s_icon_width= parseInt($('#search-btn2').css('width'),10); //string-->number
		var reset_icon_width = parseInt($('input[type="reset"]').css('width'),10); //string-->number
		screenWidth();
		var s_bar_width=screen_width-(s_icon_width+reset_icon_width)-4;
		$('#search-bar input[type="text"]').css('width', s_bar_width);

		$('#search-btn2, #sidenav-overlay').click(function(){
			$('#sidenav-overlay').fadeOut(400, function() {
				$(this).remove();
			});
			$('.search-area').animate({width:'0px'}, 400).hide(250);
			$('#search-bar').removeClass('bounceInRight');
			$('#search-btn').show(400);
		});
	});
});
