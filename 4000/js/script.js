$(document).ready(function() {
	$(".contact-me").click(function(event) {
		event.preventDefault ? event.preventDefault() : event.returnValue = false;
		$(this).toggleClass("active");
		$(".contact-details").slideToggle("fast");
	});
});