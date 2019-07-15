$(document).ready(function(){
	
	$(".wallet .drop-down h6").click(function(){
		$(this).parent().siblings().find("p").addClass("hidden");
		$(this).next().toggleClass("hidden");
	});

});
