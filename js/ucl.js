// UCL JS

$(document).ready(function(){

	$('.tabbed div').hide();
	$('.tabbed div:first').show();
	$('.tabbed ul li:first').addClass('active');

	$('.tabbed ul li a').click(function(){
	$('.tabbed ul li').removeClass('active');
	$(this).parent().addClass('active');
	var currentTab = $(this).attr('href');
	$('.tabbed div').hide();
	$(currentTab).show();
	return false;
	});


	var allPanels = $('.accordion > dd').hide();

  $('.accordion > dt > a').click(function() {
    allPanels.slideUp();
    $(this).parent().next().slideDown();
    return false;
  });


if (document.documentElement.clientWidth < 767) {


	//Add Inactive Class To All Accordion Headers
		$('.accordion-header').addClass('inactive-header');

		//Set The Accordion Content Width
		//var contentwidth = $('.accordion-header').width();
		//$('.accordion-content').css({'width' : contentwidth });

		//Open The First Accordion Section When Page Loads
//		$('.accordion-header').first().toggleClass('active-header').toggleClass('inactive-header');
//		$('.accordion-content').first().slideDown().toggleClass('open-content');

		// The Accordion Effect
		$('.accordion-header').click(function () {
			if($(this).is('.inactive-header')) {
//				$('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
//				$(this).toggleClass('active-header').toggleClass('inactive-header');
				$(this).removeClass('inactive-header').addClass('active-header');
				$(this).next().slideToggle().toggleClass('open-content');
			}

			else {
				$(this).removeClass('active-header').addClass('inactive-header');
				$(this).next().slideToggle().toggleClass('open-content');
			}
		});

}

	// Search things



// removes pillbox > needs to remove from facet
// # needs improving so only removes one item
// currently removes all created elements
$('.pillbox__link').click(function() {
  $(this).parent().remove();
  return false;
});

// face show/hide
// # needs fixing so doesn't hide _all_ facet-list
$('.facet h4').click(function() {
  event.preventDefault();
  $('.facet-list').toggleClass('hide-facet');
  return false;
});

// create pillbox and use the relevant checked checkboxs label as the text
$('.facet-list__item input').click(function() {
  if ($(this).attr('checked')) {

  }
  else {
    $('.pillboxes').append('<li class="pillbox"><h4 class="pillbox__item"><a class="pillbox__link" href="">A Thing <span>x</span></a></h4></li>');
  }
});



});
