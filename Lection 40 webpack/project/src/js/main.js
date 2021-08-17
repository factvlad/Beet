/*
	Javascript File for AKAD Template
	Author : Akhouad-me
	Web    : www.akhouad.me
*/
import WOW from 'wow.js'
// import isotope from 'isotope-layout'
//window.$ = window.jQuery = require('jquery');
//window.isotope = require('isotope-layout');
window.$ = window.jQuery = require('jquery');
window.isotope = require("isotope-layout");

(function ($) {
	$(window).on('load', function () {
		// INITIALIZE ANIMSITION
		if ($(".animsition").length) {
			$(".animsition").animsition({
				inClass: 'fade-in-up-sm',
				outClass: 'fade-out-up-sm',
				inDuration: 1100,
				outDuration: 800,
				linkElement: '.animsition-link',
				loading: true,
				loadingParentElement: 'body',
				unSupportCss: ['animation-duration',
					'-webkit-animation-duration',
					'-o-animation-duration'
				],
				overlay: false,
				overlayClass: 'animsition-overlay-slie',
				overlayParentElement: 'body'
			});
		}

		// INPUTS EVENTS
		$(".input_1 input, .textarea_1 textarea").focus(function () {
			$(this).next("span").addClass("active");
		});
		$(".input_1 input, .textarea_1 textarea").blur(function () {
			if ($(this).val() === "") {
				$(this).next("span").removeClass("active");
			}
		});

		// TABS
		$(".bottom-line").css({
			width: $(".tab nav a").first().width() + 20 + "px" // 20 = element's padding * 2
		});
		var _current_index = 0;
		$(".tab nav a").click(function (e) {
			e.preventDefault();
			// tab navigation styles
			var _this = $(this);
			var _index = _this.index();
			if (_current_index !== _index) {
				$(".tab nav a").each(function () {
					if ($(this).hasClass("current")) $(this).removeClass("current");
				});
				_this.addClass("current");
				$(".bottom-line").css({
					left: _this.offset().left - _this.parent().offset().left + "px",
					width: _this.width() + 20 + "px" // 20 = element's padding * 2
				});

				// show tab content
				$(".tab_single.shown").fadeOut(200);
				setTimeout(function () {
					$(".tab_single").eq(_index).fadeIn(200);
					$(".tab_single").eq(_index).addClass("shown");
				}, 200);

				_current_index = _index;
			}
		});

		// NAVBAR
		var _link = $("nav.desktop-nav ul.first-level").children("li");
		var shown = false;
		// show navbar 
		$(".menu-icon").click(function () {
			var _this = $(this);
			$("nav.mobile-nav").slideToggle(200);
			if (!shown) {
				_this.children("div").css("width", "30px");
				shown = true;
			} else {
				_this.children("div").first().css("width", "30px");
				_this.children("div").eq(1).css("width", "15px");
				_this.children("div").eq(2).css("width", "20px");
				shown = false;
			}
		});

		// dropdown - desktop
		_link.hover(function (e) {
			e.preventDefault();
			var _this = $(this);
			if (_this.children("ul.second-level").html() !== undefined) {
				if (e.type === "mouseenter") {
					_this.children("ul.second-level").slideDown(200);
				} else {
					_this.children("ul.second-level").slideUp(200);
				}
			}
		});

		// dropdown - mobile
		$("nav.mobile-nav").html($("nav.desktop-nav").html()); // set navbar

		var mobile_link = $("nav.mobile-nav ul.first-level").children("li");
		mobile_link.children("a").click(function (e) {
			var _this = $(this);
			var submenu_exists = (_this.next("ul.second-level").html() === undefined) ? false : true;
			if (submenu_exists) {
				e.preventDefault();
				$(".down").slideUp(200);
				if (_this.next("ul.second-level").hasClass("down")) {
					_this.next("ul.second-level").removeClass("down");
				} else {
					$(".down").removeClass("down");
					_this.next("ul.second-level").slideDown(200);
					_this.next("ul.second-level").addClass("down");
				}
			}
		});

	});
})(jQuery);

$(window).on('load', function () {
	new WOW().init();

	// initialise flexslider
	$('.site-hero').flexslider({
		animation: "fade",
		directionNav: false,
		controlNav: false,
		keyboardNav: true,
		slideToStart: 0,
		animationLoop: true,
		pauseOnHover: false,
		slideshowSpeed: 4000,
	});


	// initialize isotope
	var $container = $('.portfolio_container');
	$container.isotope({
		filter: '*',
	});

	$('.portfolio_filter a').click(function () {
		$('.portfolio_filter .active').removeClass('active');
		$(this).addClass('active');

		var selector = $(this).attr('data-filter');
		$container.isotope({
			filter: selector,
			animationOptions: {
				duration: 500,
				animationEngine: "jquery"
			}
		});
		return false;
	});
});

