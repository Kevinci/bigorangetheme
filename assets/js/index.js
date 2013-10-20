/**
 * Main JS file for Big Orange behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){
	var offset = parseInt($('body').offset().top);
	var bheight = $(window).height();
	var percent = 1;
	var hpercent = bheight * percent;
	$("#drop-btn").click(function(){
		$("html, body").animate({ scrollTop: hpercent }, "slow");
  return false;
	});

        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");

    });

}(jQuery));