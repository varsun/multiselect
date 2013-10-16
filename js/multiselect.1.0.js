/*! multiselect v1.0.0 | (c) 2013 Jagan P | loveyourcode.com/license
//@ info@loveyourcode.com
*/
(function ( $ ) {
	$.fn.multiselect = function(options) {
		
		var settings = $.extend({}, $.fn.multiselect.defaults, options);
		
		return this.each( function() {
			
			$(this).append('<a href="#" data-id="clear">Clear</a>');
			
			var child = $(this);
			
			if(settings.mode != "parent") {
				
				child = settings.child;
				
				$(this).addClass("multiselect");
				
				$(this).children().bind("click",[],function(e) {
					
					$(this).toggleClass("multiselected");
					
					if($.isNumeric($(this).data("id"))) {
						
						if($(this).hasClass("multiselected")) {
							child.find("[data-parent='" + $(this).data("id") + "']").addClass("multiselected");
						}
						else {
							child.find("[data-parent='" + $(this).data("id") + "']").removeClass("multiselected");
						}
					}
					
					if($(this).data("id") == "clear") {
						
						$(this).parent().children().removeClass("multiselected");
						child.children().removeClass("multiselected");
					}
				});
			}
						
			child.addClass("multiselect");
			
			child.children().bind("click",[],function(e) {
				
				$(this).toggleClass("multiselected");
				
				if($(this).data("id") == "clear") {
					
					child.children().removeClass("multiselected");
				}
			});
        });
	};
	
	$.fn.multiselect.defaults = {

		mode: "parent",
		child: null
	};

	$.fn.getselected = function(){

		var selectedid = [];

		$(this).find("[class='multiselected']").each(function(index, element) {

			selectedid.push($(this).data("id"));
		});
		
		return selectedid;
	};

	$.fn.setselected = function(selectedid){
		var child = $(this);
		$.each(selectedid, function(index, element) {
			$(child).find("[data-id='" + element + "']").addClass("multiselected");
		});
		
		return selectedid;
	};
}( jQuery ));