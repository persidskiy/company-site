/* Theme Name: Worthy - Free Powerful Theme by HtmlCoder
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Version:1.0.0
 * Created:November 2014
 * License: Creative Commons Attribution 3.0 License (https://creativecommons.org/licenses/by/3.0/)
 * File Description: Initializations of plugins 
 */

(function($){

$(document).ready(function(){

	$(".banner-image").backstretch([
		'images/wallet.jpg',
		'images/balloon.jpg'
	], {duration: 5000, fade: 750});

	// Fixed header
	//-----------------------------------------------
	$(window).scroll(function() {
		if (($(".header.fixed").length > 0)) {
			if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
				$("body").addClass("fixed-header-on");
			} else {
				$("body").removeClass("fixed-header-on");
			}
		};
	});

	$(window).load(function() {
		if (($(".header.fixed").length > 0)) {
			if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
				$("body").addClass("fixed-header-on");
			} else {
				$("body").removeClass("fixed-header-on");
			}
		};
	});

	$('#navbar-collapse-1').on('show.bs.collapse hidden.bs.collapse', function(e) {
		$('.header').toggleClass('navbar-collapse-open', e.type === 'show');
	});

	//Scroll Spy
	//-----------------------------------------------
	if($(".scrollspy").length>0) {
		$("body").addClass("scroll-spy");
		$('body').scrollspy({
			target: '.scrollspy',
			offset: 152
		});
	}

	//Smooth Scroll
	//-----------------------------------------------
	if ($(".smooth-scroll").length>0) {
		$('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top-151
					}, 1000);
					return false;
				}
			}
		});
	}

	// Animations
	//-----------------------------------------------
	if (($("[data-animation-effect]").length>0) && !Modernizr.touch) {
		$("[data-animation-effect]").each(function() {
			var $this = $(this),
			animationEffect = $this.attr("data-animation-effect");
			if(Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
				$this.appear(function() {
					setTimeout(function() {
						$this.addClass('animated object-visible ' + animationEffect);
					}, 400);
				}, {accX: 0, accY: -130});
			} else {
				$this.addClass('object-visible');
			}
		});
	}


	// smooth scrolling
	var body = $('body'),
		scrollTimer;

	$(window).on('scroll', function() {
		clearTimeout(scrollTimer);
		body.addClass('disable-hover');

		scrollTimer = setTimeout(function(){
			body.removeClass('disable-hover');
		}, 300);
	});

}); // End document ready

})(this.jQuery);
