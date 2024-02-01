window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`)
})
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})



!function(){
var $header = jQuery( ".navlink3" );         
var appScroll = appScrollForward;
var appScrollPosition = 0;
var scheduledAnimationFrame = false;

function appScrollReverse() {
	scheduledAnimationFrame = false;
	if ( appScrollPosition > 1675 )
		return;
	$header.removeClass( "navactive" );
	appScroll = appScrollForward;
}

function appScrollForward() {
	scheduledAnimationFrame = false;
	if ( appScrollPosition < 1675 )
		return;
	$header.addClass( "navactive" );
	appScroll = appScrollReverse;
}

function appScrollHandler() {
	appScrollPosition = window.pageYOffset;
	if ( scheduledAnimationFrame )
		return;
	scheduledAnimationFrame = true;
	requestAnimationFrame( appScroll );
}

jQuery( window ).scroll( appScrollHandler );
}();

!function(){
	var $header = jQuery( ".navlink2" );         
	var appScroll = appScrollForward;
	var appScrollPosition = 0;
	var scheduledAnimationFrame = false;
	
	function appScrollReverse() {
		scheduledAnimationFrame = false;
		if ( appScrollPosition > 800)
			return;
		$header.removeClass( "navactive" );
		appScroll = appScrollForward;
	}
	
	function appScrollForward() {
		scheduledAnimationFrame = false;
		if ( appScrollPosition < 800 )
			return;
		$header.addClass( "navactive" );
		appScroll = appScrollReverse;
	}
	
	function appScrollHandler() {
		appScrollPosition = window.pageYOffset;
		if ( scheduledAnimationFrame )
			return;
		scheduledAnimationFrame = true;
		requestAnimationFrame( appScroll );
	}
	
	jQuery( window ).scroll( appScrollHandler );
	}();

	!function(){
		var $header = jQuery( ".navlink" );         
		var appScroll = appScrollForward;
		var appScrollPosition = 0;
		var scheduledAnimationFrame = false;
		
		function appScrollReverse() {
			scheduledAnimationFrame = false;
			if ( appScrollPosition > 0)
				return;
			$header.removeClass( "navactive" );
			appScroll = appScrollForward;
		}
		
		function appScrollForward() {
			scheduledAnimationFrame = false;
			if ( appScrollPosition < 0 )
				return;
			$header.addClass( "navactive" );
			appScroll = appScrollReverse;
		}
		
		function appScrollHandler() {
			appScrollPosition = window.pageYOffset;
			if ( scheduledAnimationFrame )
				return;
			scheduledAnimationFrame = true;
			requestAnimationFrame( appScroll );
		}
		
		jQuery( window ).scroll( appScrollHandler );
		}();

