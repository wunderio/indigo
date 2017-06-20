/*
*
This code is taken from ucl.js and modified for multiple instances
of the accordion. We pass an array of array configs carrying a unique
id so we can scope all methods to a single instance of an accordion.
*
*/
define(['jquery'],function($){
	
	function removeCurrentClassFromAll(accordionObj) {
        var allPanelsAnchor = $(accordionObj).find('a.currentAccordionAnchor');
		allPanelsAnchor.each(function() {
			$(this).removeClass("currentAccordionAnchor");
		});
	}

	function accordion(accordionObj){
		var tmpAccordionObj = $('.accordion.accordion--' + accordionObj.accordionId);

		$(tmpAccordionObj).each(function(){
			var allPanels = $(this).find('.accordion__description');
			allPanels.slideUp();

			$(this).find('.accordion__title a').each(function() {
				
				//open accordions that have this set in their class
				var tmpAccordionClass = $(this).attr("class");
                if (typeof tmpAccordionClass !== 'undefined' && tmpAccordionClass.indexOf('currentAccordionAnchor') >= 0){
					$(this).parent().next().slideDown();
                }
								
				//add accordion state indicator
				var $indicator = $('<span aria-hidden="true" class="accordion__state-indicator"></span>');
				$(this).append($indicator);
			});

			$(tmpAccordionObj).find('.accordion__title a').click(function() {
				allPanels.slideUp();
				var tmpAccordionClass = $(this).attr("class");
		        var accordionObj = $(this).parent().parent();
				removeCurrentClassFromAll(accordionObj);
				if (typeof tmpAccordionClass === 'undefined' || tmpAccordionClass.indexOf('currentAccordionAnchor') === -1) {
					$(this).parent().next().slideDown();
					$(this).addClass("currentAccordionAnchor");
				}
				return false;
			});
		});
	}

	function init(){
		var item = {};

		if(typeof globalSiteSpecificVars.accordionConfArr!=='undefined' && globalSiteSpecificVars.accordionConfArr.length > 0){
			for(item in globalSiteSpecificVars.accordionConfArr){
				accordion(globalSiteSpecificVars.accordionConfArr[item]);
			}
		}
	}

	$(document).ready(function(){
		init();
	});

});
