define(["jquery","owl","slickslider"],function($){
	$(document).ready(function(){
		
		// Initialize Owl Carousels.
		if(typeof(globalSiteSpecificVars.carouselConfig)==="undefined"){
			carouselConfig = {
				margin:10, responsiveClass:true,
				loop:true,
				autoplay:true,
				lazyload:true,
				autoHeight: false,
				animateOut:'fadeOut',
				autoplayHoverPause: true,
				smartSpeed:450,
				autoplayTimeout:5000,
				dots:true,
				items:1,
				nav:false,
				responsive:{
					0:{
						
					},
					500:{
				 
					},
					700:{
						nav:true,
					  
					},
					1000:
					{
						nav:true,

					},
					1300:{
						nav:true,

					}
				}
			};
		}else{
			carouselConfig = (globalSiteSpecificVars.carouselConfig);
			
		}
		$('.owl-carousel').owlCarousel(carouselConfig);
		
		
		// Arrow elements with Font Awesome icons.
		var prevArrow = '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button"><i class="fa fa-arrow-left" aria-hidden="true"></i><span>Prev</span></button>';
		var nextArrow = '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button"><i class="fa fa-arrow-right" aria-hidden="true"></i><span>Next</span></button>';
		
		// Initialize Slick Carousels.
		if(typeof(globalSiteSpecificVars.slickCarouselConfig)==="undefined"){
			carouselConfig = {
				arrows: !Modernizr.touch,
				autoplay:false,
				lazyload:"ondemand",
				adaptiveHeight: false,
				speed:450,
				dots:true,
				items:1,
				prevArrow:prevArrow,
				nextArrow:nextArrow,
			};
		}else{
			carouselConfig = (globalSiteSpecificVars.slickCarouselConfig);
		}
		$('.slick-carousel').slick(carouselConfig);
	});
});
