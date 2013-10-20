/**
 * Main JS file for Big Orange behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){
	$("#drop-btn").click(function(){
		$("html, body").animate({ scrollTop: 400 }, "slow");
  return false;
	});

        // On the home page, move the blog icon inside the header 
        // for better relative/absolute positioning.

        //$("#blog-logo").prependTo("#site-head-content");

    });

}(jQuery));