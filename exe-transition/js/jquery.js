
$(document).ready(function(){
	var test= "";

	$('.a-menu').on('click', function(){
	$(this).toggleClass('menu-open');
	$('.menu-1').toggleClass('menu-on-1');
	});

	$('#change').on('click', function(){
	$('.container-1').toggleClass('change');
	});

	$('#bck').on('click', function(){
	if(test == "")
	{
		$('.bck-1').css('transform','translate(-100%,0)');
		$('.bck-2').css('transform','translate(0%,0)');
	}

	else
	{
		$('.bck-1').css('transform','translate(0,0)');
		$('.bck-2').css('transform','translate(100%,0)');
	}
	test = !test;
	});

	$('.f').on('click', function(){
	$(this).toggleClass('f-on');
	});

	$('.more').on('click',function(){
		$('.more').toggleClass('switch');
		$('.more-li').toggleClass('more-li--on');
	});

	$('.field').on('click',function(){
		$(this).toggleClass('field-on');
	});

	$('#show-content').on('click',function(){
		$('.content').toggleClass('content-on');
	});


});