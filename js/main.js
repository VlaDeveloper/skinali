		$(window).load(function() {
			$("a[href^='#']").click(function() {
				var _href = $(this).attr('href');
				$('html, body').animate({scrollTop: $(_href).offset().top - 120 + 'px'});
				return false;
			});
			$('.menu-button').click(function(){
				$('.menu').toggleClass('menu_active');
			});
			// Настройка select
			$('.select_checked').click(function(){
				$('.select__dropdown').toggleClass('select__dropdown_open');
			});
			$('.select__option').click(function(){
				var value = $(this).data('value');
				$('#select-type').val(value);
				$('.select_checked').text(value);
				$('.select__dropdown').toggleClass('select__dropdown_open');
			});
			// Настройка до и после
			$(".before-after").twentytwenty({
				before_label: 'Без скинали', // Set a custom before label
    		after_label: 'С скинали' // Set a custom after label
    	});
			$('.before-slider').slick({
				draggable: false,
				dots: true,
				prevArrow: $('.arrow-left'),
				nextArrow: $('.arrow-right'),
				dotsClass: 'before-slider__dots'
			});
			$('input[type="tel"]').mask("+7 (999) 999-99-99");
		});