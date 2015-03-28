$(document).ready(function() {
	var images = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg", "images/9.jpg", "images/10.jpg"];
	var currentImage = 0;
	var i = 0;
	var current = 0;

	// Large Image
	$('#img li').eq(0).show().css("opacity", "1");

	// Preview
	for (var j = 1; j < 6; j++) {
		$('#preview').append('<img src="">');
	}
	$('#preview img').each(function(i) {
		$('#preview img').eq(i).attr("src", images[currentImage]);
		currentImage++;
		i++;
	});
	currentImage = 0;

	// Buttons next and back
	$('#back').click(function() {
		if (current != 0) {
			$('#img li a').hide().animate({width: 0}, 300);
			setTimeout(function() {
				$('#img li').eq(current).hide();
				current--;
				currentImage = current;
			}, 300);
			setTimeout(function() {
				$('#img li').eq(current).show();
			}, 300);
			$('#img li a').show().animate({width: 500}, 300);
		}
		else {
			$('#img li a').hide().animate({width: 0}, 300);
			setTimeout(function() {
				$('#img li').eq(current).hide();
				current = 9;
				currentImage = current;
			}, 300);
			setTimeout(function() {
				$('#img li').eq(current).show();
			}, 300);
			$('#img li a').show().animate({width: 500}, 300);
		};
		$('#preview img').animate({opacity: 0.5}, 300);
		setTimeout(function() {
			$('#preview img').each(function(i) {
				if (currentImage > 9) { currentImage = 0; }
				$('#preview img').eq(i).attr("src", images[currentImage]);
				currentImage++;
				i++;
			});
		}, 300);
		$('#preview img').animate({opacity: 1}, 300);
	});

	$('#forward').click(function() {
		if (current != images.length - 1) {
			$('#img li a').hide().animate({width: 0}, 300);
			setTimeout(function() {
				$('#img li').eq(current).hide();
				current++;
				currentImage = current;
			}, 300);
			setTimeout(function() {
				$('#img li').eq(current).show();
			}, 300);
			$('#img li a').show().animate({width: 500}, 300);
		}
		else {
			$('#img li a').hide().animate({width: 0}, 300);
			setTimeout(function() {
				$('#img li').eq(current).hide();
				current = 0;
				currentImage = current;
			}, 300);
			setTimeout(function() {
				$('#img li').eq(current).show();
			}, 300);
			$('#img li a').show().animate({width: 500}, 300);
		};
		$('#preview img').animate({opacity: 0.5}, 300);
		setTimeout(function() {
			$('#preview img').each(function(i) {
				if (currentImage > 9) { currentImage = 0; }
				$('#preview img').eq(i).attr("src", images[currentImage]);
				currentImage++;
				i++;
			});
		}, 300);
		$('#preview img').animate({opacity: 1}, 300);
	});

	// onClick preview
	$('#preview img').click(function() {
		$('#img li a').hide().animate({width: 0}, 300);
		console.log(current);
		x = $(this).attr("src");
		setTimeout(function() {
			$('#img li').eq(current).hide();
			currentImage = $.inArray(x, images);
			current = currentImage;
			console.log(current);
		}, 300);
		setTimeout(function() {
			$('#img li').eq(current).show();
		}, 300);
		$('#img li a').show().animate({width: 500}, 300);
		$('#preview img').animate({opacity: 0.5}, 300);
		setTimeout(function() {
			$('#preview img').each(function(i) {
				if (currentImage > 9) { currentImage = 0; }
				$('#preview img').eq(i).attr("src", images[currentImage]);
				currentImage++;
				i++;
			});
		}, 300);
		$('#preview img').animate({opacity: 1}, 300);
	});

	// Full-size image
	$('#img img').click(function() {
		$('body').css('overflow-y', 'hidden');


		$('<div id="overlay"></div>')
			.css('top', $(document).scrollTop())
			.css('opacity', '0')
			.animate({'opacity': '0.7'}, 'slow')
			.appendTo('body');

		$('<div id="lightbox"></div>').hide().appendTo('body');
		$('<img>').attr('src', $(this).attr('src')).load(function() {
			positionLightboxImage();
		})
		.appendTo('#lightbox');

		$('<button id="close">Close</button>').appendTo('#lightbox');
		$('#close').click(function() {
			removeLightbox();
		})

		return false;
	});

	function positionLightboxImage() {
		var top = ($(window).height() - $('#lightbox').height()) / 2;
		var left = ($(window).width() - $('#lightbox').width()) / 2;
		$('#lightbox')
			.css({
				'top': top + $(document).scrollTop(),
				'left': left
		})
		.fadeIn();
	};
	
	function removeLightbox() {
	$('#overlay, #lightbox, #close')
		.fadeOut('slow', function() {
			$(this).remove();
			$('body').css('overflow-y', 'auto');
		});
   	};

});