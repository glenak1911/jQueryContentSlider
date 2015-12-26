//(document).ready(); makes sure that all elements on the page are
//loaded before loading the script
$(document).ready(function() {
	//alert('Doc is loaded');	
	
	//specifies speed to change from image to image, in ms
	var speed = 500;
	
	//specifies auto slider option
	var autoswitch = true;
	
	//Autoslider speed
	var autoswitch_speed = 4000;
	
	//Add initial active class
	$('.slide').first().addClass('active');
	
	//Hide all slides
	$('.slide').hide();
	
	//Show first slide
	$('.active').show();
	
	$('#next').on('click', function(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldactive').is(':last-child')){
			//alert('true');
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');	
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
		
	});
	
	$('#prev').on('click', function(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldactive').is(':first-child')){
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');	
		}
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
		
	});
	
	var cur = 0, // Start Slide Index. We'll use ++cur to increment index
      pau = 1000, // Pause Time (ms)
      fad = 500, // Fade Time (ms)
      $ga = $('#slider'), // Cache Gallery Element
      $sl = $('> div', $ga), // Cache Slides Elements
      tot = $sl.length, // We'll use cur%tot to reset to first slide
      itv; // Used to clear on mouseenter

    $sl.hide().eq(cur).show(); // Hide all Slides but desired one

    function stopFn() {
      clearInterval(itv);
    }

    function loopFn() {
      itv = setInterval(fadeFn, pau);
    }

    function fadeFn() {
      $sl.fadeOut(fad).eq(++cur % tot).stop().fadeIn(fad);
    }
    $ga.hover(stopFn, loopFn);

    loopFn(); // Finally, Start

});

